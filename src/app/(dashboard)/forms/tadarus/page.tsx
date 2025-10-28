'use client';

import Link from 'next/link';
import { BookOpen, ExternalLink, ArrowRight, CheckCircle, Clock, ChevronLeft, Award, Users } from 'lucide-react';

export default function TadarusFormsPage() {
  // Class-wise Tadarus forms with Google Form links
  const tadarusForms = [
    {
      id: 1,
      class: 'الصف الأول الإعدادي',
      classEn: 'Grade 7',
      formLink: 'https://forms.google.com/tadarus-form-1', // Replace with actual Google Form link
      description: 'نموذج التقديم لبرنامج تدارس للصف الأول الإعدادي',
      color: 'blue',
      status: 'متاح',
      deadline: '2025-12-15',
      seats: 30
    },
    {
      id: 2,
      class: 'الصف الثاني الإعدادي',
      classEn: 'Grade 8',
      formLink: 'https://forms.google.com/tadarus-form-2',
      description: 'نموذج التقديم لبرنامج تدارس للصف الثاني الإعدادي',
      color: 'indigo',
      status: 'متاح',
      deadline: '2025-12-15',
      seats: 30
    },
    {
      id: 3,
      class: 'الصف الثالث الإعدادي',
      classEn: 'Grade 9',
      formLink: 'https://forms.google.com/tadarus-form-3',
      description: 'نموذج التقديم لبرنامج تدارس للصف الثالث الإعدادي',
      color: 'purple',
      status: 'متاح',
      deadline: '2025-12-15',
      seats: 25
    },
    {
      id: 4,
      class: 'الصف الأول الثانوي',
      classEn: 'Grade 10',
      formLink: 'https://forms.google.com/tadarus-form-4',
      description: 'نموذج التقديم لبرنامج تدارس للصف الأول الثانوي',
      color: 'violet',
      status: 'متاح',
      deadline: '2025-12-15',
      seats: 25
    },
    {
      id: 5,
      class: 'الصف الثاني الثانوي',
      classEn: 'Grade 11',
      formLink: 'https://forms.google.com/tadarus-form-5',
      description: 'نموذج التقديم لبرنامج تدارس للصف الثاني الثانوي',
      color: 'fuchsia',
      status: 'متاح',
      deadline: '2025-12-15',
      seats: 20
    },
    {
      id: 6,
      class: 'الصف الثالث الثانوي',
      classEn: 'Grade 12',
      formLink: 'https://forms.google.com/tadarus-form-6',
      description: 'نموذج التقديم لبرنامج تدارس للصف الثالث الثانوي',
      color: 'pink',
      status: 'متاح',
      deadline: '2025-12-15',
      seats: 20
    }
  ];

  const programFeatures = [
    'تعليم منهجي للقرآن الكريم',
    'حلقات تحفيظ مع معلمين مؤهلين',
    'مراجعة وتسميع دوري',
    'شهادات تقدير للمتميزين'
  ];

  const requiredDocuments = [
    'صورة شخصية حديثة',
    'صورة بطاقة الطالب',
    'موافقة ولي الأمر',
    'إثبات الالتحاق بالمدرسة'
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/forms" className="text-blue-600 hover:underline">
            النماذج
          </Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">تدارس</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/forms"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة للنماذج</span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">📚</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                برنامج تدارس
              </h1>
              <p className="text-white/90 text-lg">
                التقديم لبرنامج تدارس لحفظ القرآن الكريم - اختر صفك الدراسي
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Program Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Program Features */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <Award className="text-blue-600" size={28} />
              مميزات البرنامج
            </h2>
            <div className="space-y-3">
              {programFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/80 p-4 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
              <BookOpen className="text-purple-600" size={28} />
              المستندات المطلوبة
            </h2>
            <div className="space-y-3">
              {requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/80 p-4 rounded-lg">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">{doc}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-900 text-sm">
                <strong>تنبيه:</strong> يجب رفع جميع المستندات بصيغة PDF أو صور واضحة. حجم الملف الواحد لا يتجاوز 5 MB.
              </p>
            </div>
          </div>
        </div>

        {/* Forms Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            اختر صفك الدراسي
          </h2>
          <p className="text-gray-600 text-lg">
            اضغط على الصف المناسب لبدء عملية التقديم
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tadarusForms.map((form) => (
            <div
              key={form.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r from-${form.color}-500 to-${form.color}-600 p-6 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {form.class}
                  </h3>
                  <p className="text-white/80 text-sm">{form.classEn}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[60px]">
                  {form.description}
                </p>

                {/* Status, Deadline & Seats */}
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-${form.color}-500 rounded-full animate-pulse`}></div>
                      <span className={`text-${form.color}-600 font-medium text-sm`}>
                        {form.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Clock size={14} />
                      <span>{form.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <Users size={16} className="text-gray-600" />
                    <span className="text-gray-700 text-sm">
                      <strong>{form.seats}</strong> مقعد متاح
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={form.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 bg-gradient-to-r from-${form.color}-500 to-${form.color}-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium group-hover:scale-105 transform`}
                >
                  <span>ملء النموذج</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">برنامج متميز</h3>
            <p className="text-gray-600 text-sm">
              برنامج معتمد لتحفيظ القرآن الكريم
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-indigo-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">معلمون مؤهلون</h3>
            <p className="text-gray-600 text-sm">
              مدرسون متخصصون في تحفيظ القرآن
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">مجموعات صغيرة</h3>
            <p className="text-gray-600 text-sm">
              حلقات محدودة العدد لضمان الجودة
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl p-10 text-center shadow-xl">
          <BookOpen className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل واجهت مشكلة في التقديم؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            نحن هنا لمساعدتك! تواصل معنا للحصول على الدعم في عملية التقديم
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل للمساعدة
          </Link>
        </div>
      </div>
    </div>
  );
}