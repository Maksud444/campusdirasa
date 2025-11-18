'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function UploadButton() {
  const { data: session } = useSession();

  const role = (session?.user as any)?.role as string | undefined;

  if (!role) return null;

  if (role === 'teacher' || role === 'admin') {
    return (
      <Link
        href="/upload"
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
      >
        رفع ملف PDF
      </Link>
    );
  }

  return null;
}