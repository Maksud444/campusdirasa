# Custom Domain Setup Checklist

Use this checklist to track your domain setup progress.

## 📋 Pre-Setup

- [ ] Domain purchased (from Namecheap, GoDaddy, etc.)
- [ ] Application deployed (Vercel, Netlify, etc.)
- [ ] Access to domain registrar account
- [ ] Access to hosting platform account

**My domain:** `_____________________`
**Deployed on:** `_____________________`
**Deployment URL:** `_____________________`

---

## 🎯 Step 1: Deploy Application

- [ ] Application deployed successfully
- [ ] Can access via deployment URL (e.g., `.vercel.app`)
- [ ] All features working on deployment URL
- [ ] Authentication working on deployment URL

**Deployment URL to test:** `_____________________`

---

## 🌐 Step 2: Add Domain in Hosting Platform

### For Vercel:
- [ ] Logged into Vercel dashboard
- [ ] Opened project settings
- [ ] Navigated to Domains section
- [ ] Added domain name
- [ ] Noted DNS records to add

### For Other Platforms:
- [ ] Found domain settings
- [ ] Added custom domain
- [ ] Noted DNS configuration needed

**DNS records needed:**
```
Type: _______  Name: _______  Value: _______________________
Type: _______  Name: _______  Value: _______________________
```

---

## 🔧 Step 3: Configure DNS Records

### At Domain Registrar:
- [ ] Logged into domain registrar (Namecheap/GoDaddy/etc.)
- [ ] Found DNS management / Advanced DNS
- [ ] Removed conflicting records (if any)
- [ ] Added A record for root domain (@)
- [ ] Added CNAME record for www subdomain
- [ ] Saved all changes

**DNS Records Added:**

| Type | Host | Value | TTL | ✓ |
|------|------|-------|-----|---|
| A | @ | `___________` | Auto | [ ] |
| CNAME | www | `___________` | Auto | [ ] |

---

## ⏳ Step 4: Wait for DNS Propagation

- [ ] Waited at least 5 minutes after saving
- [ ] Checked DNS propagation at dnschecker.org
- [ ] DNS showing correct values in multiple locations
- [ ] Maximum wait: 48 hours (note time started)

**Started waiting at:** `_____________________`
**DNS propagated at:** `_____________________`

**Check DNS propagation:**
```bash
nslookup campusdirasa.com
```

---

## 🔒 Step 5: SSL Certificate

- [ ] DNS verification completed in hosting platform
- [ ] SSL certificate provisioning started
- [ ] SSL certificate issued (green padlock)
- [ ] Can access site with HTTPS

**SSL Status:** [ ] Pending  [ ] Active  [ ] Error

**Test SSL:**
- [ ] https://yourdomain.com shows green padlock
- [ ] Certificate valid (not expired)
- [ ] Certificate matches domain name

---

## ⚙️ Step 6: Update Environment Variables

- [ ] Opened environment variables in hosting platform
- [ ] Updated NEXTAUTH_URL to new domain
- [ ] Saved environment variable changes
- [ ] Redeployed application
- [ ] Deployment successful

**Environment Variables Updated:**

| Variable | Old Value | New Value | ✓ |
|----------|-----------|-----------|---|
| NEXTAUTH_URL | `___________` | `https://campusdirasa.com` | [ ] |

---

## 🧪 Step 7: Testing

### Basic Access Tests:
- [ ] `http://campusdirasa.com` → redirects to HTTPS
- [ ] `https://campusdirasa.com` → loads correctly
- [ ] `http://www.campusdirasa.com` → works
- [ ] `https://www.campusdirasa.com` → works
- [ ] All pages load correctly
- [ ] Images and assets load correctly

### Functionality Tests:
- [ ] Homepage loads completely
- [ ] Navigation menu works
- [ ] Login page accessible
- [ ] Can log in successfully
- [ ] Dashboard accessible after login
- [ ] Teacher features work (if teacher account)
- [ ] Admin features work (if admin account)
- [ ] PDF upload works
- [ ] Contact form works
- [ ] All API routes responding

### Cross-Browser Tests:
- [ ] Chrome/Edge - works
- [ ] Firefox - works
- [ ] Safari - works
- [ ] Mobile Chrome - works
- [ ] Mobile Safari - works

### Performance Tests:
- [ ] Page loads in under 3 seconds
- [ ] No console errors
- [ ] No mixed content warnings
- [ ] Images optimized

---

## 🎯 Step 8: Final Configuration

- [ ] Set primary domain (www vs non-www)
- [ ] Configure redirects (if needed)
- [ ] Update social media links
- [ ] Update email signatures
- [ ] Update documentation

**Primary domain:** [ ] `campusdirasa.com`  [ ] `www.campusdirasa.com`

---

## 📊 Step 9: SEO & Analytics

- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain in Google Search Console
- [ ] Set up Google Analytics (if applicable)
- [ ] Add robots.txt (if needed)
- [ ] Add meta descriptions
- [ ] Check page titles
- [ ] Test Open Graph tags

**Google Search Console:** [ ] Verified
**Analytics ID:** `_____________________`

---

## 🔔 Step 10: Monitoring

- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Enable error tracking (Sentry, etc.)
- [ ] Review server logs
- [ ] Check performance metrics
- [ ] Set up alerts for downtime

**Monitoring tools:**
- [ ] UptimeRobot: `_____________________`
- [ ] Other: `_____________________`

---

## 🚨 Troubleshooting Checklist

If something doesn't work:

### DNS Issues:
- [ ] Checked DNS propagation at dnschecker.org
- [ ] Verified DNS records exactly match requirements
- [ ] Waited at least 10 minutes
- [ ] Cleared browser cache
- [ ] Tried incognito/private mode
- [ ] Tried different browser
- [ ] Tried from different device/network

### SSL Issues:
- [ ] Waited 10 minutes for provisioning
- [ ] Hard refreshed browser (Ctrl+Shift+R)
- [ ] Checked SSL status in hosting dashboard
- [ ] Verified DNS is correct
- [ ] Tried re-provisioning certificate

### Authentication Issues:
- [ ] Cleared all cookies for domain
- [ ] Verified NEXTAUTH_URL is correct
- [ ] Checked environment variables
- [ ] Redeployed after env var changes
- [ ] Checked browser console for errors
- [ ] Verified NEXTAUTH_SECRET is set

### Loading Issues:
- [ ] Checked deployment logs
- [ ] Verified build completed successfully
- [ ] Checked API routes responding
- [ ] Verified database connection (if applicable)
- [ ] Checked network tab in browser
- [ ] Reviewed error messages

---

## 📝 Notes & Issues

**Issues encountered:**
```
Date: _________
Issue: _________________________________________________
Solution: ______________________________________________

Date: _________
Issue: _________________________________________________
Solution: ______________________________________________
```

---

## ✅ Final Verification

**All systems go:**
- [ ] Domain accessible via HTTPS
- [ ] SSL certificate valid
- [ ] All pages loading
- [ ] Authentication working
- [ ] All features functional
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Performance acceptable
- [ ] SEO configured
- [ ] Monitoring active

---

## 🎉 Success!

**Domain setup completed on:** `_____________________`
**Final URL:** `https://campusdirasa.com`

**Share your accomplishment:**
- [ ] Announced to team
- [ ] Shared on social media
- [ ] Updated portfolio
- [ ] Notified users

---

## 📅 Maintenance Schedule

**Regular checks:**
- [ ] Weekly: Check uptime monitoring
- [ ] Monthly: Review analytics
- [ ] Quarterly: Check SSL expiry (auto-renews on Vercel)
- [ ] Yearly: Renew domain registration

**Next domain renewal:** `_____________________`
**Reminder set:** [ ] Yes  [ ] No

---

## 📞 Support Contacts

**Domain Registrar Support:**
- Website: `_____________________`
- Phone: `_____________________`
- Email: `_____________________`

**Hosting Platform Support:**
- Website: `_____________________`
- Docs: `_____________________`
- Community: `_____________________`

---

**Checklist completed by:** `_____________________`
**Date:** `_____________________`
**Time taken:** `_____________________`
