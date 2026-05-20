# 🚀 Deployment Guide

## Deploy Your Portfolio to the Internet!

### Option 1: Vercel (Recommended - Easiest)

1. **Create Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Connect GitHub**
   - Push your code to GitHub first:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/fili112/portfolio.git
     git push -u origin main
     ```

3. **Deploy**
   - Click "New Project" in Vercel
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live in 2 minutes!

**Your URL will be**: `https://your-portfolio.vercel.app`

---

### Option 2: Netlify

1. **Build Your Site**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to https://netlify.com
   - Drag and drop the `dist` folder
   - Done!

**Your URL will be**: `https://your-name.netlify.app`

---

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these lines:
   ```json
   "homepage": "https://fili112.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

**Your URL will be**: `https://fili112.github.io/portfolio`

---

### Option 4: Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Free forever
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ HTTPS included
- ✅ Fast global CDN
- ✅ Zero configuration

---

## 📝 Before Deploying

1. **Test locally**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check all links work**
3. **Update social media links**
4. **Add real projects**
5. **Test contact form**

---

## 🌐 Custom Domain (Optional)

After deploying, you can add a custom domain like:
- `filmonamare.com`
- `filmon.dev`

**Steps:**
1. Buy domain from Namecheap, GoDaddy, etc.
2. Add domain in Vercel/Netlify settings
3. Update DNS records
4. Done!

---

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. Get tracking ID from https://analytics.google.com
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
   ```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] All personal info updated
- [ ] Contact form tested
- [ ] All links work
- [ ] Mobile responsive checked
- [ ] Images optimized
- [ ] Build successful (`npm run build`)
- [ ] Deployed to hosting
- [ ] Custom domain added (optional)
- [ ] Analytics added (optional)

---

## 🎉 You're Live!

Share your portfolio:
- LinkedIn
- Twitter
- GitHub profile
- Resume
- Job applications

**Your portfolio URL**: Update this after deployment!
