# 🚀 Deploy to Vercel - Step by Step Guide

## Option 1: Deploy via GitHub (Recommended)

### Step 1: Install Git (if not installed)

1. Download Git from: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/command prompt

### Step 2: Initialize Git Repository

Open PowerShell or Command Prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Next.js testing website for VWO"
```

### Step 3: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `testing-website` (or any name you like)
4. Description: "Next.js testing website for VWO experiments"
5. Choose **Public** or **Private**
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

### Step 4: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your project folder:

```bash
# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password (use a Personal Access Token if 2FA is enabled).

### Step 5: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login (use your GitHub account - easiest way!)
3. Click **"New Project"** or **"Add New..."** → **"Project"**
4. You'll see your GitHub repositories
5. Find and click **"Import"** next to your `testing-website` repository
6. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js ✅
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
7. Click **"Deploy"**
8. Wait 2-3 minutes for deployment
9. **Copy your deployment URL!** (e.g., `https://testing-website.vercel.app`)

🎉 **Your website is now live!**

---

## Option 2: Deploy via Vercel CLI (No GitHub needed)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
# Make sure you're in your project folder
cd "C:\Users\huma rasheed\Desktop\TestingWebsite"

# Deploy
vercel
```

Follow the prompts:
- **Set up and deploy?** → Type `Y` and press Enter
- **Which scope?** → Select your account
- **Link to existing project?** → Type `N` and press Enter
- **What's your project's name?** → Press Enter (uses folder name)
- **In which directory is your code located?** → Press Enter (uses current directory)

Your site will be deployed and you'll get a URL!

---

## Option 3: Deploy via Vercel Dashboard (Drag & Drop)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Install Vercel CLI: `npm install -g vercel`
3. In your project folder, run: `vercel --prod`
4. Or use the Vercel dashboard to upload your project folder

---

## ✅ After Deployment

### Update VWO Setup

Once deployed, you'll have a live URL. Use this URL when:
1. Adding VWO SmartCode (the URL will be your test site)
2. Creating VWO campaigns (enter this URL as the campaign URL)

### Your Deployment URL Format

Your site will be available at:
- `https://your-project-name.vercel.app`
- Or a custom domain if you add one later

---

## 🔄 Making Updates

### If using GitHub:

```bash
# Make your changes to files
# Then:
git add .
git commit -m "Description of changes"
git push
```

Vercel will **automatically redeploy** when you push to GitHub!

### If using Vercel CLI:

```bash
vercel --prod
```

---

## 🐛 Troubleshooting

### Git not found?
- Install Git from: https://git-scm.com/download/win
- Restart terminal after installation

### Authentication issues with GitHub?
- Use Personal Access Token instead of password
- Generate token: GitHub → Settings → Developer settings → Personal access tokens

### Vercel deployment fails?
- Check build logs in Vercel dashboard
- Make sure `package.json` has all dependencies
- Verify `next.config.js` is correct

### Need help?
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

## 📝 Quick Checklist

- [ ] Git installed (if using GitHub method)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported on Vercel
- [ ] Deployment successful
- [ ] Live URL copied
- [ ] Ready to add VWO SmartCode!

---

**You're all set! 🎉**

