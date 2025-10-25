#!/usr/bin/env node

/**
 * Gmail Password Update Helper
 * This script helps you update your Gmail app password
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🔐 Gmail Password Update Helper\n');

// Check if .env.local exists
if (!fs.existsSync('.env.local')) {
  console.log('❌ .env.local file not found. Please run the setup script first.');
  process.exit(1);
}

console.log('📧 Current configuration:');
const envContent = fs.readFileSync('.env.local', 'utf8');
console.log(envContent);

console.log('\n🔑 To get your Gmail App Password:');
console.log('1. Go to: https://myaccount.google.com/security');
console.log('2. Enable 2-Factor Authentication (if not already enabled)');
console.log('3. Click "App passwords" under "How you sign in to Google"');
console.log('4. Select "Mail" as the app');
console.log('5. Generate the password and copy it');
console.log('\n📝 The password should look like: abcd efgh ijkl mnop');

rl.question('\n🔐 Enter your Gmail App Password: ', (password) => {
  if (!password || password.trim() === '') {
    console.log('❌ No password entered. Exiting.');
    rl.close();
    return;
  }

  // Update the .env.local file
  const updatedContent = envContent.replace(
    'EMAIL_PASSWORD=your_gmail_app_password_here',
    `EMAIL_PASSWORD=${password.trim()}`
  );

  try {
    fs.writeFileSync('.env.local', updatedContent);
    console.log('✅ Gmail password updated successfully!');
    console.log('\n🚀 Next steps:');
    console.log('1. Restart your development server (Ctrl+C then npm run dev)');
    console.log('2. Test the contact form');
    console.log('3. Check iepfclaimpro@gmail.com inbox for emails');
  } catch (error) {
    console.log('❌ Error updating password:', error.message);
  }

  rl.close();
});
