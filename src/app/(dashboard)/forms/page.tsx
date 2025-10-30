'use client';

import Link from 'next/link';
import { FileText, BookOpen, ArrowLeft, CheckCircle, Clock, Calendar } from 'lucide-react';

export default function FormsPage() {
  const formCategories = [
    {
      id: 1,
      title: 'تصديق الإقامة',
      titleEn: 'Iqama Verification',
      description: 'نماذج تصديق الإقامة لجميع المستويات الدراسية - متاح في أيام محددة',
      icon: FileText,
      href: '/forms/iqama',
      bgGradient: 'from-emerald-500 to-teal-500',
      totalForms: 6,
      image: '📄',
      classes: ['متقدم ثاني', 'متقدم أول', 'متوسط ثاني', 'متوسط أول', 'مبتدئ ثاني', 'مبتدئ أول']
    },
    {
      id: 2,
      title: 'برنامج تدارس',
      titleEn: 'Tadarus Program',
      description: 'نماذج التقديم لبرنامج تدارس لجميع المستويات - متاح في أيام محددة',
      icon: BookOpen,
      href: '/forms/tadarus',
      bgGradient: 'from-blue-500 via-indigo-500 to-purple-500',
      totalForms: 6,
      image: '📚',
      classes: ['متقدم ثاني', 'متقدم أول', 'متوسط ثاني', 'متوسط أول', 'مبتدئ ثاني', 'مبتدئ أول']
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
            جميع نماذج الطلبات متاحة هنا - املأ النموذج في الأيام والأوقات المحددة
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">ℹ</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-blue-900 text-xl mb-3">إرشادات مهمة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-blue-800 text-sm">كل صف له أيام محددة للتقديم</p>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-blue-800 text-sm">النماذج متاحة من 9 صباحاً إلى 5 مساءً</p>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-blue-800 text-sm">تحقق من الأيام المتاحة لصفك</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-blue-800 text-sm">املأ البيانات بدقة (رقم الجواز، الاسم، الصف)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {formCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border-2 border-gray-100 hover:border-green-300"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${category.bgGradient} p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-4">{category.image}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h2>
                  <p className="text-white/90 text-sm font-medium">{category.titleEn}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-700 text-base mb-6 leading-relaxed min-h-[60px]">
                  {category.description}
                </p>

                {/* Classes List */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-sm">المستويات المتاحة:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.classes.map((cls, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm font-medium">{cls}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 pb-6 border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <category.icon className="text-emerald-600" size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">عدد النماذج</p>
                      <p className="text-2xl font-bold text-gray-800">{category.totalForms}</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>متاح الآن</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className={`flex items-center justify-between bg-gradient-to-r ${category.bgGradient} text-white px-6 py-4 rounded-xl group-hover:shadow-lg transition-all`}>
                  <span className="font-bold text-lg">عرض النماذج</span>
                  <ArrowLeft className="group-hover:translate-x-[-8px] transition-transform" size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-emerald-600" size={26} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">أيام محددة</h3>
            <p className="text-gray-600 text-sm">
              كل صف له أيام معينة للتقديم
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-blue-600" size={26} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">مواعيد محددة</h3>
            <p className="text-gray-600 text-sm">
              من 9 صباحاً إلى 5 مساءً
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-teal-600" size={26} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">نماذج Google</h3>
            <p className="text-gray-600 text-sm">
              ملء مباشر ورفع المستندات
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-2xl">
          <FileText className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تحتاج مساعدة؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت أي مشكلة في ملء النماذج أو لديك استفسار، تواصل معنا
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