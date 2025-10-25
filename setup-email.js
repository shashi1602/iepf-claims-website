#!/usr/bin/env node

/**
 * Email Setup Helper for IEPF Claims Pro
 * This script helps you set up email configuration
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 IEPF Claims Pro - Email Setup Helper\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
const envExists = fs.existsSync(envPath);

if (envExists) {
  console.log('✅ .env.local file already exists');
  console.log('📧 Current configuration:');
  
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log(envContent);
  } catch (error) {
    console.log('❌ Could not read .env.local file');
  }
} else {
  console.log('📝 Creating .env.local file...');
  
  const envContent = `# Email Configuration for IEPF Claims Pro
# Replace with your actual Gmail credentials

# Gmail account that will send emails (iepfclaimpro@gmail.com)
EMAIL_USER=iepfclaimpro@gmail.com

# Gmail App Password (not your regular password)
# To get this:
# 1. Enable 2-Factor Authentication on your Gmail account
# 2. Go to Google Account settings > Security > App passwords
# 3. Generate an app password for "Mail"
# 4. Use that password here
EMAIL_PASSWORD=your_gmail_app_password_here
`;

  try {
    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env.local file created successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Open .env.local file');
    console.log('2. Replace "your_gmail_app_password_here" with your actual Gmail app password');
    console.log('3. Save the file');
    console.log('4. Restart your development server (npm run dev)');
    console.log('5. Test the contact form');
  } catch (error) {
    console.log('❌ Could not create .env.local file:', error.message);
  }
}

console.log('\n📧 Gmail App Password Setup:');
console.log('1. Go to https://myaccount.google.com/security');
console.log('2. Enable 2-Factor Authentication if not already enabled');
console.log('3. Click "App passwords" under "How you sign in to Google"');
console.log('4. Select "Mail" as the app');
console.log('5. Generate the password and copy it');
console.log('6. Paste it in your .env.local file');

console.log('\n🧪 Testing:');
console.log('1. Run: npm run dev');
console.log('2. Go to your contact form');
console.log('3. Fill out and submit the form');
console.log('4. Check iepfclaimpro@gmail.com inbox');

console.log('\n📞 Support:');
console.log('If you need help, check the EMAIL_SETUP_GUIDE.md file');
