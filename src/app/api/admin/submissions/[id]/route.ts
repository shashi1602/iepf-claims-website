import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Simple JSON file storage for contact submissions
const DATA_FILE = path.join(process.cwd(), 'contact-submissions.json');

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Simple authentication check - you can enhance this later
  const authHeader = request.headers.get('authorization');
  if (!authHeader || authHeader !== 'Bearer admin-token') {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid submission ID' },
        { status: 400 }
      );
    }

    // Read existing submissions
    let submissions = [];
    try {
      const data = await fs.readFile(DATA_FILE, 'utf8');
      submissions = JSON.parse(data);
    } catch (error) {
      return NextResponse.json(
        { error: 'No submissions found' },
        { status: 404 }
      );
    }

    // Filter out the submission with the given ID
    const filteredSubmissions = submissions.filter((sub: any) => sub.id !== id);
    
    if (filteredSubmissions.length === submissions.length) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    // Save updated submissions
    await fs.writeFile(DATA_FILE, JSON.stringify(filteredSubmissions, null, 2));

    return NextResponse.json({ message: 'Submission deleted successfully' });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    );
  }
}
