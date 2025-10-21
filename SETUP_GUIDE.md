# 🚀 Medi-AI Chatbot Setup Guide

Follow these steps to get your Medi-AI Chatbot up and running.

## Prerequisites

✅ Node.js 18+ installed ([Download](https://nodejs.org/))
✅ npm or yarn package manager
✅ OpenAI API account ([Sign up](https://platform.openai.com/))
✅ Text editor (VS Code recommended)

## Step-by-Step Setup

### Step 1: Verify Project Files

Make sure you have these files in your project:
```
Medi-chat-AI/
├── server.js
├── package.json
├── .gitignore
├── .env.example
├── render.yaml
├── README.md
└── public/
    └── index.html
```

### Step 2: Install Dependencies

Open PowerShell in your project directory and run:

```powershell
npm install
```

This installs:
- express (web framework)
- cors (cross-origin support)
- dotenv (environment variables)
- openai (OpenAI API client)
- express-rate-limit (rate limiting)
- express-session (session management)

### Step 3: Get Your OpenAI API Key

⚠️ **IMPORTANT**: Since your previous key was exposed, you need a NEW one.

1. Go to https://platform.openai.com/api-keys
2. **Delete the old key** (sk-proj-RncB9JKM0yP71YRUr5xJ...)
3. Click **"Create new secret key"**
4. Give it a name: "Medi-AI-Production"
5. Copy the key (you'll only see it once!)
6. Store it safely

### Step 4: Create Your .env File

Create a file named `.env` in your project root:

**Option A: Copy from template**
```powershell
Copy-Item .env.example .env
```

**Option B: Create manually**
Create a new file called `.env` and add:

```env
# Replace with your NEW OpenAI API key
OPENAI_API_KEY=sk-proj-YOUR_NEW_KEY_HERE

# Server settings
PORT=3000
NODE_ENV=development

# Generate a random secret (see below)
SESSION_SECRET=your_random_secret_here

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### Step 5: Generate Session Secret

Run this in PowerShell to generate a secure random secret:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and paste it as your `SESSION_SECRET` in `.env`

### Step 6: Verify .env File

Your final `.env` should look like:

```env
OPENAI_API_KEY=sk-proj-AbC123...XyZ789
PORT=3000
NODE_ENV=development
SESSION_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
FRONTEND_URL=http://localhost:3000
```

### Step 7: Test the Server

Start your server:

```powershell
npm start
```

You should see:
```
Medi-AI Chatbot server running on port 3000
Frontend: http://localhost:3000
API Health: http://localhost:3000/api/health
```

### Step 8: Test in Browser

1. Open your browser
2. Go to http://localhost:3000
3. You should see the Medi-AI landing page
4. Click the chat button in the bottom-right corner
5. Type a message and press Enter
6. Wait for the AI response

### Step 9: Test the API

Test the health endpoint:

```powershell
curl http://localhost:3000/api/health
```

Expected response:
```json
{"status":"OK","timestamp":"2025-10-21T..."}
```

## Troubleshooting

### Error: "OPENAI_API_KEY is not defined"

**Problem**: API key not loaded from .env file

**Solution**:
1. Verify `.env` file exists in project root
2. Check API key is on a single line (no line breaks)
3. Restart the server after editing .env

### Error: "Invalid API key"

**Problem**: API key is incorrect or revoked

**Solution**:
1. Go to https://platform.openai.com/api-keys
2. Verify the key exists and is active
3. If needed, create a new key
4. Update `.env` file
5. Restart server

### Error: "Port 3000 already in use"

**Problem**: Another application is using port 3000

**Solution**:
1. Change `PORT=3001` in `.env` file
2. Restart server
3. Access at http://localhost:3001

Or kill the process using port 3000:

```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill it (replace PID with actual number)
taskkill /PID <PID> /F
```

### Error: "Cannot find module 'express'"

**Problem**: Dependencies not installed

**Solution**:
```powershell
rm -rf node_modules
rm package-lock.json
npm install
```

### Error: "CORS policy blocked"

**Problem**: Frontend and backend URL mismatch

**Solution**:
1. Check `FRONTEND_URL` in `.env`
2. Should match your browser URL
3. Restart server after changes

### Chat button doesn't respond

**Problem**: JavaScript errors or connection issues

**Solution**:
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests
4. Verify server is running (check terminal)

### AI responses are slow

**Normal**: First request may take 3-5 seconds

**If consistently slow (>10 seconds)**:
1. Check your internet connection
2. Check OpenAI API status: https://status.openai.com
3. Consider reducing `max_tokens` in server.js

### Rate limit errors

**Problem**: Too many requests too quickly

**Solution**:
1. Wait 15 minutes
2. Adjust rate limits in server.js if needed:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20  // Increase this number
});
```

## Development Tips

### Hot Reload (Auto-restart on changes)

Install nodemon:
```powershell
npm install -g nodemon
```

Run with:
```powershell
npm run dev
```

Now the server restarts automatically when you edit files.

### View Logs

Server logs appear in your terminal. To save them:

```powershell
npm start > logs.txt 2>&1
```

### Test Different Scenarios

1. **Empty messages**: Try sending empty text (should be blocked)
2. **Long conversations**: Send 10+ messages (tests memory limit)
3. **Special characters**: Try emojis, symbols (tests encoding)
4. **Multiple browsers**: Test session isolation
5. **Clear chat**: Test the clear chat button

### Customize the AI

Edit the system prompt in `server.js` (lines 17-29):

```javascript
const SYSTEM_PROMPT = `You are Medi-AI... [edit this]`;
```

Restart server after editing.

## Next Steps

✅ Basic setup complete!

### Enhance Your Chatbot:

1. **Add persistent storage** (see DOCUMENTATION.md)
2. **Deploy to production** (see Deployment section below)
3. **Add authentication** (see Security section)
4. **Customize styling** (edit public/index.html)
5. **Monitor costs** (set up OpenAI billing alerts)

## Deployment

### Deploy to Render (Free Tier)

1. Push code to GitHub:
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/medi-chat-ai.git
git push -u origin main
```

2. Go to https://render.com
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Render auto-detects `render.yaml`
6. Add environment variables:
   - `OPENAI_API_KEY`: Your OpenAI key
   - `SESSION_SECRET`: Generate new one
   - `FRONTEND_URL`: Your Render URL
   - `NODE_ENV`: production
7. Click "Create Web Service"
8. Wait 5-10 minutes for deployment
9. Access your live chatbot!

### Deploy to Other Platforms

- **Heroku**: `git push heroku main`
- **Railway**: Connect GitHub repo
- **Vercel**: Configure as Node.js app
- **DigitalOcean**: Use App Platform

All require setting environment variables in their dashboard.

## Security Checklist

Before going to production:

- [ ] API key rotated (new key, old one deleted)
- [ ] `.env` file NOT in Git (check `.gitignore`)
- [ ] Strong session secret (32+ random characters)
- [ ] HTTPS enabled (automatic on most platforms)
- [ ] OpenAI billing alerts configured
- [ ] Rate limiting tested
- [ ] Error handling tested
- [ ] CORS configured for production domain

## Cost Management

### OpenAI Pricing (GPT-4o-mini)

- **Input**: ~$0.15 per 1M tokens
- **Output**: ~$0.60 per 1M tokens

### Estimated Costs

- Average conversation: 500-1000 tokens
- **Cost per conversation**: ~$0.0005-0.001 (less than a cent)
- **100 conversations**: ~$0.10
- **1000 conversations**: ~$1.00

### Set Budget Limits

1. Go to https://platform.openai.com/account/limits
2. Set monthly limit: $10-20 (for testing)
3. Enable notifications at 75%, 90%, 100%

## Support Resources

- **OpenAI Documentation**: https://platform.openai.com/docs
- **Express.js Guide**: https://expressjs.com/en/guide/routing.html
- **Session Management**: https://github.com/expressjs/session
- **Rate Limiting**: https://github.com/express-rate-limit/express-rate-limit

## Getting Help

If you're stuck:

1. Check error messages in terminal
2. Check browser console (F12)
3. Review DOCUMENTATION.md for detailed explanations
4. Check SECURITY_NOTICE.md for security issues
5. Review troubleshooting section above

## Success Indicators

You're all set if:

✅ Server starts without errors
✅ Browser shows landing page
✅ Chat button opens chat window
✅ Messages send and receive responses
✅ AI provides relevant health information
✅ Clear chat button works
✅ No API key errors
✅ No CORS errors

## Congratulations! 🎉

Your Medi-AI Chatbot is now running! Start chatting and exploring the features.

---

**Need more details?** See `DOCUMENTATION.md` for line-by-line code explanations and advanced features.

**Security concerns?** Review `SECURITY_NOTICE.md` immediately.

