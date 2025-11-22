'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, ExternalLink, ArrowRight, CheckCircle, Clock, ChevronLeft, Calendar, AlertCircle, Lock, Unlock } from 'lucide-react';

export default function IqamaVerificationPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  // Single form configuration
  const iqamaForm = {
    title: 'تصديق الإقامة',
    titleEn: 'Residence Verification',
    description: 'نموذج تصديق الإقامة لجميع الصفوف - متاح يوم الخميس من 8 صباحاً إلى 10 صباحاً',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc-ZNVN8dpW4R3c9T-XppkfdSIXRL-Pfi_CAs3MHJfZwAQK9w/viewform',
    bgGradient: 'bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]',
    allowedDay: 'الخميس', // Thursday
    dayNumber: 4, // Thursday (0=Sunday in JS)
    startTime: '08:00',
    endTime: '10:00',
    requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
  };

  // Check if form is available
  const isFormAvailable = () => {
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const [startHour, startMinute] = iqamaForm.startTime.split(':').map(Number);
    const [endHour, endMinute] = iqamaForm.endTime.split(':').map(Number);
    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;

    const isDayAllowed = currentDay === iqamaForm.dayNumber;
    const isTimeAllowed = currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;

    return isDayAllowed && isTimeAllowed;
  };

  const getArabicDayName = (dayNumber: number) => {
    const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    return days[dayNumber];
  };

  const currentDayName = getArabicDayName(currentDate.getDay());
  const isAvailable = isFormAvailable();

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/forms" className="text-[#00d2ff] hover:underline">النماذج</Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">تصديق الإقامة</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
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
              <div className="text-6xl">📄</div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">تصديق الإقامة</h1>
                <p className="text-white/90 text-lg">
                  نموذج تصديق الإقامة لجميع الصفوف - يفتح يوم الخميس من 8 صباحاً إلى 10 صباحاً
                </p>
              </div>
            </div>

            {/* Current Date & Time Display */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-white text-center">
                <div className="text-sm opacity-90 mb-1">اليوم والتاريخ</div>
                <div className="text-lg font-bold">{currentDayName}</div>
                <div className="text-sm font-mono">{currentDate.toLocaleDateString('ar-EG')}</div>
                <div className="text-2xl font-bold font-mono mt-2">
                  {currentDate.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <AlertCircle className="text-[#00d2ff]" size={28} />
            تعليمات مهمة
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
              <p>النموذج متاح فقط يوم <strong className="text-[#00d2ff]">الخميس</strong> من <strong>8 صباحاً إلى 10 صباحاً</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
              <p>النموذج مخصص لجميع الصفوف (جميع المستويات)</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
              <p>يجب إدخال: <strong>رقم الجواز + الاسم الكامل + اسم الصف</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
              <p>تأكد من صحة البيانات قبل الإرسال - لا يمكن التعديل بعد الإرسال</p>
            </div>
          </div>
        </div>

        {/* Single Form Card */}
        <div
          className={`bg-white rounded-2xl shadow-2xl transition-all border-2 overflow-hidden ${
            isAvailable ? 'border-[#00d2ff] shadow-cyan-200' : 'border-gray-200 opacity-80'
          }`}
        >
          {/* Card Header */}
          <div className={`${iqamaForm.bgGradient} p-8 text-center relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            
            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              {isAvailable ? (
                <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-xl">
                  <Unlock size={18} />
                  <span>متاح الآن</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                  <Lock size={18} />
                  <span>مغلق</span>
                </div>
              )}
            </div>

            <div className="relative z-10 mt-4">
              <div className="text-6xl mb-4">📋</div>
              <h2 className="text-3xl font-bold text-white mb-2">{iqamaForm.title}</h2>
              <p className="text-white/90 text-lg mb-1">{iqamaForm.titleEn}</p>
              <p className="text-white/80 text-sm">لجميع الصفوف</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {iqamaForm.description}
            </p>

            {/* Available Day & Time */}
            <div className="mb-6 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-[#00d2ff]" size={24} />
                <h3 className="font-bold text-[#00d2ff] text-lg">موعد فتح النموذج</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-lg text-base font-bold ${
                    currentDate.getDay() === iqamaForm.dayNumber
                      ? 'bg-[#00d2ff] text-white ring-4 ring-cyan-300'
                      : 'bg-white text-gray-700 border-2 border-gray-200'
                  }`}>
                    {iqamaForm.allowedDay}
                  </div>
                  {currentDate.getDay() === iqamaForm.dayNumber && (
                    <span className="text-[#00d2ff] font-bold text-sm animate-pulse">← اليوم</span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Clock size={20} className="text-[#00d2ff]" />
                  <span className="font-bold text-lg">
                    من {iqamaForm.startTime} صباحاً إلى {iqamaForm.endTime} صباحاً
                  </span>
                </div>
              </div>
            </div>

            {/* Required Data */}
            <div className="mb-6 p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <h3 className="font-bold text-yellow-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle size={22} />
                البيانات المطلوبة
              </h3>
              <ul className="space-y-2">
                {iqamaForm.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-yellow-800">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="font-bold text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Button */}
            {isAvailable ? (
              <a
                href={iqamaForm.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 ${iqamaForm.bgGradient} text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all font-bold text-lg transform hover:scale-105`}
              >
                <span>ملء النموذج الآن</span>
                <ExternalLink size={24} />
              </a>
            ) : (
              <button
                disabled
                className="w-full flex items-center justify-center gap-3 bg-gray-300 text-gray-500 px-8 py-4 rounded-xl cursor-not-allowed font-bold text-lg opacity-60"
              >
                <Lock size={24} />
                <span>النموذج مغلق حالياً</span>
              </button>
            )}

            {/* Next Opening Message */}
            {!isAvailable && (
              <div className="mt-4 text-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                <p className="text-gray-700 font-bold text-base">
                  سيفتح النموذج يوم <span className="text-[#00d2ff]">{iqamaForm.allowedDay}</span> القادم
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  من {iqamaForm.startTime} صباحاً إلى {iqamaForm.endTime} صباحاً
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Feedback CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-2xl">
          <FileText className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">هل لديك أي استفسار؟</h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت أي مشكلة في ملء النموذج أو لديك سؤال، تواصل معنا
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