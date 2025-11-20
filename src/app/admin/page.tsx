'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Shield, Users, FileText, Settings, LogOut, Home } from 'lucide-react';
import Link from 'next/link';
import RoleGuard from '@/components/shared/RoleGuard';

function AdminDashboardContent() {
  const router = useRouter();
  const { data: session } = useSession();
  const [adminName, setAdminName] = useState('Admin');

  useEffect(() => {
    if (session?.user?.name) {
      setAdminName(session.user.name);
    }
  }, [session]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Shield className="text-emerald-600" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">لوحة تحكم المشرف</h1>
                <p className="text-sm text-gray-500">مرحباً، {adminName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Home size={18} />
                <span>الصفحة الرئيسية</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut size={18} />
                <span>تسجيل الخروج</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">مرحباً بك، {adminName}!</h2>
          <p className="text-white/90 text-lg">يمكنك الآن إدارة النظام بالكامل من هذه اللوحة</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">الإجراءات السريعة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/admin/users"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-emerald-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">إدارة المستخدمين</h3>
              </div>
              <p className="text-gray-600">عرض وإدارة حسابات المستخدمين والصلاحيات</p>
            </Link>

            <Link
              href="/admin/uploads"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-emerald-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">إدارة الملفات</h3>
              </div>
              <p className="text-gray-600">رفع وإدارة ملفات PDF والمستندات والصور</p>
            </Link>

            <Link
              href="/admin/settings"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-emerald-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Settings className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">الإعدادات</h3>
              </div>
              <p className="text-gray-600">إعدادات النظام والتكوينات العامة</p>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">إحصائيات النظام</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-emerald-600">0</div>
                <Users className="text-emerald-600" size={24} />
              </div>
              <div className="text-gray-600 text-sm">إجمالي المستخدمين</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-blue-600">0</div>
                <FileText className="text-blue-600" size={24} />
              </div>
              <div className="text-gray-600 text-sm">الملفات المرفوعة</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-purple-600">3</div>
                <Settings className="text-purple-600" size={24} />
              </div>
              <div className="text-gray-600 text-sm">الأقسام النشطة</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl font-bold text-green-600">نشط</div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-gray-600 text-sm">حالة النظام</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <RoleGuard requiredRole="admin">
      <AdminDashboardContent />
    </RoleGuard>
  );
}