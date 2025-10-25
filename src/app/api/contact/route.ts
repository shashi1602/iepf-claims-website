import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Simple JSON file storage for contact submissions
const DATA_FILE = path.join(process.cwd(), 'contact-submissions.json');

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create submission object
    const submission = {
      id: Date.now(), // Simple ID generation
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    // Read existing submissions
    let submissions = [];
    try {
      const data = await fs.readFile(DATA_FILE, 'utf8');
      submissions = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      submissions = [];
    }

    // Add new submission
    submissions.push(submission);

    // Save to file
    await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

    console.log('✅ Contact form submission saved:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      createdAt: submission.createdAt,
    });

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: submission.id,
        timestamp: submission.createdAt
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact form:', error);
    return NextResponse.json(
      { error: 'Failed to save contact form' },
      { status: 500 }
    );
  }
}
