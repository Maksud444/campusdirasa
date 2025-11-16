# Adding Custom Domain to Campus Dirasa

This guide will help you connect your custom domain (e.g., `campusdirasa.com`) to your deployed application.

## 📋 Prerequisites

- ✅ Your site is deployed (preferably on Vercel)
- ✅ You own a domain name (from Namecheap, GoDaddy, etc.)
- ✅ Access to your domain's DNS settings

---

## 🎯 Option 1: Custom Domain on Vercel (Recommended)

### Step 1: Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name:
   - For root domain: `campusdirasa.com`
   - For subdomain: `www.campusdirasa.com`
4. Click **"Add"**

Vercel will show you DNS records to configure.

---

### Step 2: Configure DNS Records

Vercel will ask you to add one of these configurations:

#### Option A: Point Domain with A Record (Recommended for Root Domain)

Add these DNS records in your domain registrar:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 3600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |

#### Option B: Point Domain with CNAME (For Subdomains)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `cname.vercel-dns.com` | 3600 |

---

### Step 3: Configure DNS at Your Domain Registrar

Choose your domain provider:

<details>
<summary><b>Namecheap</b></summary>

1. Login to [namecheap.com](https://namecheap.com)
2. Go to **Domain List**
3. Click **"Manage"** next to your domain
4. Go to **"Advanced DNS"** tab
5. Click **"Add New Record"**

**For Root Domain (campusdirasa.com):**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21`
- TTL: `Automatic`

**For WWW (www.campusdirasa.com):**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: `Automatic`

6. Click **"Save All Changes"**

</details>

<details>
<summary><b>GoDaddy</b></summary>

1. Login to [godaddy.com](https://godaddy.com)
2. Go to **My Products** → **DNS**
3. Click **domain name** to manage
4. Click **"Add"** under DNS Records

**For Root Domain:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `1 Hour`

**For WWW:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `1 Hour`

5. Click **"Save"**

</details>

<details>
<summary><b>Cloudflare</b></summary>

1. Login to [cloudflare.com](https://cloudflare.com)
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **"Add record"**

**For Root Domain:**
- Type: `A`
- Name: `@`
- IPv4 address: `76.76.21.21`
- Proxy status: `Proxied` (orange cloud)

**For WWW:**
- Type: `CNAME`
- Name: `www`
- Target: `cname.vercel-dns.com`
- Proxy status: `Proxied`

5. Click **"Save"**

</details>

<details>
<summary><b>Google Domains</b></summary>

1. Login to [domains.google.com](https://domains.google.com)
2. Click on your domain
3. Go to **DNS** tab
4. Scroll to **Custom resource records**

**For Root Domain:**
- Name: `@`
- Type: `A`
- TTL: `1h`
- Data: `76.76.21.21`

**For WWW:**
- Name: `www`
- Type: `CNAME`
- TTL: `1h`
- Data: `cname.vercel-dns.com`

5. Click **"Add"**

</details>

---

### Step 4: Wait for DNS Propagation

- **Usually takes:** 5-10 minutes
- **Can take up to:** 48 hours (rare)
- **Check status:** Use [dnschecker.org](https://dnschecker.org)

Vercel will automatically verify and configure SSL once DNS propagates.

---

### Step 5: Update Environment Variables

Once your domain is working:

1. Go to Vercel **Settings** → **Environment Variables**
2. Edit `NEXTAUTH_URL`:
   ```
   https://campusdirasa.com
   ```
   or
   ```
   https://www.campusdirasa.com
   ```
3. Click **"Save"**
4. Go to **Deployments** tab
5. Click **"..."** on latest deployment
6. Click **"Redeploy"**

---

### Step 6: Set Primary Domain

If you added both root and www:

1. In Vercel **Domains** settings
2. Click **"..."** next to your preferred domain
3. Click **"Set as Primary"**
4. Other domain will auto-redirect to primary

**Recommendation:** Use root domain (`campusdirasa.com`) as primary.

---

## 🎯 Option 2: Custom Domain with Netlify

### Step 1: Add Domain in Netlify

1. Go to **Site Settings** → **Domain Management**
2. Click **"Add custom domain"**
3. Enter your domain: `campusdirasa.com`
4. Click **"Verify"**

### Step 2: Configure DNS

Netlify will provide DNS records:

**Option A: Use Netlify DNS (Easier)**
1. Transfer DNS to Netlify
2. Update nameservers at your registrar
3. Netlify handles everything

**Option B: External DNS**

Add these records:

| Type | Name | Value |
|------|------|-------|
| A | @ | `75.2.60.5` |
| CNAME | www | `your-site.netlify.app` |

### Step 3: Enable HTTPS

1. Go to **Domain Settings** → **HTTPS**
2. Click **"Verify DNS configuration"**
3. Click **"Provision certificate"**
4. Wait 2-10 minutes for SSL

---

## 🎯 Option 3: Custom Domain with Railway

### Step 1: Add Custom Domain

1. Go to your Railway project
2. Click **"Settings"** → **"Domains"**
3. Click **"Custom Domain"**
4. Enter: `campusdirasa.com`

### Step 2: Configure DNS

Add these records:

| Type | Name | Value |
|------|------|-------|
| CNAME | @ | `your-app.up.railway.app` |
| CNAME | www | `your-app.up.railway.app` |

**Note:** Some registrars don't allow CNAME on root (@). Use A record if available.

---

## 🎯 Option 4: Domain on cPanel Hosting

If you deployed to cPanel with Node.js:

### Step 1: Point Domain to Your Server

Your domain should already point to your hosting if purchased from the same provider.

If domain is elsewhere:

1. Get your server IP from cPanel
2. Add A record: `@ → [your-server-IP]`

### Step 2: Configure in cPanel

1. Go to **"Domains"** or **"Addon Domains"**
2. Add your domain
3. Point to your app directory
4. Enable SSL in **"SSL/TLS Status"**

### Step 3: Update Node.js App

1. Go to **"Setup Node.js App"**
2. Update application URL to your domain
3. Restart application

---

## 🔒 SSL Certificate Setup

### Vercel
- ✅ Automatic (Let's Encrypt)
- ✅ Free
- ✅ Auto-renews
- ✅ Configured automatically

### Netlify
- ✅ Automatic (Let's Encrypt)
- ✅ Free
- ✅ Just click "Provision"

### Railway
- ✅ Automatic
- ✅ Free

### cPanel
1. Go to **SSL/TLS Status**
2. Click **"Run AutoSSL"**
3. Wait for certificate

---

## 🧪 Testing Your Domain

After DNS propagates, test:

### 1. Basic Connectivity
```bash
# Check DNS resolution
nslookup campusdirasa.com

# Check website
curl -I https://campusdirasa.com
```

### 2. SSL Certificate
```bash
# Check SSL
openssl s_client -connect campusdirasa.com:443 -servername campusdirasa.com
```

### 3. Web Browser Tests

Visit these URLs and verify they all work:
- `http://campusdirasa.com` → Should redirect to HTTPS
- `https://campusdirasa.com` → Should load site
- `http://www.campusdirasa.com` → Should redirect
- `https://www.campusdirasa.com` → Should load or redirect

### 4. Test Authentication

1. Go to login page
2. Try logging in
3. Verify cookies work
4. Check admin/teacher access

---

## ⚙️ Advanced Configuration

### Redirect www to non-www (or vice versa)

**On Vercel:**
- Automatic! Just set primary domain

**On Netlify:**
Add to `netlify.toml`:
```toml
[[redirects]]
  from = "https://www.campusdirasa.com/*"
  to = "https://campusdirasa.com/:splat"
  status = 301
  force = true
```

**On cPanel:**
Add to `.htaccess`:
```apache
# Redirect www to non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.campusdirasa\.com [NC]
RewriteRule ^(.*)$ https://campusdirasa.com/$1 [L,R=301]
```

### Force HTTPS

**On Vercel:** Automatic

**On Netlify:** Automatic

**On cPanel:**
Add to `.htaccess`:
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 🐛 Troubleshooting

### Domain not loading

**Check DNS propagation:**
```bash
# Check if DNS is propagated
nslookup campusdirasa.com
# or visit: https://dnschecker.org
```

**Common issues:**
- DNS not propagated yet (wait 24-48 hours max)
- Wrong DNS records (double-check values)
- Old DNS cached (clear browser cache, try incognito)

### SSL Certificate error

**Issues:**
- "Your connection is not private"
- "NET::ERR_CERT_COMMON_NAME_INVALID"

**Solutions:**
1. Wait for SSL provisioning (can take 10 minutes)
2. Verify DNS records are correct
3. Check domain verification in hosting dashboard
4. Force refresh SSL in Vercel/Netlify settings

### Authentication not working

**Issue:** Can't log in after adding domain

**Solution:**
```
1. Update NEXTAUTH_URL in environment variables
2. Must match exactly: https://campusdirasa.com
3. Redeploy application
4. Clear browser cookies
5. Try again
```

### WWW vs non-WWW issues

**Problem:** Only one works

**Solution:**
- Add both domains in Vercel
- Set primary domain
- Other auto-redirects

### Email not sending

**Issue:** Contact form fails

**Solution:**
- Update EmailJS allowed domains
- Add your custom domain to EmailJS dashboard
- Update CORS settings if needed

---

## 📊 DNS Record Quick Reference

### For Vercel

```
# Root domain
Type: A
Name: @
Value: 76.76.21.21

# WWW subdomain
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Netlify

```
# Root domain
Type: A
Name: @
Value: 75.2.60.5

# WWW subdomain
Type: CNAME
Name: www
Value: your-site.netlify.app
```

### For Cloudflare (with Proxy)

```
# Root domain
Type: A
Name: @
Value: [your hosting IP]
Proxy: ON (orange cloud)

# WWW subdomain
Type: CNAME
Name: www
Value: @
Proxy: ON
```

---

## ✅ Post-Configuration Checklist

After adding your domain:

- [ ] DNS records added correctly
- [ ] DNS propagation complete (check dnschecker.org)
- [ ] HTTPS/SSL working
- [ ] Both www and non-www working
- [ ] Redirect configured (if desired)
- [ ] `NEXTAUTH_URL` updated in environment variables
- [ ] Application redeployed with new env vars
- [ ] Login/authentication tested
- [ ] All pages loading correctly
- [ ] Forms submitting properly
- [ ] File uploads working
- [ ] API routes responding

---

## 🎉 Success!

Your Campus Dirasa application should now be accessible at:
```
https://campusdirasa.com
```

**Next steps:**
1. Update social media links
2. Update documentation with new URL
3. Submit to search engines (Google Search Console)
4. Set up analytics with new domain
5. Update any hardcoded URLs in your code

---

## 📞 Need Help?

**Common Resources:**
- [Vercel Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Netlify Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [DNS Checker Tool](https://dnschecker.org)
- [SSL Certificate Test](https://www.ssllabs.com/ssltest/)

**Still stuck?** Check the specific error message and search in your hosting platform's documentation.
