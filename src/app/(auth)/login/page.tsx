'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      setError('فشل تسجيل الدخول. تحقق من بيانات اعتمادك.');
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setDebugInfo('');
    setLoading(true);

    try {
      console.log('Attempting login with email:', email);
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      console.log('SignIn result:', result);

      if (result?.error) {
        console.error('Login error:', result.error);
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
        setDebugInfo(`Error: ${result.error}`);
      } else if (result?.ok) {
        console.log('Login successful, redirecting to dashboard');
        router.push('/dashboard');
      } else {
        console.error('Unknown error:', result);
        setError('حدث خطأ غير متوقع');
        setDebugInfo(`Unknown error: ${JSON.stringify(result)}`);
      }
    } catch (err) {
      console.error('Catch block error:', err);
      setError('حدث خطأ أثناء تسجيل الدخول');
      setDebugInfo(`Exception: ${err}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="admin@example.com"
            dir="ltr"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            كلمة المرور
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="••••••••"
            dir="ltr"
            disabled={loading}
          />
          <p className="text-xs text-gray-500 mt-1">الكلمة الافتراضية: admin123</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {debugInfo && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg text-xs">
            {debugInfo}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
        >
          {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
        </button>

        <div className="text-center text-sm text-gray-600">
          ليس لديك حساب؟{' '}
          <Link href="/register" className="text-emerald-600 hover:text-emerald-700 font-medium">
            إنشاء حساب جديد
          </Link>
        </div>
      </form>

      {/* Test Credentials Display */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs font-semibold text-gray-600 mb-2">بيانات اختبار:</p>
        <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
          <p><strong>مسؤول:</strong> admin@example.com / admin123</p>
          <p><strong>معلم:</strong> teacher@example.com / teacher123</p>
        </div>
      </div>
    </>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-500 via-green-500 to-teal-500 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-[420px] mx-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">مرحباً بك في كامبوس دراسة</h2>
          <p className="text-gray-600">قم بتسجيل الدخول للمتابعة</p>
        </div>

        <Suspense fallback={<div>جاري التحميل...</div>}>
          <LoginFormContent />
        </Suspense>
      </div>
    </div>
  );
}