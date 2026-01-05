# VWO Setup Guide - Step by Step

## 🎯 Quick Setup Steps

### Step 1: Install and Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your website.

---

### Step 2: Deploy to Vercel

#### Method A: Via Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (use GitHub)
   - Click **"New Project"**
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click **"Deploy"**
   - Wait 2-3 minutes
   - Copy your deployment URL (e.g., `https://your-project.vercel.app`)

#### Method B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? (press enter for default)
# - Directory? (press enter for .)
```

---

### Step 3: Add VWO SmartCode

1. **Get Your VWO SmartCode:**
   - Go to [vwo.com](https://vwo.com) and sign up/login
   - Navigate to: **Settings** → **Account Settings** → **SmartCode**
   - Copy the entire SmartCode script

2. **Add to Your Website:**
   
   Open `app/layout.tsx` and uncomment the VWO script section:

   ```tsx
   <Script id="vwo-smartcode" strategy="afterInteractive">
     {`
       window._vwo_code = (function(){
         // PASTE YOUR VWO SMARTCODE HERE
         // It will look something like:
         // var account_id = 123456;
         // var settings_tolerance = 2000;
         // etc...
       })();
     `}
   </Script>
   ```

   **Important:** Replace the comment with your actual VWO SmartCode.

3. **Redeploy:**
   - Commit and push your changes
   - Vercel will automatically redeploy

---

### Step 4: Create Your First VWO Test

1. **In VWO Dashboard:**
   - Click **"Create Campaign"** or **"New Test"**
   - Select **A/B Test**

2. **Campaign Setup:**
   - **Campaign Name:** "Button Text Test" (or any name)
   - **Campaign URL:** Enter your Vercel URL (e.g., `https://your-project.vercel.app`)
   - Click **"Next"**

3. **Create Variations:**
   - VWO will load your website
   - Click on the element you want to test (e.g., the "Start Testing Now" button)
   - Click **"Edit"** to modify it
   - Change the text to something like "Get Started Free"
   - Click **"Save"**

4. **Set Traffic:**
   - Original: 50%
   - Variation: 50%
   - Click **"Next"**

5. **Set Goals:**
   - Click **"Add Goal"**
   - Select goal type (e.g., "Click on Element")
   - Select the button or element to track
   - Click **"Next"**

6. **Review and Launch:**
   - Review your test settings
   - Click **"Start Campaign"**

---

### Step 5: Test Your Test! 🧪

1. **Verify VWO is Working:**
   - Open your website in an incognito/private window
   - You should see the VWO variation (if you're in the test group)
   - Check browser console for VWO logs (optional)

2. **Monitor Results:**
   - Go back to VWO Dashboard
   - View your campaign
   - See real-time statistics
   - Check conversion rates

---

## 🎨 What Can You Test?

### Easy Elements to Test:

1. **Main CTA Button** (id: `main-cta`)
   - Text: "Start Testing Now" → "Get Started Free"
   - Color: Purple gradient → Blue gradient
   - Size: Make it bigger/smaller

2. **Header Title**
   - "Welcome to Our Testing Website" → "Transform Your Business Today"

3. **Feature Cards**
   - Reorder them
   - Change colors
   - Modify text

4. **Content Sections**
   - Change headlines
   - Modify descriptions
   - Add/remove elements

---

## 🔍 Troubleshooting

### VWO Not Loading?
- ✅ Make sure SmartCode is added correctly
- ✅ Check that your website is publicly accessible
- ✅ Verify SmartCode is in the `<head>` or early in `<body>`
- ✅ Clear browser cache and try incognito mode

### Test Not Showing?
- ✅ Check traffic allocation (you might be in control group)
- ✅ Verify campaign is "Running" (not paused)
- ✅ Check browser console for errors
- ✅ Try different browser/incognito mode

### Vercel Deployment Issues?
- ✅ Check build logs in Vercel dashboard
- ✅ Ensure all dependencies are in `package.json`
- ✅ Verify `next.config.js` is correct

---

## 📞 Need Help?

- **VWO Support:** [help.vwo.com](https://help.vwo.com)
- **VWO Academy:** [vwo.com/academy](https://vwo.com/academy)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

## ✅ Checklist

- [ ] Website running locally (`npm run dev`)
- [ ] Deployed to Vercel
- [ ] VWO SmartCode added to `app/layout.tsx`
- [ ] Changes committed and pushed
- [ ] VWO account created
- [ ] First test created in VWO
- [ ] Test is running and showing variations

---

**You're all set! Happy testing! 🚀**

