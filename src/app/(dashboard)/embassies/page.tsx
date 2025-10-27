'use client';

import { Globe, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function EmbassiesPage() {
  // Embassy data with Google Maps coordinates
  const embassies = [
    {
      id: 1,
      country: 'السعودية',
      flagEmoji: '🇸🇦',
      name: 'سفارة المملكة العربية السعودية',
      address: 'شارع الجامعة الدولية، المعادي، القاهرة',
      phone: '+20 2 3456 7890',
      email: 'cairo@mofa.gov.sa',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saudi+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'جوازات سفر', 'تصديقات']
    },
    {
      id: 2,
      country: 'الإمارات',
      flagEmoji: '🇦🇪',
      name: 'سفارة دولة الإمارات العربية المتحدة',
      address: 'شارع النيل، الدقي، الجيزة',
      phone: '+20 2 3456 7891',
      email: 'cairo@mofaic.gov.ae',
      hours: 'الأحد - الخميس: 9 صباحاً - 2 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=UAE+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'توثيق مستندات', 'خدمات قنصلية']
    },
    {
      id: 3,
      country: 'الكويت',
      flagEmoji: '🇰🇼',
      name: 'سفارة دولة الكويت',
      address: 'شارع الجيزة، الدقي، الجيزة',
      phone: '+20 2 3456 7892',
      email: 'cairoembassy@mofa.gov.kw',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kuwait+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'جوازات سفر', 'شهادات']
    },
    {
      id: 4,
      country: 'قطر',
      flagEmoji: '🇶🇦',
      name: 'سفارة دولة قطر',
      address: 'شارع الثورة، مصر الجديدة، القاهرة',
      phone: '+20 2 3456 7893',
      email: 'cairo@mofa.gov.qa',
      hours: 'الأحد - الخميس: 8:30 صباحاً - 2:30 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'خدمات قنصلية', 'توثيق']
    },
    {
      id: 5,
      country: 'البحرين',
      flagEmoji: '🇧🇭',
      name: 'سفارة مملكة البحرين',
      address: 'شارع الميرغني، مصر الجديدة، القاهرة',
      phone: '+20 2 3456 7894',
      email: 'cairo@mofa.gov.bh',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'جوازات سفر', 'توثيق مستندات']
    },
    {
      id: 6,
      country: 'سلطنة عمان',
      flagEmoji: '🇴🇲',
      name: 'سفارة سلطنة عمان',
      address: 'شارع الأهرام، الدقي، الجيزة',
      phone: '+20 2 3456 7895',
      email: 'cairo@mofa.gov.om',
      hours: 'الأحد - الخميس: 9 صباحاً - 2 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oman+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'خدمات قنصلية']
    },
    {
      id: 7,
      country: 'الأردن',
      flagEmoji: '🇯🇴',
      name: 'سفارة المملكة الأردنية الهاشمية',
      address: 'شارع الدقي، الدقي، الجيزة',
      phone: '+20 2 3456 7896',
      email: 'cairo@mfa.gov.jo',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jordan+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'جوازات سفر', 'شهادات']
    },
    {
      id: 8,
      country: 'فلسطين',
      flagEmoji: '🇵🇸',
      name: 'سفارة دولة فلسطين',
      address: 'شارع النيل، الزمالك، القاهرة',
      phone: '+20 2 3456 7897',
      email: 'cairo@plo.ps',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Palestine+Embassy+Cairo+Egypt',
      services: ['وثائق سفر', 'خدمات قنصلية', 'توثيق']
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 py-12 px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-reverse space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Globe className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">السفارات</h1>
              <p className="text-white/90 text-sm md:text-base">دليل شامل لجميع السفارات ومعلومات الاتصال</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-reverse space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">ℹ</span>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">معلومات مهمة</h4>
              <p className="text-blue-800 text-sm">
                يُنصح بالاتصال بالسفارة قبل الزيارة للتأكد من المواعيد والمستندات المطلوبة. بعض الخدمات قد تتطلب حجز موعد مسبق.
              </p>
            </div>
          </div>
        </div>

        {/* Embassies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {embassies.map((embassy) => (
            <div 
              key={embassy.id} 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-reverse space-x-3">
                  <div className="text-4xl">{embassy.flagEmoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{embassy.name}</h3>
                    <p className="text-emerald-600 font-semibold">{embassy.country}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                {/* Phone */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <Phone className="text-emerald-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">رقم الهاتف</p>
                      <p className="text-gray-800 font-semibold">{embassy.phone}</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${embassy.phone}`}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-reverse space-x-2 font-medium"
                  >
                    <Phone size={18} />
                    <span>اتصل الآن</span>
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">البريد الإلكتروني</p>
                      <p className="text-gray-800 font-semibold">{embassy.email}</p>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${embassy.email}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-reverse space-x-2 font-medium"
                  >
                    <Mail size={18} />
                    <span>إرسال</span>
                  </a>
                </div>

                {/* Address with Google Maps */}
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-reverse space-x-3 mb-3">
                    <MapPin className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-0.5">العنوان</p>
                      <p className="text-gray-800 font-semibold">{embassy.address}</p>
                    </div>
                  </div>
                  <a 
                    href={embassy.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-reverse space-x-2 font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>فتح في خرائط Google</span>
                  </a>
                </div>

                {/* Working Hours */}
                <div className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="text-purple-600" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">ساعات العمل</p>
                    <p className="text-gray-800 font-semibold">{embassy.hours}</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600 mb-2 font-semibold">الخدمات المتاحة:</p>
                <div className="flex flex-wrap gap-2">
                  {embassy.services.map((service, idx) => (
                    <span 
                      key={idx}
                      className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-8 text-center">
          <Globe className="mx-auto mb-4 text-white" size={48} />
          <h3 className="text-2xl font-bold text-white mb-3">هل تحتاج مساعدة؟</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            إذا كنت بحاجة إلى معلومات إضافية أو مساعدة في التواصل مع أي سفارة، نحن هنا للمساعدة
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
}