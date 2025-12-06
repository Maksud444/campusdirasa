'use client';

import Link from 'next/link';
import { Hospital, MapPin, Building2, ChevronLeft } from 'lucide-react';

export default function HospitalsPage() {
  // এলাকার তালিকা
  const areas = [
    {
      id: 'cairo-center',
      name: 'وسط القاهرة',
      nameEn: 'Cairo Center',
      hospitals: 3,
      color: 'from-[#1e3c72] to-[#2a5298]',
      emoji: '🏙️',
      description: 'المنيل، العباسية، نصر سيتي'
    },
    {
      id: 'maadi',
      name: 'المعادي',
      nameEn: 'Maadi',
      hospitals: 2,
      color: 'from-[#00d2ff] to-[#3a7bd5]',
      emoji: '🌳',
      description: 'كورنيش المعادي، شارع النصر'
    },
    {
      id: 'nasr-city',
      name: 'مدينة نصر',
      nameEn: 'Nasr City',
      hospitals: 1,
      color: 'from-[#4facfe] to-[#00f2fe]',
      emoji: '🏢',
      description: 'شارع عباس العقاد'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
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
                اختر منطقتك لعرض المستشفيات القريبة منك
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
              <h3 className="font-bold text-gray-900 text-lg mb-2">اختر منطقتك</h3>
              <p className="text-gray-700">
                اضغط على المنطقة لعرض جميع المستشفيات المتاحة مع قائمة الأطباء وأرقام التواصل.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Building2 className="text-[#00d2ff] mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">{areas.length}</div>
            <div className="text-gray-600 text-sm">منطقة</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Hospital className="text-[#4facfe] mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">
              {areas.reduce((sum, area) => sum + area.hospitals, 0)}
            </div>
            <div className="text-gray-600 text-sm">مستشفى</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <MapPin className="text-[#667eea] mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">القاهرة</div>
            <div className="text-gray-600 text-sm">المحافظة</div>
          </div>
        </div>

        {/* Areas Grid with 3D Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`/hospitals/${area.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseMove={(e) => {
                if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${area.color} p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-700"></div>
                <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {area.emoji}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10 drop-shadow-lg">
                  {area.name}
                </h3>
                <p className="text-white/90 text-sm relative z-10">{area.nameEn}</p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-gray-400" size={18} />
                  <span className="text-gray-700 text-sm">{area.description}</span>
                </div>

                <div className="bg-cyan-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Hospital className="text-[#00d2ff]" size={24} />
                    <span className="text-2xl font-bold text-gray-800">{area.hospitals}</span>
                    <span className="text-gray-600">مستشفى</span>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-cyan-50 text-[#00d2ff] px-4 py-3 rounded-lg group-hover:bg-cyan-100 transition-colors">
                  <span className="font-medium">عرض المستشفيات</span>
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
            هل لديك استفسار عن المستشفيات؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            تواصل معنا للحصول على معلومات إضافية أو توجيهات للوصول إلى أقرب مستشفى
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-[#00d2ff] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}