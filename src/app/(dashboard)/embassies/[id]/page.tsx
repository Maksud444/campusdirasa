import Link from 'next/link';
import { ArrowRight, Globe, Phone, Mail, MapPin, Clock, ExternalLink, CheckCircle } from 'lucide-react';

// Embassy data (same as list page)
const embassiesData = [
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
    services: ['تأشيرات', 'جوازات سفر', 'تصديقات', 'خدمات قنصلية', 'توثيق مستندات'],
    serviceFees: [
      { service: 'تأشيرة زيارة', fee: '200 جنيه' },
      { service: 'تصديق وثيقة', fee: '150 جنيه' },
      { service: 'إصدار جواز سفر', fee: '500 جنيه' },
      { service: 'تجديد جواز سفر', fee: '400 جنيه' },
      { service: 'توثيق عقد', fee: '250 جنيه' },
    ],
    description: 'تقدم السفارة خدمات قنصلية شاملة للمواطنين السعوديين والمقيمين في مصر، بما في ذلك إصدار وتجديد جوازات السفر، تصديق المستندات، وخدمات التأشيرات.',
    workingDays: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    closedDays: ['الجمعة', 'السبت'],
    requirements: [
      'جواز سفر ساري المفعول',
      'صورة شخصية حديثة',
      'استمارة الطلب مكتملة',
      'رسوم الخدمة'
    ]
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
    services: ['تأشيرات', 'توثيق مستندات', 'خدمات قنصلية', 'إصدار جوازات', 'تصديقات'],
    serviceFees: [
      { service: 'تأشيرة سياحية', fee: '300 جنيه' },
      { service: 'توثيق مستند', fee: '180 جنيه' },
      { service: 'إصدار جواز', fee: '600 جنيه' },
      { service: 'تصديق شهادة', fee: '200 جنيه' },
    ],
    description: 'توفر السفارة خدمات متنوعة للمواطنين الإماراتيين والزوار، وتعمل على تسهيل الإجراءات القنصلية.',
    workingDays: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    closedDays: ['الجمعة', 'السبت'],
    requirements: [
      'إثبات هوية',
      'المستندات الأصلية',
      'صور المستندات',
      'الرسوم المقررة'
    ]
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
    services: ['تأشيرات', 'جوازات سفر', 'شهادات', 'توثيق', 'خدمات قنصلية'],
    serviceFees: [
      { service: 'تأشيرة عمل', fee: '250 جنيه' },
      { service: 'تصديق وثيقة', fee: '160 جنيه' },
      { service: 'جواز سفر جديد', fee: '550 جنيه' },
      { service: 'شهادة ميلاد', fee: '120 جنيه' },
    ],
    description: 'سفارة دولة الكويت تخدم المواطنين الكويتيين في جمهورية مصر العربية وتقدم كافة الخدمات القنصلية.',
    workingDays: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    closedDays: ['الجمعة', 'السبت'],
    requirements: [
      'جواز سفر',
      'صورة شخصية',
      'الاستمارات المطلوبة',
      'رسوم الخدمة'
    ]
  },
  // Add other embassies similarly...
];

export default function EmbassyDetailPage({ params }: { params: { id: string } }) {
  const embassyId = parseInt(params.id);
  const embassy = embassiesData.find((e) => e.id === embassyId);

  if (!embassy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">السفارة غير موجودة</h1>
          <Link
            href="/embassies"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <ArrowRight size={20} />
            <span>العودة إلى قائمة السفارات</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50" dir="rtl">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/embassies"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة إلى قائمة السفارات</span>
          </Link>
        </div>
      </div>

      {/* Embassy Header */}
      <div className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-9xl">{embassy.flagEmoji}</div>
            <div className="text-center md:text-right">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                {embassy.name}
              </h1>
              <p className="text-2xl text-white/90 font-semibold drop-shadow-md">
                {embassy.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">نبذة عن السفارة</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {embassy.description}
              </p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">الخدمات المتاحة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {embassy.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100"
                  >
                    <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Fees - NEW */}
            {embassy.serviceFees && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">رسوم الخدمات</h2>
                <div className="space-y-3">
                  {embassy.serviceFees.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-gray-800 font-medium">{item.service}</span>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                        <span className="text-emerald-600 font-bold text-lg">{item.fee}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-sm text-yellow-800">
                    <strong>ملاحظة:</strong> الرسوم قابلة للتغيير. يُرجى الاتصال بالسفارة للتأكد من الرسوم الحالية.
                  </p>
                </div>
              </div>
            )}

            {/* Requirements */}
            {embassy.requirements && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">المتطلبات الأساسية</h2>
                <ul className="space-y-3">
                  {embassy.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-700 text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            
            {/* Working Days - No longer sticky */}
            {embassy.workingDays && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">مواعيد العمل</h3>
                
                {/* Hours */}
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl mb-4">
                  <Clock className="text-emerald-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">ساعات العمل</p>
                    <p className="text-gray-800 font-bold text-lg">{embassy.hours}</p>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-gray-600 mb-3">أيام العمل</h4>
                <div className="space-y-2 mb-4">
                  {embassy.workingDays.map((day, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-gray-700 font-medium">{day}</span>
                    </div>
                  ))}
                </div>

                {embassy.closedDays && (
                  <>
                    <h4 className="text-sm font-bold text-gray-600 mb-3">أيام الإغلاق</h4>
                    <div className="space-y-2">
                      {embassy.closedDays.map((day, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{day}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">معلومات الاتصال</h2>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">العنوان</p>
                    <p className="text-gray-800 font-medium">{embassy.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Phone className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">رقم الهاتف</p>
                    <a 
                      href={`tel:${embassy.phone}`}
                      className="text-gray-800 font-medium hover:text-emerald-600 transition-colors"
                    >
                      {embassy.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <Mail className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">البريد الإلكتروني</p>
                    <a 
                      href={`mailto:${embassy.email}`}
                      className="text-gray-800 font-medium hover:text-emerald-600 transition-colors break-all"
                    >
                      {embassy.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${embassy.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors"
                >
                  <Phone size={20} />
                  <span>اتصل الآن</span>
                </a>
                
                <a
                  href={embassy.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
                >
                  <MapPin size={20} />
                  <span>عرض على الخريطة</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

