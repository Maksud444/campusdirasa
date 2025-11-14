'use client';

import { useState } from 'react';
import { Lock, User, AlertCircle, Shield } from 'lucide-react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'campus@admin2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple validation
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Set cookie
        document.cookie = 'admin-session=authenticated; path=/; max-age=86400'; // 24 hours
        
        // Redirect
        window.location.href = '/admin';
      } else {
        setError('اسم المستخدم أو كلمة المرور غير صحيحة');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center px-4" dir="rtl">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-emerald-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">تسجيل دخول المشرف</h1>
            <p className="text-gray-600">للوصول إلى لوحة التحكم</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">اسم المستخدم</label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900 placeholder:text-gray-400 outline-none"
                  placeholder="أدخل اسم المستخدم"
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900 placeholder:text-gray-400 outline-none"
                  placeholder="أدخل كلمة المرور"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 text-white py-3 rounded-lg font-bold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              هذه الصفحة مخصصة للمشرفين فقط
            </p>
          </div>
        </div>

        {/* Dev Credentials (REMOVE IN PRODUCTION) */}
        <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-sm">
          <p className="font-bold mb-2">🔐 معلومات الدخول:</p>
          <p className="mb-1">اسم المستخدم: <span className="font-mono bg-white/20 px-2 py-1 rounded">admin</span></p>
          <p>كلمة المرور: <span className="font-mono bg-white/20 px-2 py-1 rounded">campus@admin2025</span></p>
        </div>
      </div>
    </div>
  );
}








