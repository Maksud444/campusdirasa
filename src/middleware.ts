import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow /admin/login (don't redirect!)
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Check admin routes (except login)
  if (pathname.startsWith('/admin')) {
    try {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // Not logged in or not an admin? Redirect to login
      if (!token || token.role !== 'admin') {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    } catch (error) {
      console.error('Middleware auth error:', error);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Check teacher routes
  if (pathname.startsWith('/teacher')) {
    try {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // Not logged in or not a teacher/admin? Redirect to login
      if (!token || (token.role !== 'teacher' && token.role !== 'admin')) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch (error) {
      console.error('Middleware auth error:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/teacher/:path*',
  ],
};








