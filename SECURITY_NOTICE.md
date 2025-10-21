# 🔐 CRITICAL SECURITY NOTICE

## ⚠️ Your API Key Has Been Exposed

Your OpenAI API key was shared in a public conversation. **You MUST take immediate action** to secure your account.

## Immediate Actions Required

### 1. Rotate Your API Key (DO THIS NOW)

1. Go to [OpenAI API Keys Dashboard](https://platform.openai.com/api-keys)
2. Find the key starting with `sk-proj-RncB9JKM0yP71YRUr5xJ...`
3. Click the **"Revoke"** or **"Delete"** button
4. Click **"Create new secret key"**
5. Copy the new key immediately (you'll only see it once)
6. Add it to your `.env` file (see below)

### 2. Update Your .env File

Your `.env` file should look like this:

```env
# Replace with your NEW API key
OPENAI_API_KEY=sk-proj-YOUR_NEW_KEY_HERE

PORT=3000
NODE_ENV=development
SESSION_SECRET=your-randomly-generated-secret-here
FRONTEND_URL=http://localhost:3000
```

### 3. Generate a Strong Session Secret

Run this command to generate a secure random secret:

**PowerShell:**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

**Or use Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then add it to your `.env` file:
```env
SESSION_SECRET=your_generated_secret_here
```

### 4. Verify .gitignore

Make sure `.env` is in your `.gitignore` file (it already is, but verify):

```
.env
.env.local
.env.production
```

### 5. Check for Accidental Commits

If you've already committed the `.env` file to Git:

```bash
# Remove from Git history (if accidentally committed)
git rm --cached .env

# Commit the removal
git commit -m "Remove .env from tracking"

# If already pushed to GitHub, you'll need to:
# 1. Change the API key first
# 2. Then force push (or consider the repo compromised)
```

## Security Best Practices

### Never Share:
- ❌ API keys
- ❌ Session secrets
- ❌ Database passwords
- ❌ Environment variables

### Always:
- ✅ Use environment variables for secrets
- ✅ Add `.env` to `.gitignore`
- ✅ Use `.env.example` as a template (without real values)
- ✅ Rotate keys if exposed
- ✅ Set up billing alerts on OpenAI
- ✅ Use rate limiting (already implemented)

### Additional Security Measures

#### 1. Set OpenAI Usage Limits

1. Go to [OpenAI Usage Limits](https://platform.openai.com/account/limits)
2. Set a monthly budget limit (e.g., $10-20)
3. Enable email notifications
4. This prevents unexpected charges if key is compromised

#### 2. Monitor API Usage

Regularly check your usage at:
- [OpenAI Usage Dashboard](https://platform.openai.com/usage)

Look for:
- Unusual spikes in requests
- Requests from unknown IP addresses
- Unexpected costs

#### 3. Use IP Allowlisting (Enterprise)

If you have an OpenAI Enterprise account:
- Restrict API key usage to specific IP addresses
- Only allow your server's IP

#### 4. Implement Additional Rate Limiting

Your current setup limits to 20 requests per 15 minutes. Consider:
- Per-user limits (already implemented via session)
- Daily/weekly limits
- Cost-based limits

## What Could Happen If Key Is Compromised

- 💰 **Financial**: Unauthorized API usage charges on your account
- 🔓 **Data**: Potential access to your conversation data
- 🚫 **Service Disruption**: Rate limits exhausted, blocking legitimate users
- 📊 **Usage Quota**: Your quota could be consumed quickly

## Current Status

Your exposed key: `sk-proj-RncB9JKM0yP71YRUr5xJ...` (truncated for security)

**Status**: ⚠️ EXPOSED - Must be rotated immediately

## Verification Steps

After rotating your key:

1. ✅ Old key revoked on OpenAI dashboard
2. ✅ New key added to `.env` file
3. ✅ `.env` file NOT tracked by Git
4. ✅ Session secret generated and added
5. ✅ Billing alerts configured on OpenAI
6. ✅ Application tested with new key

## Testing Your Setup

After updating your API key, test it:

```bash
# Install dependencies
npm install

# Start the server
npm start

# In another terminal, test the API
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "test"}'
```

If you see a response, your setup is working!

## Need Help?

If you're unsure about any step:

1. **OpenAI Support**: https://help.openai.com/
2. **Check API Key Status**: https://platform.openai.com/api-keys
3. **Review Billing**: https://platform.openai.com/account/billing

## Remember

🔑 **API keys are like passwords** - treat them with the same level of security!

---

**Last Updated**: October 21, 2025
**Priority**: 🚨 CRITICAL - Act immediately

