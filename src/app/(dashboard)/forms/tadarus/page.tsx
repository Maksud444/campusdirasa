'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, ExternalLink, ArrowRight, CheckCircle, Clock, ChevronLeft, Calendar, AlertCircle, Lock, Unlock } from 'lucide-react';

export default function TadarusFormsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const tadarusForms = [
    {
      id: 1,
      class: 'متقدم ثاني',
      classEn: 'Advanced Level 2',
      formLink: 'https://forms.google.com/tadarus-mutaqadim-2',
      description: 'نموذج التقديم لبرنامج تدارس للمستوى المتقدم الثاني',
      colorClass: 'emerald',
      bgGradient: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      bgLight: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-300',
      ringColor: 'ring-emerald-500',
      allowedDays: ['الأحد', 'الاثنين'],
      dayNumbers: [0, 1],
      startTime: '09:00',
      endTime: '17:00',
      requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
    },
    {
      id: 2,
      class: 'متقدم أول',
      classEn: 'Advanced Level 1',
      formLink: 'https://forms.google.com/tadarus-mutaqadim-1',
      description: 'نموذج التقديم لبرنامج تدارس للمستوى المتقدم الأول',
      colorClass: 'green',
      bgGradient: 'bg-gradient-to-r from-green-500 to-green-600',
      bgLight: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-300',
      ringColor: 'ring-green-500',
      allowedDays: ['الثلاثاء', 'الأربعاء'],
      dayNumbers: [2, 3],
      startTime: '09:00',
      endTime: '17:00',
      requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
    },
    {
      id: 3,
      class: 'متوسط ثاني',
      classEn: 'Intermediate Level 2',
      formLink: 'https://forms.google.com/tadarus-mutawasit-2',
      description: 'نموذج التقديم لبرنامج تدارس للمستوى المتوسط الثاني',
      colorClass: 'teal',
      bgGradient: 'bg-gradient-to-r from-teal-500 to-teal-600',
      bgLight: 'bg-teal-50',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-300',
      ringColor: 'ring-teal-500',
      allowedDays: ['الخميس', 'الجمعة'],
      dayNumbers: [4, 5],
      startTime: '09:00',
      endTime: '17:00',
      requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
    },
    {
      id: 4,
      class: 'متوسط أول',
      classEn: 'Intermediate Level 1',
      formLink: 'https://forms.google.com/tadarus-mutawasit-1',
      description: 'نموذج التقديم لبرنامج تدارس للمستوى المتوسط الأول',
      colorClass: 'blue',
      bgGradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-300',
      ringColor: 'ring-blue-500',
      allowedDays: ['السبت', 'الأحد'],
      dayNumbers: [6, 0],
      startTime: '09:00',
      endTime: '17:00',
      requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
    },
    {
      id: 5,
      class: 'مبتدئ ثاني',
      classEn: 'Beginner Level 2',
      formLink: 'https://forms.google.com/tadarus-mubtadi-2',
      description: 'نموذج التقديم لبرنامج تدارس للمستوى المبتدئ الثاني',
      colorClass: 'indigo',
      bgGradient: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      bgLight: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      borderColor: 'border-indigo-300',
      ringColor: 'ring-indigo-500',
      allowedDays: ['الاثنين', 'الثلاثاء'],
      dayNumbers: [1, 2],
      startTime: '09:00',
      endTime: '17:00',
      requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
    },
    {
      id: 6,
      class: 'مبتدئ أول',
      classEn: 'Beginner Level 1',
      formLink: 'https://forms.google.com/tadarus-mubtadi-1',
      description: 'نموذج التقديم لبرنامج تدارس للمستوى المبتدئ الأول',
      colorClass: 'purple',
      bgGradient: 'bg-gradient-to-r from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-300',
      ringColor: 'ring-purple-500',
      allowedDays: ['الأربعاء', 'الخميس'],
      dayNumbers: [3, 4],
      startTime: '09:00',
      endTime: '17:00',
      requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
    }
  ];

  const isFormAvailable = (form: typeof tadarusForms[0]) => {
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const [startHour, startMinute] = form.startTime.split(':').map(Number);
    const [endHour, endMinute] = form.endTime.split(':').map(Number);
    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;

    const isDayAllowed = form.dayNumbers.includes(currentDay);
    const isTimeAllowed = currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;

    return isDayAllowed && isTimeAllowed;
  };

  const getArabicDayName = (dayNumber: number) => {
    const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    return days[dayNumber];
  };

  const currentDayName = getArabicDayName(currentDate.getDay());

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

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-6xl">📚</div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  برنامج تدارس
                </h1>
                <p className="text-white/90 text-lg">
                  نماذج التقديم لبرنامج تدارس - متاح في أيام محددة
                </p>
              </div>
            </div>

            {/* Current Date & Time Display */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-white text-center">
                <div className="text-sm opacity-90 mb-1">اليوم والتاريخ</div>
                <div className="text-lg font-bold">{currentDayName}</div>
                <div className="text-sm font-mono">
                  {currentDate.toLocaleDateString('ar-EG')}
                </div>
                <div className="text-2xl font-bold font-mono mt-2">
                  {currentDate.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Instructions Card */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
            <AlertCircle className="text-blue-600" size={28} />
            تعليمات مهمة
          </h2>
          <div className="space-y-3 text-blue-900">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <p>كل صف له أيام محددة للتقديم - يرجى التحقق من الأيام المتاحة أسفله</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <p>النموذج يفتح فقط في الأيام والأوقات المحددة (من 9 صباحاً إلى 5 مساءً)</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <p>يجب إدخال: <strong>رقم الجواز + الاسم الكامل + اسم الصف</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <p>تأكد من صحة البيانات قبل الإرسال - لا يمكن التعديل بعد الإرسال</p>
            </div>
          </div>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tadarusForms.map((form) => {
            const isAvailable = isFormAvailable(form);
            
            return (
              <div
                key={form.id}
                className={`bg-white rounded-xl shadow-lg transition-all border-2 overflow-hidden ${
                  isAvailable 
                    ? 'border-green-400 shadow-green-200' 
                    : 'border-gray-200 opacity-80'
                }`}
              >
                {/* Card Header */}
                <div className={`${form.bgGradient} p-6 text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  
                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3">
                    {isAvailable ? (
                      <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                        <Unlock size={14} />
                        <span>متاح الآن</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <Lock size={14} />
                        <span>مغلق</span>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 mt-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {form.class}
                    </h3>
                    <p className="text-white/90 text-sm">{form.classEn}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[50px]">
                    {form.description}
                  </p>

                  {/* Allowed Days */}
                  <div className={`mb-4 p-4 ${form.bgLight} rounded-lg border ${form.borderColor}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className={form.textColor} size={18} />
                      <h4 className={`font-bold ${form.textColor} text-sm`}>الأيام المتاحة:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {form.allowedDays.map((day, idx) => {
                        const isDayToday = form.dayNumbers[idx] === currentDate.getDay();
                        return (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                              isDayToday
                                ? `${form.bgLight} ${form.textColor} ring-2 ${form.ringColor}`
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {day}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-gray-600 text-xs">
                      <Clock size={14} />
                      <span className="font-medium">من {form.startTime} إلى {form.endTime}</span>
                    </div>
                  </div>

                  {/* Required Info */}
                  <div className="mb-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-bold text-yellow-900 text-sm mb-2">البيانات المطلوبة:</h4>
                    <ul className="space-y-1.5">
                      {form.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-yellow-800 text-xs">
                          <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                          <span className="font-medium">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  {isAvailable ? (
                    <a
                      href={form.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 ${form.bgGradient} text-white px-6 py-3 rounded-lg hover:shadow-xl transition-all font-bold transform hover:scale-105`}
                    >
                      <span>ملء النموذج</span>
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-2 bg-gray-300 text-gray-500 px-6 py-3 rounded-lg cursor-not-allowed font-bold opacity-60"
                    >
                      <Lock size={18} />
                      <span>النموذج مغلق حالياً</span>
                    </button>
                  )}

                  {/* Next Available Info */}
                  {!isAvailable && (
                    <div className="mt-3 text-center p-2 bg-gray-50 rounded">
                      <p className="text-xs text-gray-600 font-medium">
                        سيفتح في: <span className={form.textColor}>{form.allowedDays.join(' أو ')}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl p-10 text-center shadow-2xl">
          <BookOpen className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تحتاج مساعدة؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت أي مشكلة في ملء النموذج أو لديك استفسار، تواصل معنا
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}