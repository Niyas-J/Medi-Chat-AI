# ⚡ Quick Start Checklist

## 🚨 CRITICAL: Security First (5 minutes)

Your API key was exposed in our conversation. Follow these steps **IMMEDIATELY**:

### 1️⃣ Rotate Your OpenAI API Key

- [ ] Go to https://platform.openai.com/api-keys
- [ ] Delete key: `sk-proj-RncB9JKM0yP71YRUr5xJ...`
- [ ] Create new secret key
- [ ] Copy the new key

### 2️⃣ Create .env File

Create a file named `.env` in your project root with your NEW key:

```env
OPENAI_API_KEY=sk-proj-YOUR_NEW_KEY_HERE
PORT=3000
NODE_ENV=development
SESSION_SECRET=paste_random_secret_here
FRONTEND_URL=http://localhost:3000
```

### 3️⃣ Generate Session Secret

Run in PowerShell:
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy output and paste as `SESSION_SECRET` in `.env`

### 4️⃣ Set OpenAI Usage Limits

- [ ] Go to https://platform.openai.com/account/limits
- [ ] Set monthly limit: $10-20
- [ ] Enable email notifications

---

## 🚀 Launch Your Chatbot (3 minutes)

### 5️⃣ Install Dependencies

```powershell
npm install
```

### 6️⃣ Start Server

```powershell
npm start
```

Expected output:
```
Medi-AI Chatbot server running on port 3000
Frontend: http://localhost:3000
API Health: http://localhost:3000/api/health
```

### 7️⃣ Test in Browser

- [ ] Open http://localhost:3000
- [ ] Click chat button (bottom-right)
- [ ] Send a test message
- [ ] Verify AI responds

---

## ✅ You're Done!

Your Medi-AI Chatbot is now running!

## 📚 Next Steps

- **Learn more**: Read `DOCUMENTATION.md` for detailed explanations
- **Security**: Review `SECURITY_NOTICE.md` for best practices
- **Full setup**: See `SETUP_GUIDE.md` for troubleshooting
- **Deploy**: Follow deployment section in `README.md`

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "API key not defined" | Check `.env` file exists and has correct format |
| "Invalid API key" | Verify key is active on OpenAI dashboard |
| "Port already in use" | Change `PORT=3001` in `.env` |
| Chat doesn't work | Open F12 DevTools, check Console for errors |
| Slow responses | Normal for first request; check internet connection |

## 📞 Need Help?

1. Check error messages in terminal
2. Open browser DevTools (F12) → Console tab
3. Review `SETUP_GUIDE.md` troubleshooting section
4. Check OpenAI status: https://status.openai.com

---

**Total Setup Time**: ~8 minutes
**Status**: 🟢 Ready to use
**Cost**: ~$0.001 per conversation (very affordable!)

