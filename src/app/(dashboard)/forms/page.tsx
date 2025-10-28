'use client';

import Link from 'next/link';
import { FileText, GraduationCap, BookOpen, ArrowLeft } from 'lucide-react';

export default function FormsPage() {
  const formCategories = [
    {
      id: 1,
      title: 'استخراج إقامة',
      titleEn: 'Iqama Application',
      description: 'نماذج طلب استخراج الإقامة لجميع الصفوف الدراسية',
      icon: FileText,
      href: '/forms/iqama',
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      totalForms: 8,
      image: '📄'
    },
    {
      id: 2,
      title: 'تدارس',
      titleEn: 'Tadarus Application',
      description: 'نماذج التقديم لبرنامج تدارس لجميع المراحل الدراسية',
      icon: BookOpen,
      href: '/forms/tadarus',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      totalForms: 6,
      image: '📚'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            النماذج الرسمية
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            جميع نماذج الطلبات والتقديمات متاحة هنا - املأ النموذج أونلاين
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
              <h3 className="font-bold text-blue-900 text-lg mb-2">إرشادات التعبئة</h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• اختر نوع النموذج المطلوب (إقامة أو تدارس)</li>
                <li>• حدد الصف الدراسي الخاص بك</li>
                <li>• املأ البيانات بدقة في Google Form</li>
                <li>• ارفع جميع المستندات المطلوبة بصيغة PDF أو صور واضحة</li>
                <li>• تأكد من صحة البيانات قبل الإرسال</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 overflow-hidden border border-gray-100"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${category.gradient} p-10 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{category.image}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h2>
                  <p className="text-white/90 text-sm">{category.titleEn}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                      <category.icon className={`text-${category.color}-600`} size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">عدد النماذج</p>
                      <p className="text-xl font-bold text-gray-800">{category.totalForms}</p>
                    </div>
                  </div>
                  <div className={`bg-${category.color}-50 text-${category.color}-700 px-4 py-2 rounded-full text-sm font-medium`}>
                    متاح الآن
                  </div>
                </div>

                {/* Action Button */}
                <div className={`flex items-center justify-between bg-gradient-to-r ${category.gradient} text-white px-6 py-4 rounded-xl group-hover:shadow-lg transition-all`}>
                  <span className="font-bold text-lg">عرض النماذج</span>
                  <ArrowLeft className="group-hover:translate-x-[-8px] transition-transform" size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-emerald-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">نماذج إلكترونية</h3>
            <p className="text-gray-600 text-sm">
              املأ النموذج أونلاين عبر Google Forms
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">لجميع المراحل</h3>
            <p className="text-gray-600 text-sm">
              نماذج متاحة لجميع الصفوف الدراسية
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-teal-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">سريع وآمن</h3>
            <p className="text-gray-600 text-sm">
              معالجة سريعة وبيانات محمية
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-xl">
          <FileText className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تحتاج مساعدة في ملء النموذج؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            تواصل معنا للحصول على المساعدة في تعبئة النماذج أو الإجابة على استفساراتك
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