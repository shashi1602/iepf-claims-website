# EmailJS Setup Guide for IEPF Claims Pro

This guide will help you configure EmailJS to send contact form messages to `iepfclaimpro@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended for iepfclaimpro@gmail.com)
4. Follow the setup instructions:
   - Connect your Gmail account (iepfclaimpro@gmail.com)
   - Authorize EmailJS to send emails on your behalf
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your IEPF Claims Pro website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abc123def456`)
3. Copy this key

## Step 5: Update Configuration

1. Open `/src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id', // From Step 2
  TEMPLATE_ID: 'your_actual_template_id', // From Step 3
  PUBLIC_KEY: 'your_actual_public_key', // From Step 4
  TO_EMAIL: 'iepfclaimpro@gmail.com'
};
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your website's contact form
3. Fill out and submit the form
4. Check the `iepfclaimpro@gmail.com` inbox for the message

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"**: Double-check your service ID in the EmailJS dashboard
2. **"Invalid template ID"**: Verify your template ID is correct
3. **"Invalid public key"**: Make sure you copied the public key correctly
4. **Emails not received**: Check spam folder and verify Gmail connection

### Testing in Development:

- EmailJS works in development mode
- No additional configuration needed for local testing
- Make sure your internet connection is active

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in frontend code
- EmailJS handles rate limiting automatically

## Production Deployment

When deploying to production:
1. Make sure your EmailJS configuration is correct
2. Test the contact form on the live website
3. Monitor the EmailJS dashboard for any issues

## Support

If you encounter issues:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Verify your Gmail account settings
3. Ensure your service is properly connected

---

**Note**: This setup will send all contact form messages directly to `iepfclaimpro@gmail.com` as configured.
