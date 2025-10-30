'use client';

import Link from 'next/link';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

export default function LibraryMainPage() {
  const categories = [
    {
      id: 1,
      title: 'كتب الإعدادي',
      titleEn: 'Middle School Books',
      description: 'جميع الكتب الدراسية للمرحلة الإعدادية',
      href: '/library/iedadi',
      icon: '📗',
      bgGradient: 'from-emerald-500 to-green-600',
      totalBooks: 15
    },
    {
      id: 2,
      title: 'كتب الثانوي',
      titleEn: 'High School Books',
      description: 'جميع الكتب الدراسية للمرحلة الثانوية',
      href: '/library/thanawi',
      icon: '📘',
      bgGradient: 'from-blue-500 to-indigo-600',
      totalBooks: 20
    },
    {
      id: 3,
      title: 'دراسة خاصة',
      titleEn: 'Private Study',
      description: 'كتب ومراجع الدراسة الخاصة',
      href: '/library/dirasa-khassa',
      icon: '📚',
      bgGradient: 'from-purple-500 to-pink-600',
      totalBooks: 10
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <BookOpen className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            مكتبة الكتب
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            جميع الكتب الدراسية متاحة للقراءة والتحميل
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-2">معلومات مهمة</h3>
              <p className="text-blue-800 text-sm">
                يمكنك قراءة الكتب مباشرة أو تحميلها على جهازك. جميع الكتب متوفرة بصيغة PDF عالية الجودة.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${category.bgGradient} p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {category.title}
                </h2>
                <p className="text-white/90 text-sm">{category.titleEn}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 min-h-[50px]">
                  {category.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-emerald-600" size={20} />
                    <span className="text-gray-700 font-medium">
                      {category.totalBooks} كتاب
                    </span>
                  </div>
                  <div className="text-emerald-600 font-bold group-hover:translate-x-[-4px] transition-transform">
                    عرض الكتب ←
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-emerald-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">45</div>
            <div className="text-gray-600 text-sm">إجمالي الكتب</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">3</div>
            <div className="text-gray-600 text-sm">المراحل الدراسية</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">1000+</div>
            <div className="text-gray-600 text-sm">طالب مستفيد</div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-xl">
          <BookOpen className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تحتاج مساعدة؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت مشكلة في الوصول إلى الكتب أو التحميل، تواصل معنا
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}