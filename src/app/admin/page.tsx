'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Users, FileText, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if logged in
    const adminSession = document.cookie
      .split('; ')
      .find(row => row.startsWith('admin-session='));
    
    if (!adminSession || !adminSession.includes('authenticated')) {
      router.push('/admin/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'admin-session=; path=/; max-age=0';
    window.location.href = '/';
  };

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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Shield className="text-emerald-600" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">لوحة تحكم المشرف</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">مرحباً بك، مشرف!</h2>
          <p className="text-white/90 text-lg">يمكنك الآن إدارة النظام بالكامل</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/users"
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">إدارة المستخدمين</h3>
            </div>
            <p className="text-gray-600">عرض وإدارة حسابات المستخدمين</p>
          </Link>

          <Link
            href="/admin/uploads"
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">إدارة الملفات</h3>
            </div>
            <p className="text-gray-600">رفع وإدارة ملفات PDF والمستندات</p>
          </Link>

          <Link
            href="/admin/settings"
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">الإعدادات</h3>
            </div>
            <p className="text-gray-600">إعدادات النظام والتكوينات</p>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">0</div>
            <div className="text-gray-600">إجمالي المستخدمين</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600">الملفات المرفوعة</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">نشط</div>
            <div className="text-gray-600">حالة النظام</div>
          </div>
        </div>
      </main>
    </div>
  );
}









