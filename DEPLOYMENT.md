# Campus Dirasa - Deployment Guide

This guide provides step-by-step instructions for deploying the Campus Dirasa application to various hosting platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account with this repository
- ✅ Node.js 18+ installed locally (for testing)
- ✅ All environment variables ready
- ✅ Access to hosting platform

## 🚀 Deployment Options

### Option 1: Vercel (RECOMMENDED - Easiest & Free)

**Best for:** Next.js applications, free tier available, automatic deployments

#### Step 1: Prepare Environment Variables

Generate a secure NextAuth secret:
```bash
openssl rand -base64 32
```

Create a list of your environment variables (don't commit these!):
- `NEXTAUTH_URL` - Your production URL (e.g., https://campusdirasa.vercel.app)
- `NEXTAUTH_SECRET` - The generated secret above

#### Step 2: Deploy to Vercel

**Method A: Using Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your `campusdirasa` repository
4. Configure project:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

5. Add Environment Variables:
   ```
   NEXTAUTH_URL = https://your-project.vercel.app
   NEXTAUTH_SECRET = [paste your generated secret]
   ```

6. Click **Deploy**
7. Wait 2-3 minutes for deployment
8. Your site will be live at `https://your-project.vercel.app`

**Method B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

#### Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., campusdirasa.com)
3. Update DNS records as instructed
4. Update `NEXTAUTH_URL` environment variable to your custom domain

#### Step 4: Update Environment Variables

After first deployment:
1. Go to Project Settings → Environment Variables
2. Update `NEXTAUTH_URL` to your actual Vercel URL
3. Redeploy to apply changes

---

### Option 2: Netlify

**Good for:** Static sites with serverless functions

#### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```
4. Add environment variables in Site Settings
5. Deploy

**Note:** Netlify supports Next.js but has some limitations compared to Vercel.

---

### Option 3: cPanel with Node.js Support

**Requirements:** Your hosting must support Node.js applications

#### Step 1: Check Node.js Support

1. Login to cPanel
2. Look for "Setup Node.js App" or "Node.js Selector"
3. If not found, contact your host or use Vercel instead

#### Step 2: Prepare for Production

Create a production build locally:
```bash
npm run build
```

#### Step 3: Upload via FTP/File Manager

Upload these files/folders:
```
/src
/public
/.next (after build)
/node_modules (or install on server)
package.json
package-lock.json
next.config.js
tsconfig.json
```

#### Step 4: Setup Node.js App in cPanel

1. Go to "Setup Node.js App"
2. Create application:
   - Node.js version: **18.x or 20.x**
   - Application mode: **Production**
   - Application root: `/home/username/public_html/campusdirasa`
   - Application URL: `campusdirasa.yourdomain.com`
   - Application startup file: `node_modules/next/dist/bin/next`
   - Arguments: `start -p 3000`

3. Set environment variables in the interface

4. Click "Create"

#### Step 5: Install Dependencies

In cPanel terminal or SSH:
```bash
cd ~/public_html/campusdirasa
npm install --production
npm run build
```

#### Step 6: Start Application

Use the cPanel interface to start the Node.js app, or via SSH:
```bash
npm start
```

**⚠️ Limitations:**
- File-based data storage may not persist across server restarts
- You'll need to set up a database (MySQL/PostgreSQL)
- File uploads need proper configuration

---

### Option 4: Railway.app

**Good for:** Full-stack apps with database needs

#### Steps:

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Next.js
6. Add environment variables
7. Deploy

**Pricing:** $5/month after free trial

---

### Option 5: Render.com

**Good for:** Free tier with PostgreSQL database

#### Steps:

1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Settings:
   ```
   Build Command: npm install && npm run build
   Start Command: npm start
   ```
5. Add environment variables
6. Create Web Service

**Free tier:** Available with limitations

---

## 🔐 Security Checklist Before Deployment

- [ ] **NEVER** commit `.env` files to GitHub
- [ ] Generate strong `NEXTAUTH_SECRET` (32+ characters)
- [ ] Update `NEXTAUTH_URL` to production domain
- [ ] Ensure all user passwords are bcrypt hashed (already fixed in your code)
- [ ] Review API routes for proper authentication
- [ ] Set up proper CORS if needed
- [ ] Enable HTTPS (automatic on Vercel/Netlify)

---

## 🗄️ Database Setup (Future)

Your project has Prisma configured but currently uses file-based storage. For production:

### Option A: PostgreSQL (Recommended)

1. **Vercel**: Use [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (free tier available)
2. **Railway**: Built-in PostgreSQL addon
3. **Supabase**: Free PostgreSQL hosting

### Option B: MySQL (If required)

Most cPanel hosts include MySQL. Update Prisma schema to use MySQL:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

---

## 📁 File Upload Storage

Currently, files are stored locally in `/uploads`. For production:

### Option A: Cloudinary (Already configured in your Next.js config!)

1. Sign up at [cloudinary.com](https://cloudinary.com) (free tier)
2. Get credentials: Cloud Name, API Key, API Secret
3. Add to environment variables
4. Update upload routes to use Cloudinary SDK

### Option B: AWS S3

Use AWS S3 for file storage (more scalable but requires setup)

### Option C: Vercel Blob

Use [Vercel Blob Storage](https://vercel.com/docs/storage/vercel-blob) for file uploads

---

## 🎯 Recommended Deployment Path

For Campus Dirasa, I recommend:

1. **Start with Vercel** (free, easiest)
   - Deploy in 5 minutes
   - Automatic HTTPS
   - Global CDN
   - Free tier generous

2. **Add Vercel Postgres** when ready for database
   - Migrate from file-based storage
   - Use Prisma migrations

3. **Use Cloudinary** for file uploads
   - Already configured in your project
   - Free tier: 25GB storage

4. **Total cost: $0** (free tiers cover most needs)

---

## 📝 Post-Deployment Tasks

After deploying:

1. Test all features:
   - [ ] User login/registration
   - [ ] Teacher/Admin authentication
   - [ ] PDF uploads
   - [ ] Contact form
   - [ ] All API routes

2. Update `NEXTAUTH_URL`:
   - [ ] In environment variables
   - [ ] Redeploy if needed

3. Monitor:
   - [ ] Check Vercel Analytics
   - [ ] Review error logs
   - [ ] Test on mobile devices

4. SEO:
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify meta tags
   - [ ] Test page load speed

---

## 🆘 Troubleshooting

### "Invalid NEXTAUTH_URL"
- Ensure `NEXTAUTH_URL` matches your production domain exactly
- Include `https://` prefix

### "Module not found" errors
- Run `npm install` on server
- Ensure all dependencies are in `package.json`
- Check Node.js version matches (18+)

### Authentication not working
- Verify `NEXTAUTH_SECRET` is set
- Check browser console for errors
- Ensure cookies are enabled

### API routes returning 500
- Check server logs in Vercel/hosting dashboard
- Verify environment variables are set
- Test routes with Postman/curl

---

## 📞 Support

If you need help:
1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review Next.js deployment guide: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
3. Check project logs in hosting dashboard

---

## 🎉 Quick Start (Vercel - 5 Minutes)

```bash
# 1. Generate secret
openssl rand -base64 32

# 2. Go to vercel.com and import GitHub repo

# 3. Add environment variables:
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=[paste generated secret]

# 4. Deploy!
```

That's it! Your Campus Dirasa application will be live in minutes.
