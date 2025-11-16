# 🚀 Quick Deploy to Vercel (5 Minutes)

This is the **fastest and easiest** way to deploy Campus Dirasa.

## Prerequisites
- GitHub account
- Your code pushed to GitHub

## Step-by-Step Instructions

### 1. Generate Your Secret Key

Open terminal and run:
```bash
openssl rand -base64 32
```

**Copy the output** - you'll need it in step 4.

Example output: `dGhpc2lzYXNlY3JldGtleWV4YW1wbGVmb3JkZW1v`

---

### 2. Sign Up for Vercel

1. Go to: https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your repositories

---

### 3. Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Find **"campusdirasa"** repository
3. Click **"Import"**

---

### 4. Configure Project

You'll see a configuration screen. Leave everything default EXCEPT:

#### Environment Variables Section

Click **"Add"** and add these:

| Name | Value |
|------|-------|
| `NEXTAUTH_URL` | `https://your-project-name.vercel.app` |
| `NEXTAUTH_SECRET` | Paste the secret from Step 1 |

**Note:** Vercel will show your project URL during setup. Use that for `NEXTAUTH_URL`.

---

### 5. Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes ⏳
3. You'll see **"Congratulations!"** 🎉

---

### 6. Update Your URL

After first deployment:

1. Copy your actual Vercel URL (e.g., `campusdirasa-xyz123.vercel.app`)
2. Go to **Project Settings** → **Environment Variables**
3. Edit `NEXTAUTH_URL` to match your actual URL:
   ```
   https://campusdirasa-xyz123.vercel.app
   ```
4. Click **"Redeploy"** to apply changes

---

### 7. Test Your Site

Visit your site and test:
- ✅ Homepage loads
- ✅ Login page works
- ✅ Navigation works

---

## 🎉 You're Done!

Your Campus Dirasa application is now live at:
```
https://your-project-name.vercel.app
```

---

## Next Steps (Optional)

### Add Custom Domain

1. In Vercel: **Settings** → **Domains**
2. Add your domain (e.g., `campusdirasa.com`)
3. Update DNS records as shown
4. Update `NEXTAUTH_URL` to your custom domain

### Enable Analytics

Vercel includes free analytics:
1. Go to **Analytics** tab
2. View visitor stats, performance metrics

### Set Up Database (When Ready)

When you want to move from file-based storage to a real database:

1. In Vercel: **Storage** → **Create Database**
2. Choose **Postgres** (free tier available)
3. Update your environment variables
4. Run Prisma migrations

---

## Troubleshooting

### "Site not loading"
- Wait a few minutes after deployment
- Check deployment logs in Vercel dashboard
- Verify environment variables are set

### "Authentication error"
- Ensure `NEXTAUTH_URL` matches your actual domain
- Check that `NEXTAUTH_SECRET` is set
- Must include `https://` in URL

### "Build failed"
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

---

## Cost

**FREE** tier includes:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Global CDN
- Serverless functions

This is more than enough for most projects!

---

## Questions?

See full deployment guide in `DEPLOYMENT.md` for:
- Alternative hosting options
- Database setup
- File upload configuration
- Advanced configurations
