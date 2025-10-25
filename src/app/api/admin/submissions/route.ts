import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { verifyAdminAuth } from '../../../../lib/auth';

// Simple JSON file storage for contact submissions
const DATA_FILE = path.join(process.cwd(), 'contact-submissions.json');

export async function GET(request: NextRequest) {
  // Check authentication
  const isAuthenticated = await verifyAdminAuth();
  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  try {
    // Read submissions from JSON file
    let submissions = [];
    try {
      const data = await fs.readFile(DATA_FILE, 'utf8');
      submissions = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, return empty array
      submissions = [];
    }

    // Sort by creation date (newest first)
    submissions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
