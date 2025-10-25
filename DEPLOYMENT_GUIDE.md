# IEPF Claims Website - Deployment Guide

## 🚀 Quick Deployment to Vercel

### Step 1: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository: `shashi1602/iepf-claims-website`
4. Vercel will automatically detect it's a Next.js app
5. Click "Deploy"

### Step 2: Configure Environment Variables
In your Vercel project dashboard, go to Settings → Environment Variables and add:

```
DATABASE_URL=file:./dev.db
EMAILJS_SERVICE_ID=service_iepf_claims
EMAILJS_TEMPLATE_ID=template_contact_form
EMAILJS_PUBLIC_KEY=your_actual_emailjs_public_key
TO_EMAIL=iepfclaimpro@gmail.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=https://iepfclaimspro.co.in
```

### Step 3: Add Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Domains" tab
3. Add your domain: `iepfclaimspro.co.in`
4. Follow Vercel's DNS configuration instructions

### Step 4: Configure DNS
Add these DNS records to your domain provider:
- **A Record**: `@` → Vercel's IP (provided by Vercel)
- **CNAME Record**: `www` → `cname.vercel-dns.com`

## 🔧 Alternative: Netlify Deployment

### Step 1: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18.x

### Step 2: Configure Environment Variables
In Netlify dashboard, go to Site settings → Environment variables and add the same variables as above.

### Step 3: Add Custom Domain
1. In Netlify dashboard, go to Domain management
2. Add your domain: `iepfclaimspro.co.in`
3. Configure DNS as instructed by Netlify

## 📧 Email Setup

### EmailJS Configuration
1. Go to [emailjs.com](https://emailjs.com)
2. Create an account and sign in
3. Create a new email service (Gmail recommended)
4. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`
5. Get your Public Key from Integration section
6. Update the environment variables with your actual EmailJS credentials

## 🗄️ Database Setup

The app uses SQLite with Prisma. For production, consider upgrading to:
- **PostgreSQL** (recommended for production)
- **MySQL**
- **PlanetScale** (serverless MySQL)

### Database Migration Commands
```bash
npx prisma generate
npx prisma db push
```

## 🔐 Security Notes

1. **Change default admin credentials** before going live
2. **Use strong passwords** for admin access
3. **Enable HTTPS** (automatic with Vercel/Netlify)
4. **Set up proper CORS** if needed
5. **Regular backups** of your database

## 🎯 Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Test admin login
- [ ] Verify email notifications work
- [ ] Check mobile responsiveness
- [ ] Test all form validations
- [ ] Verify SSL certificate
- [ ] Set up monitoring/analytics

## 🆘 Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (use 18.x)
2. **Email not working**: Verify EmailJS configuration
3. **Database errors**: Check DATABASE_URL environment variable
4. **Admin login issues**: Verify ADMIN_USERNAME and ADMIN_PASSWORD

### Support:
- Check Vercel/Netlify logs for detailed error messages
- Verify all environment variables are set correctly
- Test locally first with `npm run dev`
