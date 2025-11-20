'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';

export default function UploadsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const sessionCookie = cookies.find(row => row.startsWith('admin-session='));
    
    if (!sessionCookie || !sessionCookie.includes('authenticated')) {
      router.push('/admin/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="text-green-600" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">إدارة الملفات</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="text-center py-12">
            <Upload className="text-gray-300 mx-auto mb-4" size={64} />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">قسم إدارة الملفات</h2>
            <p className="text-gray-600 mb-4">هذا القسم قيد التطوير حالياً</p>
            <p className="text-sm text-gray-500">قريباً ستتمكن من:</p>
            <ul className="text-sm text-gray-500 mt-2 space-y-1">
              <li>• رفع ملفات PDF</li>
              <li>• إدارة الكتب الدراسية</li>
              <li>• رفع الصور والمستندات</li>
              <li>• تنظيم الملفات في مجلدات</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}