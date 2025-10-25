#!/usr/bin/env node

/**
 * Test database connection
 */

const { PrismaClient } = require('./src/generated/client');

async function testDatabase() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🧪 Testing database connection...');
    
    // Test creating a contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message from the database test script.',
      },
    });
    
    console.log('✅ Database test successful!');
    console.log('📊 Created submission:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      createdAt: submission.createdAt,
    });
    
    // Clean up test data
    await prisma.contactSubmission.delete({
      where: { id: submission.id },
    });
    
    console.log('🧹 Test data cleaned up');
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();
