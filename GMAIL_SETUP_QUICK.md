# Quick Gmail Setup Guide

## 🚨 **Current Issue: Gmail Authentication Failed**

Your contact form is working, but Gmail authentication is failing. Here's how to fix it:

## 🔧 **Step 1: Get Gmail App Password**

1. **Go to Google Account**: [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. **Enable 2-Factor Authentication** (if not already enabled)
3. **Click "App passwords"** (under "How you sign in to Google")
4. **Select "Mail"** as the app
5. **Generate the password** and copy it (it looks like: `abcd efgh ijkl mnop`)

## 🔧 **Step 2: Update .env.local File**

1. **Open `.env.local`** file in your project
2. **Replace the password**:
   ```env
   EMAIL_USER=iepfclaimpro@gmail.com
   EMAIL_PASSWORD=your_actual_app_password_here
   ```
3. **Save the file**

## 🔧 **Step 3: Restart Development Server**

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 🧪 **Step 4: Test**

1. **Go to your contact form**
2. **Fill out and submit the form**
3. **Check `iepfclaimpro@gmail.com` inbox** for the email

## ✅ **Current Status**

- ✅ **Contact form works** - no more errors
- ✅ **Submissions are logged** - you can see them in server console
- ⏳ **Email sending** - will work once Gmail is configured

## 🆘 **Troubleshooting**

### **Still getting authentication errors?**
- Make sure you're using an **App Password**, not your regular Gmail password
- Ensure 2-Factor Authentication is enabled
- Check that the email address is correct: `iepfclaimpro@gmail.com`

### **App Password not working?**
- Try generating a new App Password
- Make sure there are no spaces in the password when copying
- Verify the Gmail account has 2FA enabled

---

**Once configured, your contact form will send emails directly to `iepfclaimpro@gmail.com`!** 🎉
