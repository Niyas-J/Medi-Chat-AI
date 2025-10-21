# 🌟 Gemini API Setup Guide

Your chatbot has been updated to use **Google's Gemini API** instead of OpenAI!

## ✨ Why Gemini?

- ✅ **FREE Tier**: 60 requests per minute
- ✅ **No Credit Card Required**: Start using immediately
- ✅ **Powerful**: Gemini Pro is very capable
- ✅ **Easy Setup**: Get API key in 2 minutes

---

## 🚀 Quick Setup (2 Minutes)

### Step 1: Get Your FREE Gemini API Key

1. **Go to:** https://makersuite.google.com/app/apikey
   - Or: https://aistudio.google.com/app/apikey

2. **Sign in** with your Google account

3. **Click** "Create API Key"

4. **Select** "Create API key in new project" (or use existing project)

5. **Copy** your API key immediately
   - It looks like: `AIzaSyC...your_key_here`

---

### Step 2: Update Your .env File

Open your `.env` file and **replace the entire content** with this:

```env
# Google Gemini API Configuration
GEMINI_API_KEY=your_gemini_api_key_here

# Server Configuration
PORT=3000
NODE_ENV=development

# Session Configuration
SESSION_SECRET=db2d1c1e1596fc2c39260272de87da82a4a52d54e7ed157200a8f7f789d84da8

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

**Replace** `your_gemini_api_key_here` with your actual Gemini API key.

Your final `.env` should look like:
```env
GEMINI_API_KEY=AIzaSyC1234567890abcdefghijklmnopqrstuvwxyz
PORT=3000
NODE_ENV=development
SESSION_SECRET=db2d1c1e1596fc2c39260272de87da82a4a52d54e7ed157200a8f7f789d84da8
FRONTEND_URL=http://localhost:3000
```

---

### Step 3: Install Gemini Package

Run this command:

```powershell
npm install @google/generative-ai
```

---

### Step 4: Restart Your Server

Your server will automatically restart, or you can manually restart it.

---

### Step 5: Test Your Chatbot!

1. Open http://localhost:3000
2. Click the chat button
3. Ask a question!
4. **It should work immediately!** 🎉

---

## 📊 Gemini Free Tier Limits

- **60 requests per minute**
- **1,500 requests per day**
- **1 million requests per month**
- **FREE forever!**

This is **MORE than enough** for development and testing!

---

## 🆚 Gemini vs OpenAI

| Feature | Gemini (FREE) | OpenAI (Paid) |
|---------|---------------|---------------|
| Cost | FREE | ~$0.001/request |
| Setup | No credit card | Requires billing |
| Quality | Excellent | Excellent |
| Speed | Fast | Fast |
| Limits | 60/min (free) | Based on credits |

---

## 🔧 Technical Changes Made

### What Changed:
1. ✅ Replaced OpenAI SDK with Google Gemini SDK
2. ✅ Updated API calls to use Gemini format
3. ✅ Changed model from `gpt-4o-mini` to `gemini-pro`
4. ✅ Updated package.json dependencies
5. ✅ Updated .env configuration

### What Stayed The Same:
- ✅ All frontend code (no changes needed)
- ✅ Session management
- ✅ Rate limiting
- ✅ Error handling
- ✅ Chat interface

---

## ✅ Verification Checklist

- [ ] Got Gemini API key from https://makersuite.google.com/app/apikey
- [ ] Updated `.env` file with `GEMINI_API_KEY`
- [ ] Ran `npm install @google/generative-ai`
- [ ] Restarted the server
- [ ] Tested chat at http://localhost:3000
- [ ] Chat is working!

---

## 🆘 Troubleshooting

### Error: "Cannot find module '@google/generative-ai'"

**Solution:**
```powershell
npm install @google/generative-ai
```

### Error: "API key not valid"

**Solution:**
1. Check your API key at https://makersuite.google.com/app/apikey
2. Make sure you copied it correctly (no extra spaces)
3. Verify `.env` file has: `GEMINI_API_KEY=AIza...`

### Error: "Resource exhausted"

**Solution:**
- You've hit the rate limit (60 requests/min)
- Wait 1 minute and try again
- Free tier is very generous!

### Chat still not working?

**Check:**
1. Server is running (terminal shows no errors)
2. `.env` file exists and has correct key
3. Ran `npm install`
4. Browser console (F12) for errors

---

## 💡 Pro Tips

### 1. Monitor Your Usage
Check usage at: https://aistudio.google.com/app/apikey

### 2. Rate Limiting
The app already has rate limiting (20 requests per 15 min per user)

### 3. Upgrade If Needed
If you need more:
- Gemini has paid tiers with higher limits
- But free tier is usually enough!

---

## 🎉 You're All Set!

Your Medi-AI Chatbot now uses:
- ✅ Google Gemini Pro (FREE!)
- ✅ No billing required
- ✅ Same great interface
- ✅ Works immediately

**Enjoy your FREE AI chatbot!** 🚀

---

## 📚 Additional Resources

- **Gemini API Docs**: https://ai.google.dev/docs
- **Get API Key**: https://makersuite.google.com/app/apikey
- **Pricing**: https://ai.google.dev/pricing
- **Models**: https://ai.google.dev/models/gemini

---

**Questions?** Check your terminal for error messages or open browser DevTools (F12) → Console tab.

