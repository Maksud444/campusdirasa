'use client';

import Link from 'next/link';
import { FileText, BookOpen, Download, FileDown, Calendar, FileUser } from 'lucide-react';

export default function FormsPage() {
  // Existing online forms
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
      description: 'نماذج التقديم لبرنامج تدارس - متاح قريباً',
      icon: BookOpen,
      href: '/forms/tadarus',
      bgGradient: 'from-blue-500 via-indigo-500 to-purple-500',
      totalForms: 0,
      image: '📚',
      classes: []
    }
  ];

  // NEW: PDF Download Forms
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
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            جميع نماذج الطلبات متاحة هنا - املأ النموذج أو قم بتحميل النماذج القابلة للطباعة
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* PDF Download Forms Section */}
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
                <div
                  key={form.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${form.bgGradient} p-6 text-center relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="text-6xl mb-3 relative z-10">{form.image}</div>
                    <h3 className="text-xl font-bold text-white relative z-10 drop-shadow-lg">
                      {form.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {form.description}
                    </p>

                    {/* File Size */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <FileText size={16} />
                      <span>حجم الملف: {form.fileSize}</span>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(form.pdfLink, form.title)}
                      className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${form.bgGradient} text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-bold group-hover:scale-105 transform`}
                    >
                      <Download size={20} />
                      <span>تحميل النموذج</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t-2 border-gray-200"></div>

        {/* Online Forms Section */}
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
                <Link
                  key={category.id}
                  href={category.href}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${category.bgGradient} p-8 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                    <div className="text-7xl mb-4 relative z-10">{category.image}</div>
                    <h3 className="text-3xl font-bold text-white mb-2 relative z-10 drop-shadow-lg">
                      {category.title}
                    </h3>
                    <p className="text-white/90 relative z-10 drop-shadow-md">
                      {category.totalForms} نماذج متاحة
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {category.description}
                    </p>

                    {/* Classes List */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-3">الصفوف المتاحة:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.classes.map((cls, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {cls}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
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

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-2xl">
          <FileText className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل لديك أي نصائح لتحسين عملنا؟
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








