'use client';

import Link from 'next/link';
import React from 'react';

export default function BackToHome({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-emerald-50 transition"
      >
        <span className="text-lg">←</span>
        <span>العودة إلى الصفحة الرئيسية</span>
      </Link>
    </div>
  );
}