'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: ('admin' | 'teacher' | 'user')[];
  redirectTo?: string;
  fallback?: React.ReactNode;
}

export default function RoleGuard({
  children,
  allowedRoles,
  redirectTo = '/login',
  fallback,
}: RoleGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push(redirectTo);
      return;
    }

    const userRole = (session.user as any)?.role || 'user';
    if (!allowedRoles.includes(userRole)) {
      router.push(redirectTo);
    }
  }, [session, status, allowedRoles, redirectTo, router]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (!session) {
    return fallback || null;
  }

  const userRole = (session.user as any)?.role || 'user';
  if (!allowedRoles.includes(userRole)) {
    return fallback || null;
  }

  return <>{children}</>;
}
