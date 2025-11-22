'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Calendar } from 'lucide-react';

export default function LibraryMainPage() {
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setLastUpdate(formatted);
  }, []);

  const categories = [
    {
      id: 1,
      title: 'كتب الإعدادي',
      titleEn: 'Middle School Books',
      description: 'جميع الكتب الدراسية للمرحلة الإعدادية',
      href: '/library/iedadi',
      icon: '📗',
      bgGradient: 'from-[#00d2ff] to-[#3a7bd5]',
      totalBooks: 15,
      lastUpdate: '2025-01-10'
    },
    {
      id: 2,
      title: 'كتب الثانوي',
      titleEn: 'High School Books',
      description: 'جميع الكتب الدراسية للمرحلة الثانوية',
      href: '/library/thanawi',
      icon: '📘',
      bgGradient: 'from-[#1e3a8a] to-[#3b82f6]',
      totalBooks: 20,
      lastUpdate: '2025-01-08'
    },
    {
      id: 3,
      title: 'دراسة خاصة',
      titleEn: 'Private Study',
      description: 'كتب ومراجع الدراسة الخاصة',
      href: '/library/dirasa-khassa',
      icon: '📚',
      bgGradient: 'from-[#0891b2] to-[#06b6d4]',
      totalBooks: 10,
      lastUpdate: '2025-01-12'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'اليوم';
    if (diffDays === 1) return 'أمس';
    if (diffDays <= 7) return `منذ ${diffDays} أيام`;
    if (diffDays <= 30) return `منذ ${Math.floor(diffDays / 7)} أسابيع`;
    return `منذ ${Math.floor(diffDays / 30)} شهور`;
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <BookOpen className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            مكتبة الكتب
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
            جميع الكتب الدراسية متاحة للقراءة والتحميل
          </p>
          
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
            <Clock className="text-white" size={20} />
            <span className="text-white font-medium">آخر تحديث:</span>
            <span className="text-white font-bold">{lastUpdate}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#00d2ff] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">معلومات مهمة</h3>
              <p className="text-gray-700 text-sm">
                يمكنك قراءة الكتب مباشرة أو تحميلها على جهازك. جميع الكتب متوفرة بصيغة PDF عالية الجودة.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${category.bgGradient} p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="text-6xl mb-4 relative z-10">{category.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-1 relative z-10">
                  {category.title}
                </h2>
                <p className="text-white/90 text-sm relative z-10">{category.titleEn}</p>
                
                <div className="absolute bottom-3 left-3 bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-white" />
                    <span className="text-white text-xs font-medium">
                      {getDaysAgo(category.lastUpdate)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 min-h-[50px]">
                  {category.description}
                </p>

                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">آخر تحديث:</span>
                    <span className="text-gray-800 font-bold">{formatDate(category.lastUpdate)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-[#00d2ff]" size={20} />
                    <span className="text-gray-700 font-medium">
                      {category.totalBooks} كتاب
                    </span>
                  </div>
                  <div className="text-[#00d2ff] font-bold group-hover:translate-x-[-4px] transition-transform">
                    عرض الكتب ←
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-xl">
          <BookOpen className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل لديك أي نصائح لتحسين عملنا؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت مشكلة في الوصول إلى الكتب أو التحميل، تواصل معنا
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-[#00d2ff] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}