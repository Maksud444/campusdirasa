'use client';

import { useSession } from 'next-auth/react';
import PDFUpload from '@/components/features/PDFUpload';

export default function DashboardPage() {
  const { data: session } = useSession();
  const role = (session?.user as any)?.role;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">لوحة التحكم</h1>
        <p className="text-gray-600 mt-2">
          مرحباً {session?.user?.name} ({role === 'admin' ? 'مدير' : 'مدرّس'})
        </p>
      </div>

      <PDFUpload />
    </div>
  );
}