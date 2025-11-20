'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't check auth on login page
    if (pathname === '/admin/login') {
      return;
    }

    // Check if admin is authenticated
    const cookies = document.cookie.split('; ');
    const sessionCookie = cookies.find(row => row.startsWith('admin-session='));
    
    if (!sessionCookie || !sessionCookie.includes('authenticated')) {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
}