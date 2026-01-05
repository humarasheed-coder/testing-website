# 🚀 Git Deployment Steps

## ⚠️ Important: Restart PowerShell First!

After installing Git, you need to **restart PowerShell** for it to recognize Git commands.

1. Close this PowerShell window
2. Open a new PowerShell window
3. Navigate to your project:
   ```bash
   cd "C:\Users\huma rasheed\Desktop\TestingWebsite"
   ```

---

## Step 1: Initialize Git Repository

```bash
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create First Commit

```bash
git commit -m "Initial commit: Next.js testing website for VWO"
```

---

## Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com) and **sign in**
2. Click the **"+"** icon in the top right → **"New repository"**
3. **Repository name:** `testing-website` (or any name you like)
4. **Description:** "Next.js testing website for VWO experiments"
5. Choose **Public** or **Private**
6. **⚠️ IMPORTANT:** Do NOT check "Add a README file" (we already have files)
7. Click **"Create repository"**

---

## Step 5: Connect to GitHub and Push

After creating the repository, GitHub will show you commands. Run these in PowerShell:

**Replace `YOUR_USERNAME` and `REPO_NAME` with your actual values:**

```bash
# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You'll be asked for your GitHub username and password. 
- If you have 2FA enabled, use a **Personal Access Token** instead of password
- Create token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

---

## Step 6: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. **Sign up/Login** (use your GitHub account - easiest!)
3. Click **"New Project"** or **"Add New..."** → **"Project"**
4. You'll see a list of your GitHub repositories
5. Find and click **"Import"** next to your `testing-website` repository
6. Vercel will auto-detect Next.js:
   - Framework Preset: **Next.js** ✅
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
7. Click **"Deploy"**
8. Wait 2-3 minutes
9. **🎉 Your website is live!** Copy the URL (e.g., `https://testing-website.vercel.app`)

---

## ✅ After Deployment

Your site will be available at: `https://your-project-name.vercel.app`

**Next steps:**
1. Add VWO SmartCode to `app/layout.tsx`
2. Commit and push changes
3. Vercel will automatically redeploy!

---

## 🔄 Making Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will **automatically redeploy** your site! 🚀

---

## 🐛 Troubleshooting

### Git still not recognized?
- Make sure you **restarted PowerShell** after installing Git
- Or restart your computer

### Authentication failed?
- Use Personal Access Token instead of password
- GitHub → Settings → Developer settings → Personal access tokens

### Push rejected?
- Make sure you created the GitHub repository first
- Check that the repository name matches in the remote URL

---

**Ready? Restart PowerShell and follow the steps above!** 🎯

