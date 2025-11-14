import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ CRITICAL: Allow /admin/login (don't redirect!)
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Check admin routes (except login)
  if (pathname.startsWith('/admin')) {
    const adminSession = request.cookies.get('admin-session');
    
    // Not logged in? Redirect to login
    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};








