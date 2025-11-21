'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, ExternalLink, ArrowRight, CheckCircle, Clock, ChevronLeft, Calendar, AlertCircle, Lock, Unlock } from 'lucide-react';

export default function IqamaVerificationPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const iqamaForms = [
    {
      id: 1,
      class: 'متقدم ثاني',
      classEn: 'Advanced Level 2',
      formLink: 'https://forms.google.com/iqama-mutaqadim-2',
      description: 'نموذج تصديق الإقامة للمستوى المتقدم الثاني',
      bgGradient: 'bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]',
      bgLight: 'bg-cyan-50',
      textColor: 'text-[#00d2ff]',
      borderColor: 'border-cyan-300',
      ringColor: 'ring-cyan-500',
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
      formLink: 'https://forms.google.com/iqama-mutaqadim-1',
      description: 'نموذج تصديق الإقامة للمستوى المتقدم الأول',
      bgGradient: 'bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-300',
      ringColor: 'ring-blue-500',
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
      formLink: 'https://forms.google.com/iqama-mutawasit-2',
      description: 'نموذج تصديق الإقامة للمستوى المتوسط الثاني',
      bgGradient: 'bg-gradient-to-r from-[#0891b2] to-[#06b6d4]',
      bgLight: 'bg-cyan-50',
      textColor: 'text-cyan-700',
      borderColor: 'border-cyan-300',
      ringColor: 'ring-cyan-500',
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
      formLink: 'https://forms.google.com/iqama-mutawasit-1',
      description: 'نموذج تصديق الإقامة للمستوى المتوسط الأول',
      bgGradient: 'bg-gradient-to-r from-[#1e40af] to-[#2563eb]',
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
      formLink: 'https://forms.google.com/iqama-mubtadi-2',
      description: 'نموذج تصديق الإقامة للمستوى المبتدئ الثاني',
      bgGradient: 'bg-gradient-to-r from-[#0c4a6e] to-[#0369a1]',
      bgLight: 'bg-sky-50',
      textColor: 'text-sky-700',
      borderColor: 'border-sky-300',
      ringColor: 'ring-sky-500',
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
      formLink: 'https://forms.google.com/iqama-mubtadi-1',
      description: 'نموذج تصديق الإقامة للمستوى المبتدئ الأول',
      bgGradient: 'bg-gradient-to-r from-[#164e63] to-[#0891b2]',
      bgLight: 'bg-cyan-50',
      textColor: 'text-cyan-700',
      borderColor: 'border-cyan-300',
      ringColor: 'ring-cyan-500',
      allowedDays: ['الأربعاء', 'الخميس'],
      dayNumbers: [3, 4],
      startTime: '09:00',
      endTime: '17:00',
      requirements: ['رقم الجواز', 'الاسم الكامل', 'اسم الصف']
    }
  ];

  const isFormAvailable = (form: typeof iqamaForms[0]) => {
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
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/forms" className="text-[#00d2ff] hover:underline">النماذج</Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">تصديق الإقامة</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/forms" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowRight size={20} />
            <span>العودة للنماذج</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-6xl">📄</div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">تصديق الإقامة</h1>
                <p className="text-white/90 text-lg">نماذج تصديق الإقامة حسب المستوى الدراسي - متاح في أيام محددة</p>
              </div>
            </div>

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

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <AlertCircle className="text-[#00d2ff]" size={28} />
            تعليمات مهمة
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
              <p>كل صف له أيام محددة للتقديم - يرجى التحقق من الأيام المتاحة أسفله</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
              <p>النموذج يفتح فقط في الأيام والأوقات المحددة (من 9 صباحاً إلى 5 مساءً)</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iqamaForms.map((form) => {
            const isAvailable = isFormAvailable(form);
            
            return (
              <div
                key={form.id}
                className={`bg-white rounded-xl shadow-lg transition-all border-2 overflow-hidden ${
                  isAvailable ? 'border-[#00d2ff] shadow-cyan-200' : 'border-gray-200 opacity-80'
                }`}
              >
                <div className={`${form.bgGradient} p-6 text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  
                  <div className="absolute top-3 left-3">
                    {isAvailable ? (
                      <div className="flex items-center gap-1 bg-[#00d2ff] text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                        <Unlock size={14} />
                        <span>متاح الآن</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <Lock size={14} />
                        <span>مغلق</span>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 mt-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{form.class}</h3>
                    <p className="text-white/90 text-sm">{form.classEn}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[50px]">
                    {form.description}
                  </p>

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

        <div className="mt-16 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-2xl">
          <FileText className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">هل لديك أي نصائح لتحسين عملنا؟</h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت أي مشكلة في ملء النموذج أو لديك استفسار، تواصل معنا
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