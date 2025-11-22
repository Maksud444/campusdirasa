'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock, MapPin, User, BookOpen, ExternalLink } from 'lucide-react';

export default function LectureDetailsPage() {
  // Lecture data
  const lecture = {
    id: 1,
    sheikh: "أ.د. رفعت فوزي عبدالمطلب",
    topic: "حديث – بلوغ المرام من أدلة الأحكام",
    status: "free",
    fee: "مجاني",
    category: "محاضري",
    date: "2025-11-25",
    timeFrom: "بعد المغرب",
    timeTo: "غير محدد",
    place: "دار الإمام الليث بن سعد، أمام مسجد الزاوية، خلف مقلة بركات، الدراسة",
    imageUrl: "https://azharguideline.com/mohadhara/maram.jpeg",
    mapsUrl: "https://maps.app.goo.gl/G3XR5qETsik89idu9",
    details: "دورة مكثفة لكتاب «بلوغ المرام من أدلة الأحكام» مع الإجازة بالسند المتصل. تُعقد كل ثلاثاء بعد المغرب، حضورياً أو Online. للتسجيل والاستفسار: التواصل عبر الوسائل الرسمية للدار قبل الحضور. لا تفوّت فرصة سماع حديث النبي ﷺ بإسناد متصل."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة للرئيسية</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              تفاصيل المحاضرة
            </h1>
            <p className="text-white/80 text-lg">معلومات كاملة عن المحاضرة والموقع</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
          {/* Image Section */}
          <div className="relative h-72 md:h-96 bg-gradient-to-br from-[#0f2027] to-[#2c5364] overflow-hidden">
            <img 
              src={lecture.imageUrl} 
              alt={lecture.topic}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-4 py-2 rounded-full text-base font-bold shadow-xl flex items-center gap-2">
                <span>free</span>
              </span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 right-6 left-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {lecture.topic}
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Sheikh Info */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-full flex items-center justify-center flex-shrink-0">
                <User className="text-white" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">المحاضر</p>
                <h3 className="text-xl font-bold text-gray-800">{lecture.sheikh}</h3>
              </div>
            </div>

            {/* Category */}
            <div className="mb-6 p-4 bg-cyan-50 rounded-xl border border-cyan-200">
              <div className="flex items-center gap-3">
                <BookOpen className="text-[#00d2ff]" size={24} />
                <div>
                  <p className="text-gray-600 text-sm">التصنيف</p>
                  <p className="text-lg font-bold text-[#00d2ff]">{lecture.category}</p>
                </div>
              </div>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Date */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#00d2ff]" size={24} />
                  <div>
                    <p className="text-gray-600 text-sm">التاريخ</p>
                    <p className="text-lg font-bold text-gray-800">{lecture.date}</p>
                  </div>
                </div>
              </div>

              {/* Time */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3">
                  <Clock className="text-purple-600" size={24} />
                  <div>
                    <p className="text-gray-600 text-sm">الوقت</p>
                    <p className="text-lg font-bold text-gray-800">{lecture.timeFrom} - {lecture.timeTo}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-[#00d2ff] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-600 text-sm mb-2">الموقع</p>
                  <p className="text-base font-bold text-gray-800 leading-relaxed">
                    {lecture.place}
                  </p>
                </div>
              </div>

              {/* Maps Button */}
              <a
                href={lecture.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all w-full"
              >
                <MapPin size={20} />
                <span>عرض على الخريطة</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Details Section */}
            <div className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={24} className="text-amber-600" />
                <span>التفاصيل</span>
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {lecture.details}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">ℹ️ معلومات إضافية</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#00d2ff] mt-1">•</span>
              <span>الحضور مجاني للجميع</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d2ff] mt-1">•</span>
              <span>يُفضل التسجيل المسبق</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00d2ff] mt-1">•</span>
              <span>متاح الحضور أونلاين أو حضورياً</span>
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all"
          >
            <ArrowRight size={20} />
            <span>العودة للصفحة الرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
}