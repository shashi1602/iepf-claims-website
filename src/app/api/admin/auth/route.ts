import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Admin credentials (in production, use environment variables)
const ADMIN_USERNAME = 'iepfuser';
const ADMIN_PASSWORD = 'iepfpassword123';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Create session token (simple base64 encoding for demo)
      const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      
      // Set cookie with session token
      const cookieStore = await cookies();
      cookieStore.set('admin-session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return NextResponse.json({ 
        message: 'Login successful',
        authenticated: true 
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin-session')?.value;

    if (!sessionToken) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify session token
    try {
      const decoded = Buffer.from(sessionToken, 'base64').toString();
      const [username, timestamp] = decoded.split(':');
      
      // Check if session is not expired (24 hours)
      const sessionTime = parseInt(timestamp);
      const now = Date.now();
      const isExpired = (now - sessionTime) > (60 * 60 * 24 * 1000);

      if (username === ADMIN_USERNAME && !isExpired) {
        return NextResponse.json({ authenticated: true });
      } else {
        return NextResponse.json({ authenticated: false });
      }
    } catch (error) {
      return NextResponse.json({ authenticated: false });
    }
  } catch (error) {
    return NextResponse.json({ authenticated: false });
  }
}
