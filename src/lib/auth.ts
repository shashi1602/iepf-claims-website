import { cookies } from 'next/headers';

export async function verifyAdminAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin-session')?.value;

    if (!sessionToken) {
      return false;
    }

    // Verify session token
    try {
      const decoded = Buffer.from(sessionToken, 'base64').toString();
      const [username, timestamp] = decoded.split(':');
      
      // Check if session is not expired (24 hours)
      const sessionTime = parseInt(timestamp);
      const now = Date.now();
      const isExpired = (now - sessionTime) > (60 * 60 * 24 * 1000);

      return username === 'iepfuser' && !isExpired;
    } catch (error) {
      return false;
    }
  } catch (error) {
    return false;
  }
}
