'use client';

import Link from 'next/link';
import { Hospital, MapPin, Phone, Clock, Users, Star, ChevronLeft, Stethoscope } from 'lucide-react';

export default function HospitalsPage() {
  // হাসপাতালের ডাটা - প্রতিটি হাসপাতালের জন্য ID সহ আলাদা পেজ থাকবে
  const hospitals = [
    {
      id: 1,
      name: 'مستشفى القاهرة الجامعي',
      nameEn: 'Cairo University Hospital',
      location: 'المنيل، القاهرة',
      phone: '+20 2 3456 7890',
      doctors: 45,
      specialties: ['جراحة', 'باطنة', 'أطفال', 'نساء وولادة'],
      rating: 4.5,
      image: '🏥',
      color: 'emerald',
      workingHours: 'على مدار 24 ساعة',
      description: 'أحد أعرق المستشفيات الجامعية في مصر، يقدم خدمات طبية متميزة'
    },
    {
      id: 2,
      name: 'مستشفى عين شمس التخصصي',
      nameEn: 'Ain Shams Specialized Hospital',
      location: 'العباسية، القاهرة',
      phone: '+20 2 3456 7891',
      doctors: 38,
      specialties: ['قلب', 'عظام', 'أورام', 'جلدية'],
      rating: 4.3,
      image: '🏥',
      color: 'green',
      workingHours: 'على مدار 24 ساعة',
      description: 'مستشفى تخصصي يقدم خدمات طبية متقدمة'
    },
    {
      id: 3,
      name: 'مستشفى الأزهر الجامعي',
      nameEn: 'Al-Azhar University Hospital',
      location: 'نصر سيتي، القاهرة',
      phone: '+20 2 3456 7892',
      doctors: 52,
      specialties: ['جراحة عامة', 'مخ وأعصاب', 'عيون', 'أنف وأذن'],
      rating: 4.7,
      image: '🏥',
      color: 'teal',
      workingHours: 'على مدار 24 ساعة',
      description: 'مستشفى جامعي متميز بخدماته الشاملة'
    },
    {
      id: 4,
      name: 'مستشفى الجلاء العسكري',
      nameEn: 'Galaa Military Hospital',
      location: 'المعادي، القاهرة',
      phone: '+20 2 3456 7893',
      doctors: 40,
      specialties: ['جراحة قلب', 'كلى', 'طوارئ', 'عناية مركزة'],
      rating: 4.6,
      image: '🏥',
      color: 'blue',
      workingHours: 'على مدار 24 ساعة',
      description: 'مستشفى عسكري بمعايير عالمية'
    },
    {
      id: 5,
      name: 'مستشفى دار الشفاء',
      nameEn: 'Dar Al Shifa Hospital',
      location: 'مدينة نصر، القاهرة',
      phone: '+20 2 3456 7894',
      doctors: 35,
      specialties: ['نساء وولادة', 'أطفال', 'تطعيمات', 'رعاية أمومة'],
      rating: 4.4,
      image: '🏥',
      color: 'purple',
      workingHours: 'الأحد - الخميس: 8 ص - 8 م',
      description: 'متخصص في رعاية الأمومة والطفولة'
    },
    {
      id: 6,
      name: 'مستشفى السلام الدولي',
      nameEn: 'Al Salam International Hospital',
      location: 'المعادي، القاهرة',
      phone: '+20 2 3456 7895',
      doctors: 48,
      specialties: ['جراحة تجميل', 'أسنان', 'عيون', 'ليزر'],
      rating: 4.8,
      image: '🏥',
      color: 'indigo',
      workingHours: 'الأحد - الخميس: 9 ص - 9 م',
      description: 'مستشفى دولي بأحدث التقنيات'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* পেজ হেডার */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Hospital className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                المستشفيات
              </h1>
              <p className="text-white/90 text-lg mt-2">
                دليل شامل للمستشفيات والأطباء المتخصصين
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* মূল কন্টেন্ট */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* তথ্য ব্যানার */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-2">معلومات مهمة</h3>
              <p className="text-blue-800">
                اضغط على أي مستشفى لعرض قائمة الأطباء المتخصصين وأرقام التواصل والمواعيد المتاحة.
              </p>
            </div>
          </div>
        </div>

        {/* পরিসংখ্যান */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Hospital className="text-emerald-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">{hospitals.length}</div>
            <div className="text-gray-600 text-sm">مستشفى</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Users className="text-green-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">
              {hospitals.reduce((sum, h) => sum + h.doctors, 0)}
            </div>
            <div className="text-gray-600 text-sm">طبيب</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Star className="text-yellow-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">4.6</div>
            <div className="text-gray-600 text-sm">متوسط التقييم</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="text-blue-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">24/7</div>
            <div className="text-gray-600 text-sm">خدمة طوارئ</div>
          </div>
        </div>

        {/* হাসপাতালের গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Link
              key={hospital.id}
              href={`/hospitals/${hospital.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* হাসপাতাল আইকন/ইমেজ */}
              <div className={`bg-gradient-to-br from-${hospital.color}-500 to-${hospital.color}-600 p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="text-6xl mb-3 relative z-10">{hospital.image}</div>
                <h3 className="text-2xl font-bold text-white mb-1 relative z-10">
                  {hospital.name}
                </h3>
                <p className="text-white/80 text-sm relative z-10">{hospital.nameEn}</p>
              </div>

              {/* হাসপাতালের তথ্য */}
              <div className="p-6">
                {/* রেটিং */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={18} />
                    <span className="font-bold text-gray-800">{hospital.rating}</span>
                  </div>
                  <div className={`bg-${hospital.color}-100 text-${hospital.color}-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                    <Stethoscope size={14} />
                    <span>{hospital.doctors} طبيب</span>
                  </div>
                </div>

                {/* বিবরণ */}
                <p className="text-gray-600 text-sm mb-4 min-h-[40px]">
                  {hospital.description}
                </p>

                {/* অবস্থান */}
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">{hospital.location}</span>
                </div>

                {/* ফোন */}
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-gray-400 flex-shrink-0" size={18} />
                  <span className="text-gray-700 font-mono text-sm">{hospital.phone}</span>
                </div>

                {/* কাজের সময় */}
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-gray-400 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm">{hospital.workingHours}</span>
                </div>

                {/* বিশেষত্ব */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">التخصصات:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className={`bg-${hospital.color}-50 text-${hospital.color}-700 px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {spec}
                      </span>
                    ))}
                    {hospital.specialties.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{hospital.specialties.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* ডিটেইল দেখার বাটন */}
                <div className={`flex items-center justify-between bg-${hospital.color}-50 text-${hospital.color}-700 px-4 py-3 rounded-lg group-hover:bg-${hospital.color}-100 transition-colors`}>
                  <span className="font-medium">عرض الأطباء والتفاصيل</span>
                  <ChevronLeft className="group-hover:translate-x-[-4px] transition-transform" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* হেল্প সেকশন */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-xl">
          <Hospital className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تحتاج مساعدة في اختيار المستشفى؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            تواصل معنا للحصول على استشارة مجانية واختيار أفضل مستشفى يناسب احتياجاتك
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




