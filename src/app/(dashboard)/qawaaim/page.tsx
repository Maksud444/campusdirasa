'use client';

import Link from 'next/link';
import { FileText, Building2, BookOpen, UserX } from 'lucide-react';

export default function QawaimPage() {
  const lists = [
    {
      id: 1,
      title: 'الإقامة',
      href: '/pdf/iqama',
      icon: FileText,
      color: 'from-emerald-500 to-emerald-600',
      description: 'قوائم الإقامة للطلاب',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 2,
      title: 'أرقام الغرف',
      href: '/pdf/rooms',
      icon: Building2,
      color: 'from-green-500 to-green-600',
      description: 'توزيع الطلاب على الغرف',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'إعلانات الامتحانات',
      href: '/pdf/exams',
      icon: BookOpen,
      color: 'from-teal-500 to-teal-600',
      description: 'جداول ومواعيد الامتحانات',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 4,
      title: 'المفصولات',
      href: '/pdf/removed',
      icon: UserX,
      color: 'from-red-500 to-red-600',
      description: 'قائمة المستبعدين',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            القوائم
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            اختر القائمة التي تريد الاطلاع عليها
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
              <p className="text-blue-800">
                يمكنك الوصول إلى جميع القوائم والملفات من خلال الخيارات أدناه. اضغط على القائمة للاطلاع على التفاصيل الكاملة.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lists.map((list) => (
            <Link
              key={list.id}
              href={list.href}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${list.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <list.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {list.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {list.description}
              </p>

              {/* Action Button */}
              <div className={`${list.bgColor} ${list.iconColor} px-4 py-2 rounded-lg text-center font-medium group-hover:shadow-md transition-all`}>
                عرض القائمة
              </div>
            </Link>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تحتاج مساعدة؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا لم تجد ما تبحث عنه أو كان لديك أي استفسار، يمكنك التواصل معنا
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