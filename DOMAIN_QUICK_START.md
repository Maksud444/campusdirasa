# 🌐 Custom Domain - Quick Start Guide

**Get your custom domain working in 15 minutes!**

---

## 🎯 What You Need

1. **A domain name** (e.g., `campusdirasa.com`)
   - From Namecheap, GoDaddy, or any registrar

2. **Your app deployed**
   - Preferably on Vercel (if not, deploy first - see `QUICK_DEPLOY.md`)

3. **5-15 minutes** of your time

---

## ⚡ Super Quick Steps

### Step 1: Add Domain in Vercel (2 minutes)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your **Campus Dirasa** project
3. Click **Settings** → **Domains**
4. Enter your domain: `campusdirasa.com`
5. Click **Add**

Vercel will show you DNS records - **keep this page open!**

---

### Step 2: Configure DNS at Namecheap (3 minutes)

1. Login to [namecheap.com](https://namecheap.com)
2. Click **Domain List** → **Manage** (your domain)
3. Click **Advanced DNS** tab
4. Click **Add New Record** (twice to add both):

**Record 1 (Root Domain):**
```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic
```

**Record 2 (WWW):**
```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

5. Click **Save All Changes**

---

### Step 3: Wait & Verify (5-10 minutes)

1. Wait 5 minutes for DNS to propagate
2. Check at [dnschecker.org](https://dnschecker.org)
3. Return to Vercel - it should auto-verify
4. Wait for SSL certificate (shows green checkmark)

---

### Step 4: Update Environment & Redeploy (2 minutes)

1. In Vercel: **Settings** → **Environment Variables**
2. Edit `NEXTAUTH_URL`:
   ```
   https://campusdirasa.com
   ```
3. Click **Save**
4. Go to **Deployments** tab
5. Click **...** → **Redeploy**

---

### Step 5: Test! (1 minute)

Visit these URLs:
- ✅ `https://campusdirasa.com` - Should load
- ✅ `https://www.campusdirasa.com` - Should load
- ✅ Try logging in - Should work

---

## 🎉 Done!

Your site is now live at:
```
https://campusdirasa.com
```

---

## 📚 Need More Details?

**For Namecheap users:**
→ See `docs/DNS_SETUP_NAMECHEAP.md` (step-by-step with screenshots)

**For other registrars:**
→ See `docs/CUSTOM_DOMAIN.md` (GoDaddy, Cloudflare, Google Domains)

**Having issues?**
→ See troubleshooting sections in the guides above

**Using cPanel/other hosting?**
→ See `DEPLOYMENT.md` for alternatives

---

## 🆘 Quick Troubleshooting

### "Domain not loading after 1 hour"
→ Check DNS at dnschecker.org
→ Verify DNS records exactly match above

### "SSL Error / Not Secure"
→ Wait 10 more minutes for SSL
→ Hard refresh: Ctrl+Shift+R

### "Can't login after domain change"
→ Clear browser cookies
→ Verify NEXTAUTH_URL is updated
→ Redeploy in Vercel

---

## ✅ Checklist

Use this to track your progress:

- [ ] Domain added in Vercel
- [ ] DNS records added in registrar
- [ ] DNS propagated (checked at dnschecker.org)
- [ ] SSL certificate active (green padlock)
- [ ] NEXTAUTH_URL updated
- [ ] Application redeployed
- [ ] Tested login/authentication
- [ ] All features working

**Full checklist:** See `docs/DOMAIN_CHECKLIST.md`

---

## 🚀 What's Next?

After your domain is working:

1. **Set Primary Domain**
   - Vercel Settings → Domains
   - Choose www vs non-www as primary

2. **Submit to Google**
   - Add to Google Search Console
   - Submit sitemap

3. **Share Your Site!**
   - Update social media
   - Tell your users
   - Celebrate! 🎉

---

**Questions?** Check the detailed guides in the `/docs` folder!
