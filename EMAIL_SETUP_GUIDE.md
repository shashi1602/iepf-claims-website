# Direct Email Setup Guide

## 🚀 **Current Status: Ready for Configuration**

Your website is now set up to send emails directly to `iepfclaimpro@gmail.com` without opening the email client!

## 📧 **How It Works**

1. **User fills out contact form**
2. **Form submits to API route** (`/api/contact`)
3. **Server sends email directly** to `iepfclaimpro@gmail.com`
4. **User sees success message** - no email client needed!

## 🔧 **Setup Required**

To enable direct email sending, you need to configure Gmail credentials:

### **Step 1: Create Environment File**

Create a file called `.env.local` in your project root with:

```env
# Email Configuration for IEPF Claims Pro
EMAIL_USER=iepfclaimpro@gmail.com
EMAIL_PASSWORD=your_gmail_app_password_here
```

### **Step 2: Get Gmail App Password**

1. **Enable 2-Factor Authentication** on your Gmail account (`iepfclaimpro@gmail.com`)
2. **Go to Google Account Settings**: [https://myaccount.google.com/security](https://myaccount.google.com/security)
3. **Click "App passwords"** (under "How you sign in to Google")
4. **Select "Mail"** as the app
5. **Generate the password** and copy it
6. **Replace `your_gmail_app_password_here`** in `.env.local` with the generated password

### **Step 3: Test the Setup**

1. **Start your development server**: `npm run dev`
2. **Go to your contact form**
3. **Fill out and submit the form**
4. **Check `iepfclaimpro@gmail.com` inbox** for the message

## 📱 **What Users Experience**

- ✅ **Fill out form** (Name, Email, Message)
- ✅ **Click "Send Message"**
- ✅ **See success message** - "Thank you! Your message has been sent successfully to iepfclaimpro@gmail.com. We'll get back to you soon!"
- ✅ **No email client opens** - everything happens automatically!

## 📧 **Email Format**

You'll receive emails like this:

```
Subject: New Contact Form Message from John Doe

Hello,

You have received a new message from your IEPF Claims Pro website:

Name: John Doe
Email: john@example.com

Message:
I'm interested in your IEPF claim services. Can you help me recover my unclaimed shares?

---
This message was sent from your website contact form.
```

## 🚀 **Deployment**

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** in your hosting platform:
   - `EMAIL_USER` = `iepfclaimpro@gmail.com`
   - `EMAIL_PASSWORD` = your Gmail app password

2. **Test on live site** to ensure emails are being sent

## 🔒 **Security Notes**

- ✅ **App passwords are secure** - they're specifically for applications
- ✅ **Environment variables are safe** - not exposed to frontend
- ✅ **Server-side sending** - credentials never reach the browser

## 🆘 **Troubleshooting**

### **"Authentication failed"**
- Check your Gmail app password is correct
- Ensure 2FA is enabled on your Gmail account
- Verify the email address in `.env.local`

### **"Connection timeout"**
- Check your internet connection
- Verify Gmail SMTP settings are correct

### **Emails not received**
- Check spam folder
- Verify the `iepfclaimpro@gmail.com` address is correct
- Check server logs for error messages

---

**Once configured, your contact form will send emails directly to `iepfclaimpro@gmail.com` without any user interaction!** 🎉
