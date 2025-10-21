// Import required modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Gemini AI client with API key from environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// System prompt that defines Medi-AI's behavior and guidelines
const SYSTEM_PROMPT = `You are Medi-AI, a helpful medical information assistant. Your role is to provide accurate, evidence-based health information while being cautious and responsible. 

Guidelines:
- Always remind users that you're not a replacement for professional medical advice
- For serious symptoms or emergencies, advise seeking immediate medical attention
- Provide general health information based on established medical knowledge
- Be empathetic and understanding
- Never diagnose or prescribe medications
- Clarify when information is general vs. requires professional evaluation
- Encourage users to consult healthcare professionals for personalized advice`;

// Configure CORS to allow frontend to communicate with backend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Parse JSON request bodies
app.use(express.json());

// Configure session middleware for maintaining conversation history per user
app.use(session({
  secret: process.env.SESSION_SECRET || 'medi-ai-secret-key-change-in-production',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Rate limiting to prevent API abuse - limit to 20 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiter to all API routes
app.use('/api/', limiter);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// POST endpoint for chat functionality
app.post('/api/chat', async (req, res) => {
  try {
    // Extract user message from request body
    const { message } = req.body;

    // Validate that message exists and is not empty
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Initialize conversation history in session if it doesn't exist
    if (!req.session.conversationHistory) {
      req.session.conversationHistory = [];
    }

    // Add user message to conversation history
    req.session.conversationHistory.push({
      role: 'user',
      content: message
    });

    // Initialize Gemini model (using gemini-2.0-flash-exp - Latest FREE model)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Build the prompt with system instructions and latest user message
    const prompt = `${SYSTEM_PROMPT}\n\n${message}`;

    // Call Gemini API to get chat completion
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const assistantMessage = response.text();

    // Add assistant's response to conversation history
    req.session.conversationHistory.push({
      role: 'assistant',
      content: assistantMessage
    });

    // Limit conversation history to last 10 messages to prevent token overflow
    if (req.session.conversationHistory.length > 10) {
      req.session.conversationHistory = req.session.conversationHistory.slice(-10);
    }

    // Send successful response with assistant's message
    res.json({
      message: assistantMessage,
      success: true
    });

  } catch (error) {
    // Log error for debugging
    console.error('Error calling Gemini API:', error);

    // Send error response to client
    res.status(500).json({
      error: 'Failed to process your request. Please try again.',
      success: false
    });
  }
});

// POST endpoint to clear conversation history
app.post('/api/clear-session', (req, res) => {
  // Clear conversation history from session
  req.session.conversationHistory = [];
  
  res.json({
    message: 'Chat history cleared successfully',
    success: true
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Medi-AI Chatbot server running on port ${PORT}`);
  console.log(`Frontend: http://localhost:${PORT}`);
  console.log(`API Health: http://localhost:${PORT}/api/health`);
});

