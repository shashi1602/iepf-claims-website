#!/usr/bin/env node

/**
 * Test script for the contact API
 */

const testContactAPI = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the API test script.'
  };

  try {
    console.log('🧪 Testing contact API...');
    console.log('📤 Sending test data:', testData);

    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    console.log('📊 Response status:', response.status);
    console.log('📋 Response data:', result);

    if (response.ok) {
      console.log('✅ API test successful!');
    } else {
      console.log('❌ API test failed!');
    }
  } catch (error) {
    console.log('❌ Test failed with error:', error.message);
  }
};

// Run the test
testContactAPI();
