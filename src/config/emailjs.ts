// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and sign in
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Integration section
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // IMPORTANT: Replace with your actual EmailJS service ID from your EmailJS dashboard
  // This should look like: service_xxxxxxxxx
  SERVICE_ID: 'service_yvycbuq', // ⚠️ UPDATE THIS WITH YOUR ACTUAL SERVICE ID (e.g., service_abc123xyz)
  
  // IMPORTANT: Replace with your actual EmailJS template ID from your EmailJS dashboard  
  // This should look like: template_xxxxxxxxx
  TEMPLATE_ID: 'template_p6kzl3h', // ⚠️ UPDATE THIS WITH YOUR ACTUAL TEMPLATE ID (e.g., template_xyz789abc)
  
  // Your EmailJS public key (this looks correct)
  PUBLIC_KEY: 'yWibLK0niFisfNmlV',
  
  // Email address to receive contact form messages
  TO_EMAIL: 'iepfclaimpro@gmail.com'
};

// Email template variables that will be sent to EmailJS
export const EMAIL_TEMPLATE_PARAMS = {
  from_name: '', // Will be filled from form data
  from_email: '', // Will be filled from form data
  from_mobile: '', // Will be filled from form data
  message: '', // Will be filled from form data
  to_email: EMAILJS_CONFIG.TO_EMAIL
};

// Function to validate EmailJS configuration
export const validateEmailJSConfig = () => {
  const issues = [];
  
  if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'service_iepf_claims') {
    issues.push('SERVICE_ID is not properly configured. Please update with your actual EmailJS service ID.');
  }
  
  if (!EMAILJS_CONFIG.TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID === 'template_contact_form') {
    issues.push('TEMPLATE_ID is not properly configured. Please update with your actual EmailJS template ID.');
  }
  
  if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY.length < 10) {
    issues.push('PUBLIC_KEY is not properly configured. Please update with your actual EmailJS public key.');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};
