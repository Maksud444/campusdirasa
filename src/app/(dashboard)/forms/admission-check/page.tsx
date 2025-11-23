'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, ChevronLeft, ExternalLink, AlertCircle } from 'lucide-react';

export default function AdmissionCheckPage() {
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLScbAArCLIVp4NuX57PyxNjTIkUjE-dysQOz81RbPKUvFmO02Q/viewform?usp=header';

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/forms" className="text-[#00d2ff] hover:underline">النماذج</Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">التحقق من القبول</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/forms" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowRight size={20} />
            <span>العودة للنماذج</span>
          </Link>
          <div className="text-center">
            <div className="text-8xl mb-6">✅</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">التحقق من قبول الطلاب الجدد</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">للتحقق من قبول اسمك في دراسة خاصة</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-cyan-200">
          <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            <div className="relative z-10">
              <div className="text-7xl mb-6">📋</div>
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg leading-relaxed">التحقق من قبول اسمك في دراسة خاصة</h2>
              <p className="text-2xl text-white/95 drop-shadow-md leading-relaxed">قم بتعبئة النموذج للتحقق من قبول طلبك</p>
            </div>
          </div>

          <div className="p-12">
            <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertCircle size={28} className="text-[#00d2ff]" />
                تعليمات التحقق
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00d2ff] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">اضغط على زر التحقق من القبول</h4>
                    <p className="text-gray-700">سيتم فتح نموذج Google Forms</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00d2ff] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">أدخل الاسم الكامل</h4>
                    <p className="text-gray-700">يجب أن يكون الاسم مطابقاً للوثائق الرسمية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00d2ff] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">أدخل رقم الجواز</h4>
                    <p className="text-gray-700">تأكد من صحة رقم الجواز قبل الإرسال</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00d2ff] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">اضغط على إرسال</h4>
                    <p className="text-gray-700">ستظهر النتيجة مباشرة بعد الإرسال</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚠️</div>
                <div>
                  <h4 className="font-bold text-yellow-900 text-lg mb-2">ملاحظة مهمة</h4>
                  <p className="text-yellow-800 leading-relaxed">يرجى التأكد من صحة البيانات المدخلة. الاسم الكامل ورقم الجواز يجب أن يكونا مطابقين للوثائق الرسمية تماماً.</p>
                </div>
              </div>
            </div>

            <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-center py-6 rounded-xl font-bold text-2xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
              <CheckCircle size={32} />
              <span>التحقق من القبول الآن</span>
              <ExternalLink size={28} />
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 text-center">
                <div className="text-4xl mb-3">📝</div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">البيانات المطلوبة</h4>
                <p className="text-gray-600">الاسم الكامل + رقم الجواز</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">النتيجة الفورية</h4>
                <p className="text-gray-600">ستظهر النتيجة مباشرة</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-2xl">
          <CheckCircle className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">هل تحتاج إلى مساعدة؟</h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">إذا واجهت أي مشكلة في التحقق من القبول أو لديك استفسار، تواصل معنا</p>
          <Link href="/feedback" className="inline-block bg-white text-[#00d2ff] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">تواصل معنا</Link>
        </div>
      </div>
    </div>
  );
}