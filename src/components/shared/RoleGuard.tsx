'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface RoleGuardProps {
  children: ReactNode;
  requiredRole?: 'user' | 'teacher' | 'admin';
  fallbackRoute?: string;
}

export default function RoleGuard({
  children,
  requiredRole = 'user',
  fallbackRoute = '/login',
}: RoleGuardProps) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(fallbackRoute);
    } else if (
      status === 'authenticated' &&
      requiredRole &&
      session?.user &&
      (session.user as any).role !== requiredRole &&
      (session.user as any).role !== 'admin'
    ) {
      router.push('/unauthorized');
    }
  }, [status, session, requiredRole, router, fallbackRoute]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (status === 'authenticated') {
    return <>{children}</>;
  }

  return null;
}

