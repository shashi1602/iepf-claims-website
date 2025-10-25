# GitHub Pages Deployment Guide for iepfclaimspro.co.in

## 🚀 **Deployment Steps**

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/shashi1602/iepf-claims-website`
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to main branch

### Step 2: Configure Custom Domain
1. In the **Pages** settings, under **Custom domain**
2. Enter: `iepfclaimspro.co.in`
3. Check **Enforce HTTPS** (recommended)

### Step 3: GoDaddy DNS Configuration
In your GoDaddy DNS management panel, add these records:

#### **A Records:**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600

Type: A  
Name: @
Value: 185.199.109.153
TTL: 600

Type: A
Name: @
Value: 185.199.110.153
TTL: 600

Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

#### **CNAME Record:**
```
Type: CNAME
Name: www
Value: shashi1602.github.io
TTL: 600
```

### Step 4: Verify Deployment
1. Wait 5-10 minutes for DNS propagation
2. Visit: `https://iepfclaimspro.co.in`
3. Check that the site loads correctly

## 📁 **File Structure for GitHub Pages**

The deployment creates these files:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain configuration
- `next.config.ts` - Static export configuration

## 🔧 **Important Notes**

### **Static Export Limitations:**
- ❌ **API Routes**: Won't work (contact form needs alternative solution)
- ❌ **Server-side features**: Not available
- ✅ **Static pages**: All pages will work
- ✅ **Client-side features**: Contact form can use EmailJS

### **Contact Form Solution:**
Since GitHub Pages doesn't support API routes, you have two options:

#### **Option 1: Use EmailJS (Recommended)**
1. Set up EmailJS account
2. Configure the contact form to use EmailJS
3. No server-side code needed

#### **Option 2: Use Netlify Forms**
1. Deploy to Netlify instead of GitHub Pages
2. Use Netlify's built-in form handling

## 🚀 **Deployment Commands**

```bash
# Test static export locally
npm run build

# Check the output in 'out' directory
ls -la out/

# Push to trigger deployment
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **Domain not working:**
   - Check DNS propagation: `https://dnschecker.org`
   - Verify CNAME file is in repository
   - Wait 24-48 hours for full propagation

2. **Build fails:**
   - Check GitHub Actions logs
   - Ensure all dependencies are in package.json
   - Verify Next.js configuration

3. **Contact form not working:**
   - Set up EmailJS as alternative to API routes
   - Or consider deploying to Vercel/Netlify for full functionality

## 📊 **Deployment Status**

After pushing to main branch:
1. Go to **Actions** tab in your repository
2. Check the **Deploy to GitHub Pages** workflow
3. Wait for green checkmark ✅
4. Your site will be live at `https://iepfclaimspro.co.in`

---

**Your IEPF Claims website will be live at: https://iepfclaimspro.co.in** 🎉
