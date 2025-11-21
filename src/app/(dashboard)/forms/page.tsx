'use client';

import Link from 'next/link';
import { FileText, BookOpen, Download, FileDown, Calendar, FileUser, CheckCircle } from 'lucide-react';

export default function FormsPage() {
  const formCategories = [
    {
      id: 1,
      title: 'استمارة',
      titleEn: 'Iqama Verification Form',
      description: 'نماذج تصديق الإقامة - متاح قريباً',
      icon: FileText,
      href: '/forms/iqama',
      bgGradient: 'from-emerald-500 to-teal-500',
      totalForms: 0,
      image: '📄',
      classes: []
    },
    {
      id: 2,
      title: 'برنامج تدارس',
      titleEn: 'Tadarus Program Form',
      description: 'نماذج التقديم لبرنامج تدارس',
      icon: BookOpen,
      href: '/forms/tadarus',
      bgGradient: 'from-blue-500 via-indigo-500 to-purple-500',
      totalForms: 6,
      image: '📚',
      classes: []
    },
    {
      id: 3,
      title: 'التحقق من القبول',
      titleEn: 'Admission Verification',
      description: 'تحقق من قبول طلبك للطلاب الجدد',
      icon: CheckCircle,
      href: '/forms/admission-check',
      bgGradient: 'from-green-500 to-emerald-600',
      totalForms: 1,
      image: '✅',
      classes: []
    }
  ];

  const pdfForms = [
    {
      id: 1,
      title: 'استمارة القبول والتسجيل',
      titleEn: 'Admission & Registration Form',
      description: 'نموذج التقديم للقبول في المعهد - للطلاب الجدد',
      icon: FileDown,
      pdfLink: '/forms/pdfs/admission-form.pdf',
      bgGradient: 'from-orange-500 to-red-500',
      image: '📝',
      fileSize: '2 MB'
    },
    {
      id: 2,
      title: 'طلب تجديد الإقامة',
      titleEn: 'Iqama Renewal Application',
      description: 'استمارة تجديد الإقامة للطلاب الأجانب',
      icon: FileUser,
      pdfLink: '/forms/pdfs/iqama-renewal.pdf',
      bgGradient: 'from-cyan-500 to-blue-600',
      image: '🛂',
      fileSize: '1.5 MB'
    },
    {
      id: 3,
      title: 'طلب إجازة',
      titleEn: 'Leave Application',
      description: 'استمارة طلب إجازة أو غياب',
      icon: Calendar,
      pdfLink: '/forms/pdfs/leave-application.pdf',
      bgGradient: 'from-purple-500 to-pink-500',
      image: '📅',
      fileSize: '1 MB'
    }
  ];

  const handleDownload = (pdfLink: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">جميع الاستمارات</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">جميع نماذج الطلبات متاحة هنا - املأ النموذج أو قم بتحميل النماذج القابلة للطباعة</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <Download className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">نماذج قابلة للتحميل</h2>
              <p className="text-gray-600">حمّل النماذج واملأها يدوياً</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfForms.map((form) => {
              const Icon = form.icon;
              return (
                <div key={form.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-br ${form.bgGradient} p-6 text-center relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full" style={{ marginRight: '-4rem', marginTop: '-4rem' }}></div>
                    <div className="text-6xl mb-3 relative z-10">{form.image}</div>
                    <h3 className="text-xl font-bold text-white relative z-10 drop-shadow-lg">{form.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{form.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <FileText size={16} />
                      <span>حجم الملف: {form.fileSize}</span>
                    </div>
                    <button onClick={() => handleDownload(form.pdfLink, form.title)} className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${form.bgGradient} text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-bold group-hover:scale-105 transform`}>
                      <Download size={20} />
                      <span>تحميل النموذج</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-16 border-t-2 border-gray-200"></div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">التحقق من القبول</h2>
              <p className="text-gray-600">تحقق من قبول طلبك للطلاب الجدد</p>
            </div>
          </div>

          <a href="https://forms.google.com/your-form-link-here" target="_blank" rel="noopener noreferrer" className="block group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-green-200 hover:border-green-400">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full" style={{ marginRight: '-5rem', marginTop: '-5rem' }}></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full" style={{ marginLeft: '-4rem', marginBottom: '-4rem' }}></div>
              <div className="text-8xl mb-6 relative z-10">✅</div>
              <h3 className="text-4xl font-bold text-white mb-4 relative z-10 drop-shadow-lg">التحقق من قبول دراسة خاصة</h3>
              <p className="text-2xl text-white/95 mb-6 relative z-10 drop-shadow-md leading-relaxed max-w-3xl mx-auto">للتحقق من قبول اسمك في دراسة خاصة، قم بتعبئة النموذج بالاسم الكامل ورقم الجواز</p>
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-white/40 relative z-10">
                <CheckCircle className="text-white" size={24} />
                <span className="text-white text-xl font-bold">اضغط هنا للتحقق من القبول</span>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl mb-2">📝</div>
                  <h4 className="font-bold text-gray-800 mb-1">املأ النموذج</h4>
                  <p className="text-sm text-gray-600">أدخل اسمك الكامل</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl mb-2">🛂</div>
                  <h4 className="font-bold text-gray-800 mb-1">رقم الجواز</h4>
                  <p className="text-sm text-gray-600">أدخل رقم جوازك</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl mb-2">✅</div>
                  <h4 className="font-bold text-gray-800 mb-1">تحقق من النتيجة</h4>
                  <p className="text-sm text-gray-600">اعرف نتيجة القبول</p>
                </div>
              </div>
              <div className="bg-green-100 border-2 border-green-300 rounded-xl p-6 text-center">
                <p className="text-green-800 font-bold text-lg mb-2">ملاحظة مهمة</p>
                <p className="text-green-700">يرجى التأكد من صحة البيانات المدخلة - الاسم الكامل ورقم الجواز كما هو في الوثائق الرسمية</p>
              </div>
            </div>
          </a>
        </div>

        <div className="my-16 border-t-2 border-gray-200"></div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">النماذج الإلكترونية</h2>
              <p className="text-gray-600">املأ النماذج أونلاين مباشرة</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} href={category.href} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${category.bgGradient} p-8 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                    <div className="text-7xl mb-4 relative z-10">{category.image}</div>
                    <h3 className="text-3xl font-bold text-white mb-2 relative z-10 drop-shadow-lg">{category.title}</h3>
                    <p className="text-white/90 relative z-10 drop-shadow-md">{category.totalForms} نماذج متاحة</p>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{category.description}</p>
                    <div className={`flex items-center justify-center gap-2 bg-gradient-to-r ${category.bgGradient} text-white px-6 py-3 rounded-xl font-bold group-hover:shadow-lg transition-all`}>
                      <span>عرض النماذج</span>
                      <Icon size={20} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-2xl">
          <FileText className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">هل لديك أي نصائح لتحسين عملنا؟</h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">إذا واجهت أي مشكلة في ملء النماذج أو لديك استفسار، تواصل معنا</p>
          <Link href="/feedback" className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">تواصل معنا</Link>
        </div>
      </div>
    </div>
  );
}