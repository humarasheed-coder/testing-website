# Testing Website for VWO

A simple Next.js website designed for A/B testing and optimization experiments with VWO.com.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts to link your project.

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository (or push this code to GitHub first)
5. Vercel will automatically detect Next.js and configure everything
6. Click "Deploy"

That's it! Your site will be live in minutes.

## 🧪 Setting Up VWO Testing

### Step 1: Get Your VWO Account

1. Sign up at [vwo.com](https://vwo.com) (or login if you already have an account)
2. Create a new account or select your existing account

### Step 2: Add VWO SmartCode to Your Website

1. **In VWO Dashboard:**
   - **If website not registered:** Click **"Connect Your Website"** and register your Vercel URL
   - **If website registered:** Go to **Configurations** → **Websites and Apps** → Click your website → **Code** tab
   - Copy your VWO SmartCode (it looks like a script tag)

2. **Add to Your Next.js App:**
   
   Open `app/layout.tsx` and add the VWO SmartCode in the `<head>` section:

   ```tsx
   <head>
     {/* Paste your VWO SmartCode here */}
     <script type="text/javascript">
       window._vwo_code = (function(){
         // Your VWO SmartCode here
       })();
     </script>
   </head>
   ```

   **OR** add it via `next/script` component for better performance:

   ```tsx
   import Script from 'next/script'
   
   // In your component:
   <Script id="vwo-smartcode" strategy="afterInteractive">
     {`
       window._vwo_code = (function(){
         // Your VWO SmartCode here
       })();
     `}
   </Script>
   ```

### Step 3: Create Your First Test

1. **In VWO Dashboard:**
   - Click **"Create Campaign"** or **"New Test"**
   - Select **A/B Test** (or any other test type)

2. **Set Up Your Test:**
   - Enter your website URL (your Vercel deployment URL)
   - Choose the element you want to test (e.g., the "Start Testing Now" button)
   - Create variations (e.g., change button text, color, position)

3. **Targeting:**
   - Set your traffic allocation (e.g., 50% see original, 50% see variation)
   - Choose your goals (e.g., button clicks, form submissions)

4. **Launch:**
   - Review your test settings
   - Click **"Start Campaign"**

### Step 4: Test Elements on This Website

This website has several testable elements:

- **Header Title**: "Welcome to Our Testing Website"
- **CTA Button**: "Start Testing Now" (id: `main-cta`)
- **Feature Cards**: Three feature cards with titles and descriptions
- **Content Sections**: Headlines, paragraphs, and lists

### Common VWO Test Ideas:

1. **Button Text Test:**
   - Original: "Start Testing Now"
   - Variation: "Get Started Free" or "Try It Now"

2. **Headline Test:**
   - Original: "Welcome to Our Testing Website"
   - Variation: "Transform Your Business Today"

3. **Color Test:**
   - Test different button colors
   - Test different header gradient colors

4. **Layout Test:**
   - Test different arrangements of feature cards
   - Test different content sections

## 📝 Important Notes

- **VWO SmartCode must be added** before you can run tests
- Make sure your Vercel deployment is live and accessible
- VWO needs to be able to access your website to inject test code
- Test in staging first before running on production traffic

## 🔧 Customization

Feel free to modify:
- `app/page.tsx` - Main page content
- `app/globals.css` - Styling
- `app/layout.tsx` - Add VWO SmartCode here

## 📚 VWO Resources

- [VWO Documentation](https://help.vwo.com/)
- [VWO Academy](https://vwo.com/academy/)
- [VWO Support](https://vwo.com/support/)

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Vercel** - Hosting platform
- **VWO** - Testing and optimization platform

---

Happy Testing! 🎉

