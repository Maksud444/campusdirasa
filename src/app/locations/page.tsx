'use client';

import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LocationsPage() {
  const importantLocations = [
    {
      id: 1,
      name_en: "Al-Azhar Mosque",
      name_ar: "المسجد الأزهر",
      location_url: "https://maps.app.goo.gl/vzS4oriwvaNmxq2VA?g_st=ic"
    },
    {
      id: 2,
      name_en: "Maahad Dirasah Khassah",
      name_ar: "دراسة خاصة",
      location_url: "https://maps.app.goo.gl/fmMMzu3VXsaoRpmK6?g_st=ic"
    },
    {
      id: 3,
      name_en: "Islamic Missions Institute",
      name_ar: "معهد البعوث الإسلامية",
      location_url: "https://maps.app.goo.gl/qqdvcuWFXKXqMgMCA"
    },
    {
      id: 4,
      name_en: "Idarat Imtihanat",
      name_ar: "إدارة امتحانات الثانوية الأزهرية - استخراج بيان نجاح من الأزهر",
      location_url: "https://maps.app.goo.gl/rUjXqYWHthDgwUQK8"
    },
    {
      id: 5,
      name_en: "Markazud Tatbir",
      name_ar: "مركز تطوير تعليم الطلاب الوافدين والأجانب",
      location_url: "https://maps.app.goo.gl/y1N4MZTb5nkdqcQJ7"
    },
    {
      id: 6,
      name_en: "General Administration of Incoming Students",
      name_ar: "الإدارة العامة للطلاب الوافدين (جوازات)",
      location_url: "https://maps.app.goo.gl/rUjXqYWHthDgwUQK8"
    },
    {
      id: 7,
      name_en: "Presidency of Al-Azhar Institutes Sector",
      name_ar: "رئاسة قطاع المعاهد الأزهرية",
      location_url: "https://maps.app.goo.gl/Yerw85qwHHKVY1q4A"
    },
    {
      id: 8,
      name_en: "Mashiakhet Al Azhar",
      name_ar: "مشيخة الأزهر الشريف",
      location_url: "https://maps.app.goo.gl/2f4xDy7CGpYuRFCd8"
    },
    {
      id: 9,
      name_en: "South Cairo Elementary Court - Zeinhom",
      name_ar: "محكمة جنوب القاهرة الإبتدائية - زينهم",
      location_url: "https://maps.app.goo.gl/vMHvVEWr5P4HRPPR8"
    },
    {
      id: 10,
      name_en: "Al-Zahraa Hospital - Abdou Pasha",
      name_ar: "الزهراء الجامعي",
      location_url: "https://maps.app.goo.gl/A2MLCdZDvb64UMgB9?g_st=atm"
    },
    {
      id: 11,
      name_en: "Al Hussein University Hospital",
      name_ar: "مستشفى الحسين التخصصي",
      location_url: "https://maps.app.goo.gl/7pi6AXYnzFgaAebBA?g_st=atm"
    },
    {
      id: 12,
      name_en: "General Administration of Passports, Immigration and Nationality",
      name_ar: "الإدارة العامة للجوازات والهجرة والجنسية بالعباسية",
      location_url: "https://maps.app.goo.gl/4P3qLCCBWX3w69429"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة للرئيسية</span>
          </Link>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <MapPin className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              مواقع الأماكن الهامة
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              اضغط على أي موقع لفتحه في خرائط جوجل والحصول على الاتجاهات
            </p>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {importantLocations.map((location) => (
            <a
              key={location.id}
              href={location.location_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-5 border-2 border-gray-100 hover:border-[#00d2ff] group flex items-start gap-4"
            >
              {/* Map Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="text-white" size={24} />
              </div>

              {/* Location Name */}
              <div className="flex-1">
                <h3 className="text-gray-800 font-bold text-base leading-relaxed mb-1 group-hover:text-[#00d2ff] transition-colors">
                  {location.name_ar}
                </h3>
                <p className="text-gray-500 text-sm italic">
                  {location.name_en}
                </p>
              </div>

              {/* External Link Icon */}
              <div className="text-gray-400 group-hover:text-[#00d2ff] transition-colors pt-1">
                <ExternalLink size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">ℹ️ معلومات مهمة</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d2ff] mt-1">•</span>
                    <span>جميع المواقع مرتبطة مباشرة بخرائط جوجل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d2ff] mt-1">•</span>
                    <span>الضغط على أي موقع سيفتح التطبيق أو الموقع في نافذة جديدة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d2ff] mt-1">•</span>
                    <span>يمكنك استخدام خرائط جوجل للحصول على الاتجاهات والمسافة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d2ff] mt-1">•</span>
                    <span>تأكد من تشغيل الموقع الجغرافي للحصول على أفضل نتائج</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}