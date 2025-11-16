# Namecheap DNS Setup for Campus Dirasa

**Step-by-step guide with screenshots descriptions for Namecheap users**

## 🎯 Goal
Connect your Namecheap domain (e.g., `campusdirasa.com`) to your Vercel deployment.

---

## 📋 Prerequisites

- ✅ Domain purchased from Namecheap
- ✅ Campus Dirasa deployed on Vercel
- ✅ Vercel account access

---

## Step 1: Add Domain in Vercel

### 1.1 Open Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **Campus Dirasa** project
3. Click **"Settings"** tab at the top
4. Click **"Domains"** in the left sidebar

### 1.2 Add Your Domain

1. In the "Domains" section, you'll see an input field
2. Type your domain: `campusdirasa.com`
3. Click **"Add"**

### 1.3 Note the DNS Records

Vercel will show you something like:

```
To configure campusdirasa.com, add the following records to your DNS provider:

A Record:
Name: @
Value: 76.76.21.21

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open!** You'll need these values.

---

## Step 2: Configure DNS in Namecheap

### 2.1 Login to Namecheap

1. Go to [namecheap.com](https://namecheap.com)
2. Click **"Sign In"** (top right)
3. Enter your username and password
4. Click **"Sign In"**

### 2.2 Access Your Domain

1. After logging in, you'll see your dashboard
2. On the left sidebar, click **"Domain List"**
3. Find your domain `campusdirasa.com` in the list
4. Click the **"Manage"** button next to it

### 2.3 Navigate to Advanced DNS

1. You'll see several tabs: Details, Products, AutoRenew, etc.
2. Click the **"Advanced DNS"** tab
3. You'll see a page titled "Advanced DNS"

---

## Step 3: Add DNS Records

### 3.1 Remove Existing Records (If Needed)

**IMPORTANT:** Check if you have existing A or CNAME records for @ or www

You might see:
- Namecheap parking page records
- Old website records

**What to do:**
1. For each existing record with Host `@` or `www`:
2. Click the **trash icon** 🗑️ on the right
3. Confirm deletion

**Don't delete:**
- MX records (email)
- TXT records (verification, SPF, DKIM)
- Other subdomains you need

### 3.2 Add A Record (for root domain)

1. Click **"Add New Record"** button
2. You'll see a form with dropdowns

**Fill in the form:**

| Field | Value | Explanation |
|-------|-------|-------------|
| **Type** | `A Record` | Select from dropdown |
| **Host** | `@` | This means your root domain |
| **Value** | `76.76.21.21` | Vercel's IP address |
| **TTL** | `Automatic` | Leave as default |

3. Click **green checkmark** ✓ to save

### 3.3 Add CNAME Record (for www)

1. Click **"Add New Record"** button again
2. Another form will appear

**Fill in the form:**

| Field | Value | Explanation |
|-------|-------|-------------|
| **Type** | `CNAME Record` | Select from dropdown |
| **Host** | `www` | This handles www.campusdirasa.com |
| **Value** | `cname.vercel-dns.com` | Vercel's CNAME target |
| **TTL** | `Automatic` | Leave as default |

3. Click **green checkmark** ✓ to save

### 3.4 Save All Changes

1. After adding both records, you'll see a notification at the top
2. Look for a **"Save All Changes"** button
3. Click it to apply your changes

**Your DNS records should now look like this:**

```
Type          Host    Value                      TTL
----------------------------------------------------------
A Record      @       76.76.21.21               Automatic
CNAME Record  www     cname.vercel-dns.com      Automatic
```

---

## Step 4: Verify in Vercel

### 4.1 Return to Vercel

1. Go back to your Vercel tab (Settings → Domains)
2. Wait 30 seconds
3. Vercel will automatically check DNS

### 4.2 Check Status

You'll see one of these statuses:

**🟡 "Pending Verification"**
- DNS not propagated yet
- Wait 5-10 minutes
- Refresh page

**🟢 "Valid Configuration"**
- ✅ Success! DNS configured correctly
- ✅ SSL certificate being provisioned

**🔴 "Invalid Configuration"**
- ❌ DNS records incorrect
- Double-check values in Namecheap
- Ensure no typos

### 4.3 Wait for SSL

After DNS verification:
- Vercel provisions SSL certificate
- Takes 2-10 minutes
- Status will show "SSL: Active"

---

## Step 5: Update Environment Variables

### 5.1 Update NEXTAUTH_URL

1. In Vercel, stay in **Settings** tab
2. Click **"Environment Variables"** in left sidebar
3. Find `NEXTAUTH_URL`
4. Click **"Edit"** (pencil icon)
5. Change value to: `https://campusdirasa.com`
6. Click **"Save"**

### 5.2 Redeploy Application

1. Click **"Deployments"** tab at top
2. Find your latest deployment
3. Click **"..."** (three dots) on the right
4. Click **"Redeploy"**
5. Check **"Use existing Build Cache"** (faster)
6. Click **"Redeploy"**

Wait 1-2 minutes for redeployment.

---

## Step 6: Test Your Domain

### 6.1 Wait for Propagation

**Time required:** Usually 5-10 minutes, max 48 hours

**Check DNS propagation:**
1. Go to [dnschecker.org](https://dnschecker.org)
2. Enter: `campusdirasa.com`
3. Select: `A`
4. Click **"Search"**
5. You should see `76.76.21.21` in most locations

### 6.2 Test URLs

Try these in your browser:

1. `http://campusdirasa.com`
   - Should redirect to HTTPS

2. `https://campusdirasa.com`
   - ✅ Should load your site
   - ✅ Should show green padlock (SSL)

3. `http://www.campusdirasa.com`
   - Should redirect to HTTPS

4. `https://www.campusdirasa.com`
   - ✅ Should load your site

### 6.3 Test Authentication

1. Go to: `https://campusdirasa.com/login`
2. Try logging in with test credentials
3. Verify you can access protected pages
4. Test admin/teacher features

---

## 🎉 Success Checklist

- [ ] DNS records added in Namecheap
- [ ] Vercel shows "Valid Configuration"
- [ ] SSL certificate active (green padlock)
- [ ] Both root and www domains work
- [ ] HTTPS redirect working
- [ ] NEXTAUTH_URL updated
- [ ] Application redeployed
- [ ] Login/authentication working
- [ ] All features functional

---

## 🐛 Troubleshooting

### Problem: "Domain not found" after 24 hours

**Solution:**
1. Check Namecheap Domain List → Domain is not expired
2. Check nameservers:
   - Should be `dns1.registrar-servers.com`
   - Should be `dns2.registrar-servers.com`
   - If different, your DNS might be elsewhere (check email)

### Problem: "ERR_SSL_PROTOCOL_ERROR"

**Solution:**
1. Wait 10 more minutes (SSL provisioning takes time)
2. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Try incognito mode
4. Check Vercel SSL status in dashboard

### Problem: "Too many redirects"

**Solution:**
1. Clear browser cache
2. Check you don't have both:
   - Cloudflare proxy ON
   - Vercel SSL ON
   - (Choose one or the other)

### Problem: Only www works (or only non-www works)

**Solution:**
1. Check you added BOTH records:
   - A record for `@`
   - CNAME for `www`
2. Wait for DNS propagation
3. Check at dnschecker.org

### Problem: "Can't log in" after domain change

**Solution:**
1. **Clear browser cookies** for the domain
2. Verify `NEXTAUTH_URL` in Vercel:
   - Go to Settings → Environment Variables
   - Should be: `https://campusdirasa.com`
   - NOT: `http://` or `www.` or `.vercel.app`
3. Redeploy in Vercel
4. Try again

### Problem: DNS records won't save

**Solution:**
1. Make sure Host is `@` not blank
2. Make sure Host is `www` not `www.`
3. Remove any trailing dots from values
4. Try different browser
5. Contact Namecheap support

---

## 📸 Visual Checklist

**What you should see in Namecheap Advanced DNS:**

```
┌─────────────────────────────────────────────────────────┐
│  Host Records                                           │
├───────────┬──────┬──────────────────────┬──────────────┤
│ Type      │ Host │ Value                │ TTL          │
├───────────┼──────┼──────────────────────┼──────────────┤
│ A Record  │  @   │ 76.76.21.21         │ Automatic    │
├───────────┼──────┼──────────────────────┼──────────────┤
│ CNAME     │ www  │cname.vercel-dns.com │ Automatic    │
└───────────┴──────┴──────────────────────┴──────────────┘
```

**What you should see in Vercel Domains:**

```
┌─────────────────────────────────────────────────────────┐
│  Domains                                                │
├─────────────────────────┬───────────────────────────────┤
│ campusdirasa.com        │ ✅ Valid Configuration       │
│ www.campusdirasa.com    │ ✅ Valid Configuration       │
└─────────────────────────┴───────────────────────────────┘

SSL: ✅ Active
```

---

## ⏱️ Timeline

**What to expect:**

```
0 min    - Add DNS records in Namecheap
1 min    - Click "Save All Changes"
2-5 min  - DNS starts propagating
5-10 min - Vercel verifies DNS
10-15 min- SSL certificate issued
15 min   - Your site is live! 🎉
```

**Maximum wait time:** 48 hours (very rare)

---

## 🎓 Understanding the Records

### A Record (`@` → `76.76.21.21`)
- **Purpose:** Points your root domain to Vercel's server
- **@** means the root domain (campusdirasa.com)
- **76.76.21.21** is Vercel's anycast IP address

### CNAME Record (`www` → `cname.vercel-dns.com`)
- **Purpose:** Points www subdomain to Vercel
- **www** handles www.campusdirasa.com
- **cname.vercel-dns.com** is Vercel's load balancer

---

## 📞 Need More Help?

**Namecheap Support:**
- Live Chat: namecheap.com (bottom right)
- Knowledgebase: namecheap.com/support/knowledgebase

**Vercel Support:**
- Docs: vercel.com/docs/custom-domains
- Community: github.com/vercel/vercel/discussions

**DNS Tools:**
- Check propagation: dnschecker.org
- Test DNS: mxtoolbox.com
- Test SSL: ssllabs.com/ssltest

---

## ✅ You're Done!

Your Campus Dirasa application is now accessible at your custom domain!

**Share your site:**
```
https://campusdirasa.com
```

**Next steps:**
- Set up Google Analytics
- Submit to Google Search Console
- Share with students!
