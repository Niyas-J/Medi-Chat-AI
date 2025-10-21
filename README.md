# 🏥 Medi-AI Chatbot

An AI-powered medical information chatbot built with Node.js, Express, and OpenAI's GPT API. Provides responsible, evidence-based health information while emphasizing the importance of professional medical advice.

## Features

- 🤖 **AI-Powered Conversations**: Uses OpenAI GPT-4o-mini for intelligent responses
- 💬 **Session-Based Memory**: Maintains conversation context per user
- 🔒 **Rate Limiting**: Protects against API abuse
- 🎨 **Modern UI**: Beautiful, responsive chat interface
- ⚡ **Real-time Chat**: Instant messaging with typing indicators
- 🔐 **Secure**: Environment-based configuration for sensitive data
- 📱 **Responsive**: Works on desktop and mobile devices

## Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd medi-chat-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
NODE_ENV=development
SESSION_SECRET=your-secret-key-here
FRONTEND_URL=http://localhost:3000
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
medi-chat-ai/
├── server.js           # Express backend server
├── public/
│   └── index.html      # Frontend chat interface
├── package.json        # Dependencies and scripts
├── .env               # Environment variables (not in git)
├── .gitignore         # Git ignore rules
├── render.yaml        # Render deployment config
└── README.md          # This file
```

## API Endpoints

### POST `/api/chat`
Send a message to the chatbot.

**Request:**
```json
{
  "message": "What are the symptoms of flu?"
}
```

**Response:**
```json
{
  "message": "AI response here...",
  "success": true
}
```

### POST `/api/clear-session`
Clear the conversation history for the current session.

**Response:**
```json
{
  "message": "Chat history cleared successfully",
  "success": true
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-10-21T12:00:00.000Z"
}
```

## Deployment

### Render

1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Connect your repository
4. Render will automatically detect `render.yaml`
5. Add your environment variables in the Render dashboard
6. Deploy!

### Other Platforms

The app can be deployed to any Node.js hosting platform:
- Heroku
- Railway
- Fly.io
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## Configuration

### Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)
- `SESSION_SECRET`: Secret for session encryption
- `FRONTEND_URL`: Frontend URL for CORS

## Rate Limiting

- 20 requests per 15 minutes per IP address
- Prevents API abuse and excessive costs

## Security Considerations

- Never commit `.env` file
- Use strong session secrets in production
- Enable HTTPS in production
- Consider adding authentication for production use
- Monitor API usage to prevent unexpected costs

## Disclaimer

This chatbot provides general health information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

