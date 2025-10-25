// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and sign in
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Integration section
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS service ID
  SERVICE_ID: 'service_iepf_claims',
  
  // Replace with your EmailJS template ID
  TEMPLATE_ID: 'template_contact_form',
  
  // Replace with your EmailJS public key
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Email address to receive contact form messages
  TO_EMAIL: 'iepfclaimpro@gmail.com'
};

// Email template variables that will be sent to EmailJS
export const EMAIL_TEMPLATE_PARAMS = {
  from_name: '', // Will be filled from form data
  from_email: '', // Will be filled from form data
  message: '', // Will be filled from form data
  to_email: EMAILJS_CONFIG.TO_EMAIL
};
