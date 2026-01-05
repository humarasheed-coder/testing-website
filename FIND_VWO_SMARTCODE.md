# 🔍 How to Find VWO SmartCode - Updated Guide

## ✅ Correct Location (2024)

The SmartCode location has changed in VWO. Here's where to find it:

---

## Method 1: Through Configurations (Most Common)

1. **Login to VWO Dashboard**
   - Go to [vwo.com](https://vwo.com) and sign in

2. **Go to Configurations**
   - Look for **"Configurations"** in the main menu or sidebar
   - Click on it

3. **Select Websites and Apps**
   - Click **"Websites and Apps"** or **"Websites"**

4. **Select Your Website**
   - If you see your website listed, click on it
   - If you don't see your website, continue to Method 2

5. **Get SmartCode**
   - Click on the **"Code"** tab
   - You'll see your SmartCode here
   - Copy the entire code

---

## Method 2: Register Your Website First

If you haven't registered your website yet:

1. **Look for "Connect Your Website"**
   - In the VWO dashboard, look for a button that says:
     - **"Connect Your Website"**
     - **"Register Website"**
     - **"SmartCode for Websites"**
     - **"Add Website"**

2. **Register Your Website**
   - Click the button
   - Enter your website URL: `https://your-site.vercel.app`
   - Click **"Register"** or **"Connect"**

3. **Get SmartCode**
   - After registering, you'll be taken to the SmartCode page
   - Or go to: **Configurations** → **Websites and Apps** → Your website → **Code** tab
   - Copy the entire SmartCode

---

## Method 3: Through Settings (Alternative)

If you can't find it in Configurations:

1. **Go to Settings**
   - Click the **gear icon** (⚙️) or **"Settings"** in top right
   - Or look for **"Account"** or **"General Settings"**

2. **Look for SmartCode Section**
   - Look for:
     - **"SmartCode"**
     - **"Websites"**
     - **"Code Installation"**
     - **"Integration"**

3. **Get SmartCode**
   - Click on the relevant section
   - Copy your SmartCode

---

## Method 4: Quick Access (If Available)

Some VWO accounts have a quick access:

1. **Look in the Dashboard**
   - Check the main dashboard/home page
   - Look for **"Get Started"** or **"Install SmartCode"** section

2. **Or Check the Top Menu**
   - Look for **"Setup"** or **"Installation"** in the top navigation

---

## 📋 What the SmartCode Looks Like

Your SmartCode will look something like this:

```javascript
window._vwo_code = (function(){
  var account_id = 123456;
  var settings_tolerance = 2000;
  var library_tolerance = 2500;
  var use_existing_jquery = false;
  var f = false, d = document;
  // ... more code ...
  return {
    use_existing_jquery: function() {
      return use_existing_jquery;
    },
    library_tolerance: function() {
      return library_tolerance;
    },
    finish: function() {
      if (!f) {
        f = true;
        var a = d.getElementById('_vis_opt_path_hides');
        if (a) a.innerHTML = '';
      }
    },
    finished: function() {
      return f;
    },
    load: function(a) {
      var b = d.createElement('script');
      b.src = a;
      b.type = 'text/javascript';
      b.innerText;
      b.onerror = function() {
        _vwo_code.finish();
      };
      d.getElementsByTagName('head')[0].appendChild(b);
    }
  };
}());
```

**Important:** Copy the ENTIRE code, from `window._vwo_code` to the closing `}());`

---

## 🎯 Quick Checklist

- [ ] Logged into VWO Dashboard
- [ ] Checked **Configurations** → **Websites and Apps**
- [ ] If no website, clicked **"Connect Your Website"**
- [ ] Found the **Code** tab
- [ ] Copied the entire SmartCode

---

## 🆘 Still Can't Find It?

1. **Check VWO Help:**
   - Go to [help.vwo.com](https://help.vwo.com)
   - Search for "SmartCode" or "Installation"

2. **Contact VWO Support:**
   - Look for **"Support"** or **"Help"** in your VWO dashboard
   - They can guide you to the exact location

3. **Try Different Browsers:**
   - Sometimes the interface looks different in different browsers

4. **Look for "Setup" or "Getting Started":**
   - VWO might have a setup wizard that guides you to SmartCode

---

## ✅ Once You Have the SmartCode

1. Open `app/layout.tsx` in your project
2. Uncomment the VWO script section (lines 19-27)
3. Paste your SmartCode inside
4. Save, commit, and push to GitHub
5. Vercel will auto-deploy!

---

**The SmartCode location can vary slightly based on your VWO account type and version. The most common location is: Configurations → Websites and Apps → Your Website → Code tab**

