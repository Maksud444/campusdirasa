'use client';

import Link from 'next/link';
import { Shield, Home } from 'lucide-react';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-red-500 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="text-red-600" size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">دخول مرفوض</h1>
        <p className="text-gray-600 mb-6">
          ليس لديك صلاحية للوصول إلى هذه الصفحة. يرجى التأكد من أن حسابك لديه الصلاحيات المطلوبة.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            <Home size={20} />
            <span>الرئيسية</span>
          </Link>
          <Link
            href="/login"
            className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            تسجيل دخول جديد
          </Link>
        </div>
      </div>
    </div>
  );
}
