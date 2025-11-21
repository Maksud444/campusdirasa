'use client';

import Link from 'next/link';
import { Globe, Phone, Mail, MapPin, Clock, ArrowLeft, Info } from 'lucide-react';

export default function EmbassiesPage() {
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
      description: 'تقدم السفارة خدمات قنصلية شاملة للمواطنين السعوديين والمقيمين في مصر',
      color: 'from-[#1e3c72] to-[#2a5298]'
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
      description: 'توفر السفارة خدمات متنوعة للمواطنين الإماراتيين والزوار',
      color: 'from-[#00d2ff] to-[#3a7bd5]'
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
      description: 'سفارة دولة الكويت تخدم المواطنين الكويتيين في جمهورية مصر العربية',
      color: 'from-[#4facfe] to-[#00f2fe]'
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
      description: 'تقدم السفارة القطرية خدمات قنصلية متكاملة',
      color: 'from-[#667eea] to-[#764ba2]'
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
      description: 'سفارة المملكة الأردنية الهاشمية في القاهرة',
      color: 'from-[#1e3c72] to-[#2a5298]'
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
      description: 'سفارة مملكة البحرين تقدم خدمات شاملة للمواطنين البحرينيين',
      color: 'from-[#00d2ff] to-[#3a7bd5]'
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
      description: 'سفارة سلطنة عُمان في جمهورية مصر العربية',
      color: 'from-[#4facfe] to-[#00f2fe]'
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
      description: 'سفارة دولة فلسطين تخدم الشعب الفلسطيني في مصر',
      color: 'from-[#667eea] to-[#764ba2]'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero - Same as Homepage */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#00d2ff] rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">معلومات مهمة</h4>
              <p className="text-gray-700 leading-relaxed">
                يُنصح بالاتصال بالسفارة قبل الزيارة للتأكد من المواعيد والمستندات المطلوبة. 
                بعض الخدمات قد تتطلب حجز موعد مسبق.
              </p>
            </div>
          </div>
        </div>

        {/* Embassies Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {embassies.map((embassy) => (
            <Link
              key={embassy.id}
              href={`/embassies/${embassy.id}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 card-3d-tilt"
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
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${embassy.color} p-6 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-700"></div>
                <div className="text-7xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-500">{embassy.flagEmoji}</div>
                <h3 className="text-xl font-bold text-white relative z-10 drop-shadow-lg">
                  {embassy.country}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-white">
                <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#00d2ff] transition-colors">
                  {embassy.name}
                </h4>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-[#00d2ff] flex-shrink-0" />
                    <span className="line-clamp-1">{embassy.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} className="text-[#00d2ff] flex-shrink-0" />
                    <span>{embassy.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-[#00d2ff] flex-shrink-0" />
                    <span className="line-clamp-1">{embassy.hours}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {embassy.services.slice(0, 2).map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-50 text-[#00d2ff] rounded-full text-xs font-medium"
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
                  <span className="text-[#00d2ff] font-bold group-hover:gap-2 flex items-center gap-1 transition-all">
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