'use client';

import Link from 'next/link';
import { Hospital, MapPin, Phone, Clock, Users, Star, ChevronLeft, Stethoscope } from 'lucide-react';

export default function HospitalsPage() {
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
      color: 'from-[#1e3c72] to-[#2a5298]',
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
      color: 'from-[#00d2ff] to-[#3a7bd5]',
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
      color: 'from-[#4facfe] to-[#00f2fe]',
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
      color: 'from-[#667eea] to-[#764ba2]',
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
      color: 'from-[#1e3c72] to-[#2a5298]',
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
      color: 'from-[#00d2ff] to-[#3a7bd5]',
      workingHours: 'الأحد - الخميس: 9 ص - 9 م',
      description: 'مستشفى دولي بأحدث التقنيات'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero - Same as Homepage */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#00d2ff] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">معلومات مهمة</h3>
              <p className="text-gray-700">
                اضغط على أي مستشفى لعرض قائمة الأطباء المتخصصين وأرقام التواصل والمواعيد المتاحة.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Hospital className="text-[#00d2ff] mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">{hospitals.length}</div>
            <div className="text-gray-600 text-sm">مستشفى</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Users className="text-[#4facfe] mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">
              {hospitals.reduce((sum, h) => sum + h.doctors, 0)}
            </div>
            <div className="text-gray-600 text-sm">طبيب</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="text-[#667eea] mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">24/7</div>
            <div className="text-gray-600 text-sm">خدمة طوارئ</div>
          </div>
        </div>

        {/* Hospitals Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Link
              key={hospital.id}
              href={`/hospitals/${hospital.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 card-3d-tilt"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${hospital.color} p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-700"></div>
                <div className="text-6xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-500">{hospital.image}</div>
                <h3 className="text-2xl font-bold text-white mb-1 relative z-10">
                  {hospital.name}
                </h3>
                <p className="text-white/80 text-sm relative z-10">{hospital.nameEn}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating & Doctors */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={18} />
                    <span className="font-bold text-gray-800">{hospital.rating}</span>
                  </div>
                  <div className="bg-cyan-100 text-[#00d2ff] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Stethoscope size={14} />
                    <span>{hospital.doctors} طبيب</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 min-h-[40px]">
                  {hospital.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">{hospital.location}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-gray-400 flex-shrink-0" size={18} />
                  <span className="text-gray-700 font-mono text-sm">{hospital.phone}</span>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-gray-400 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm">{hospital.workingHours}</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">التخصصات:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-50 text-[#00d2ff] px-3 py-1 rounded-full text-xs font-medium"
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

                {/* Button */}
                <div className="flex items-center justify-between bg-cyan-50 text-[#00d2ff] px-4 py-3 rounded-lg group-hover:bg-cyan-100 transition-colors">
                  <span className="font-medium">عرض الأطباء والتفاصيل</span>
                  <ChevronLeft className="group-hover:translate-x-[-4px] transition-transform" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-xl">
          <Hospital className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل لديك أي نصائح لتحسين عملنا؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            تواصل معنا للحصول على استشارة مجانية واختيار أفضل مستشفى يناسب احتياجاتك
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