'use client';

import Link from 'next/link';
import { Globe, Phone, Mail, MapPin, Clock, ArrowLeft, Info } from 'lucide-react';

export default function EmbassiesPage() {
  // Embassy data
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
      services: ['تأشيرات', 'جوازات سفر', 'تصديقات'],
      description: 'تقدم السفارة خدمات قنصلية شاملة للمواطنين السعوديين والمقيمين في مصر'
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
      services: ['تأشيرات', 'توثيق مستندات', 'خدمات قنصلية'],
      description: 'توفر السفارة خدمات متنوعة للمواطنين الإماراتيين والزوار'
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
      services: ['تأشيرات', 'جوازات سفر', 'شهادات'],
      description: 'سفارة دولة الكويت تخدم المواطنين الكويتيين في جمهورية مصر العربية'
    },
    {
      id: 4,
      country: 'قطر',
      flagEmoji: '🇶🇦',
      name: 'سفارة دولة قطر',
      address: 'شارع الثورة، مصر الجديدة، القاهرة',
      phone: '+20 2 3456 7893',
      email: 'cairo@mofa.gov.qa',
      hours: 'الأحد - الخميس: 9 صباحاً - 2 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Qatar+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'خدمات قنصلية', 'توثيق'],
      description: 'تقدم السفارة القطرية خدمات قنصلية متكاملة'
    },
    {
      id: 5,
      country: 'الأردن',
      flagEmoji: '🇯🇴',
      name: 'سفارة المملكة الأردنية الهاشمية',
      address: 'شارع الدقي، الجيزة',
      phone: '+20 2 3456 7894',
      email: 'cairo@mfa.gov.jo',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jordan+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'جوازات سفر', 'توثيق مستندات'],
      description: 'سفارة المملكة الأردنية الهاشمية في القاهرة'
    },
    {
      id: 6,
      country: 'البحرين',
      flagEmoji: '🇧🇭',
      name: 'سفارة مملكة البحرين',
      address: 'شارع الجامعة، المنيل، القاهرة',
      phone: '+20 2 3456 7895',
      email: 'cairo@mofa.gov.bh',
      hours: 'الأحد - الخميس: 9 صباحاً - 2 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bahrain+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'خدمات قنصلية', 'تصديقات'],
      description: 'سفارة مملكة البحرين تقدم خدمات شاملة للمواطنين البحرينيين'
    },
    {
      id: 7,
      country: 'عُمان',
      flagEmoji: '🇴🇲',
      name: 'سفارة سلطنة عُمان',
      address: 'شارع الدقي، الدقي، الجيزة',
      phone: '+20 2 3456 7896',
      email: 'cairo@mofa.gov.om',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oman+Embassy+Cairo+Egypt',
      services: ['تأشيرات', 'جوازات سفر', 'خدمات قنصلية'],
      description: 'سفارة سلطنة عُمان في جمهورية مصر العربية'
    },
    {
      id: 8,
      country: 'فلسطين',
      flagEmoji: '🇵🇸',
      name: 'سفارة دولة فلسطين',
      address: 'شارع الجيزة، المهندسين، الجيزة',
      phone: '+20 2 3456 7897',
      email: 'cairo@plo.ps',
      hours: 'الأحد - الخميس: 9 صباحاً - 3 مساءً',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Palestine+Embassy+Cairo+Egypt',
      services: ['وثائق سفر', 'خدمات قنصلية', 'توثيق'],
      description: 'سفارة دولة فلسطين تخدم الشعب الفلسطيني في مصر'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Globe className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            السفارات
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            دليل شامل لجميع السفارات ومعلومات الاتصال والخدمات
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Banner */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">معلومات مهمة</h4>
              <p className="text-blue-800 leading-relaxed">
                يُنصح بالاتصال بالسفارة قبل الزيارة للتأكد من المواعيد والمستندات المطلوبة. 
                بعض الخدمات قد تتطلب حجز موعد مسبق.
              </p>
            </div>
          </div>
        </div>

        {/* Embassies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {embassies.map((embassy) => (
            <Link
              key={embassy.id}
              href={`/embassies/${embassy.id}`}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="text-7xl mb-3 relative z-10">{embassy.flagEmoji}</div>
                <h3 className="text-xl font-bold text-white relative z-10 drop-shadow-lg">
                  {embassy.country}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-white">
                <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {embassy.name}
                </h4>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="line-clamp-1">{embassy.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>{embassy.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="line-clamp-1">{embassy.hours}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {embassy.services.slice(0, 2).map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                    {embassy.services.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{embassy.services.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-emerald-600 font-bold group-hover:gap-2 flex items-center gap-1 transition-all">
                    <span>عرض التفاصيل</span>
                    <ArrowLeft size={18} className="group-hover:translate-x-[-4px] transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}










