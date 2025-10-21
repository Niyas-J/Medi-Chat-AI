# 🚀 Deploy Medi-AI Chatbot to Vercel

## Quick Deployment Guide

### Prerequisites
- ✅ Vercel account (free) - [Sign up](https://vercel.com/signup)
- ✅ GitHub repository (already done!)
- ✅ Gemini API key

---

## 🎯 Deployment Steps

### Method 1: Deploy from GitHub (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **medi-chat-ai** (or your choice)
- Directory? **./ (current directory)**
- Override settings? **N**

#### Step 4: Add Environment Variables
After deployment, go to your Vercel dashboard:

1. Go to: https://vercel.com/dashboard
2. Select your project: **medi-chat-ai**
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
GEMINI_API_KEY = your_gemini_api_key_here
SESSION_SECRET = your_random_secret_here
NODE_ENV = production
PORT = 3000
```

5. Click **Save**
6. Redeploy: Go to **Deployments** → Click ⋯ → **Redeploy**

---

### Method 2: Deploy from Vercel Dashboard

#### Step 1: Go to Vercel Dashboard
Visit: https://vercel.com/new

#### Step 2: Import Git Repository
1. Click **"Add New..."** → **"Project"**
2. Import from **GitHub**
3. Select: **Niyas-J/Medi-Chat-AI**
4. Click **"Import"**

#### Step 3: Configure Project
1. **Framework Preset**: Other
2. **Build Command**: (leave empty)
3. **Output Directory**: public
4. **Install Command**: npm install

#### Step 4: Add Environment Variables
Click **"Environment Variables"** and add:

```
GEMINI_API_KEY = your_gemini_api_key_here
SESSION_SECRET = your_random_secret_here  
NODE_ENV = production
```

#### Step 5: Deploy
Click **"Deploy"**

Wait 1-2 minutes for deployment to complete!

---

## ✅ After Deployment

### Your Live URL
Vercel will give you a URL like:
```
https://medi-chat-ai.vercel.app
```
or
```
https://medi-chat-ai-niyas-j.vercel.app
```

### Test Your Deployment
1. Visit your Vercel URL
2. Click the chat interface
3. Send a test message
4. Click "Book Appointment" button
5. Verify it all works!

---

## 🔧 Custom Domain (Optional)

### Add Your Own Domain

1. Go to **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `medi-ai.example.com`)
4. Follow DNS instructions
5. Wait for DNS propagation (5-60 minutes)

---

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to GitHub!

```bash
git add .
git commit -m "Update feature"
git push origin main
```

✨ Vercel will automatically build and deploy!

---

## 🐛 Troubleshooting

### Issue: "Module not found"
**Solution**: Make sure all dependencies are in `package.json`
```bash
npm install --save missing-package
git push
```

### Issue: "Environment variables not working"
**Solution**: 
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Make sure variables are added for **Production**
3. Redeploy the project

### Issue: "API routes not working"
**Solution**: Check `vercel.json` is correctly configured (already done!)

### Issue: "Session not persisting"
**Solution**: This is normal with serverless. For production, consider:
- Using Redis (Upstash)
- Using Vercel KV
- Or accept session limitations

---

## 📊 Monitor Your Deployment

### View Logs
1. Go to Vercel Dashboard
2. Select your project
3. Go to **Deployments**
4. Click on latest deployment
5. View **Function Logs**

### Analytics
- Go to **Analytics** tab
- See visitor stats
- Monitor performance

---

## 💰 Vercel Limits (Free Tier)

- ✅ **100 GB bandwidth/month**
- ✅ **100 deployments/day**
- ✅ **Serverless function execution: 100 hours/month**
- ✅ **Unlimited projects**

**Your chatbot fits well within free tier!**

---

## 🔐 Security Notes

### Important:
1. ✅ Never commit `.env` file (already in `.gitignore`)
2. ✅ Add environment variables in Vercel Dashboard
3. ✅ Keep your Gemini API key secret
4. ✅ Monitor API usage on Google AI Studio

---

## 📝 Deployment Checklist

Before deploying:
- [ ] `vercel.json` created ✅
- [ ] `.vercelignore` created ✅
- [ ] Environment variables ready
- [ ] GitHub repository updated
- [ ] Gemini API key working locally
- [ ] All dependencies in `package.json`

---

## 🎉 Success!

Your Medi-AI Chatbot is now live on Vercel!

**Share your URL:**
- Add to your portfolio
- Share on social media
- Add to your resume
- Show to potential employers!

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs
- **Node.js on Vercel**: https://vercel.com/docs/functions/serverless-functions/runtimes/node-js
- **Environment Variables**: https://vercel.com/docs/concepts/projects/environment-variables

---

## 📞 Need Help?

- Vercel Support: https://vercel.com/support
- Vercel Community: https://github.com/vercel/vercel/discussions

---

**Good luck with your deployment!** 🚀

