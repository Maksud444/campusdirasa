import Link from 'next/link';
import { Hospital, MapPin, Phone, Clock, User, Star, Mail, Globe, ChevronRight, Stethoscope, ArrowRight } from 'lucide-react';

// হাসপাতালের সম্পূর্ণ ডাটা
const hospitalsData = [
  {
    id: 1,
    name: 'مستشفى القاهرة الجامعي',
    nameEn: 'Cairo University Hospital',
    location: 'المنيل، القاهرة',
    address: 'شارع المنيل، القاهرة، مصر',
    phone: '+20 2 3456 7890',
    email: 'info@cairo-hospital.edu.eg',
    website: 'www.cairo-hospital.edu.eg',
    workingHours: 'على مدار 24 ساعة',
    emergencyPhone: '+20 2 3456 7899',
    rating: 4.5,
    totalReviews: 150,
    image: '🏥',
    color: 'emerald',
    description: 'أحد أعرق المستشفيات الجامعية في مصر، يقدم خدمات طبية متميزة في جميع التخصصات',
    facilities: [
      'قسم طوارئ على مدار الساعة',
      'غرف عمليات مجهزة بأحدث التقنيات',
      'وحدة عناية مركزة',
      'معامل تحاليل طبية',
      'قسم أشعة متطور',
      'صيدلية'
    ],
    doctors: [
      {
        id: 1,
        name: 'د. أحمد محمود',
        specialty: 'جراحة عامة',
        phone: '+20 100 123 4567',
        availableDays: 'السبت - الأربعاء',
        availableTime: '9 ص - 3 م',
        experience: '15 سنة',
        image: '👨‍⚕️'
      },
      {
        id: 2,
        name: 'د. فاطمة علي',
        specialty: 'باطنة',
        phone: '+20 100 123 4568',
        availableDays: 'الأحد - الخميس',
        availableTime: '10 ص - 4 م',
        experience: '12 سنة',
        image: '👩‍⚕️'
      },
      {
        id: 3,
        name: 'د. محمد حسن',
        specialty: 'أطفال',
        phone: '+20 100 123 4569',
        availableDays: 'السبت - الأربعاء',
        availableTime: '8 ص - 2 م',
        experience: '18 سنة',
        image: '👨‍⚕️'
      },
      {
        id: 4,
        name: 'د. عائشة أحمد',
        specialty: 'نساء وولادة',
        phone: '+20 100 123 4570',
        availableDays: 'الأحد - الخميس',
        availableTime: '9 ص - 3 م',
        experience: '10 سنوات',
        image: '👩‍⚕️'
      }
    ]
  },
  {
    id: 2,
    name: 'مستشفى عين شمس التخصصي',
    nameEn: 'Ain Shams Specialized Hospital',
    location: 'العباسية، القاهرة',
    address: 'شارع الخليفة المأمون، العباسية، القاهرة',
    phone: '+20 2 3456 7891',
    email: 'info@ainshams-hospital.edu.eg',
    website: 'www.ainshams-hospital.edu.eg',
    workingHours: 'على مدار 24 ساعة',
    emergencyPhone: '+20 2 3456 7898',
    rating: 4.3,
    totalReviews: 120,
    image: '🏥',
    color: 'green',
    description: 'مستشفى تخصصي يقدم خدمات طبية متقدمة في التخصصات الدقيقة',
    facilities: [
      'قسم قلب متخصص',
      'وحدة عظام وجراحة',
      'قسم أورام',
      'عيادات خارجية',
      'معمل تحاليل متقدم',
      'صيدلية'
    ],
    doctors: [
      {
        id: 5,
        name: 'د. خالد إبراهيم',
        specialty: 'قلب وأوعية دموية',
        phone: '+20 100 234 5671',
        availableDays: 'الأحد - الخميس',
        availableTime: '10 ص - 4 م',
        experience: '20 سنة',
        image: '👨‍⚕️'
      },
      {
        id: 6,
        name: 'د. منى عبد الله',
        specialty: 'عظام',
        phone: '+20 100 234 5672',
        availableDays: 'السبت - الأربعاء',
        availableTime: '9 ص - 3 م',
        experience: '14 سنة',
        image: '👩‍⚕️'
      },
      {
        id: 7,
        name: 'د. يوسف مصطفى',
        specialty: 'أورام',
        phone: '+20 100 234 5673',
        availableDays: 'الأحد - الخميس',
        availableTime: '8 ص - 2 م',
        experience: '16 سنة',
        image: '👨‍⚕️'
      }
    ]
  },
  {
    id: 3,
    name: 'مستشفى الأزهر الجامعي',
    nameEn: 'Al-Azhar University Hospital',
    location: 'نصر سيتي، القاهرة',
    address: 'شارع يوسف عباس، نصر سيتي، القاهرة',
    phone: '+20 2 3456 7892',
    email: 'info@azhar-hospital.edu.eg',
    website: 'www.azhar-hospital.edu.eg',
    workingHours: 'على مدار 24 ساعة',
    emergencyPhone: '+20 2 3456 7897',
    rating: 4.7,
    totalReviews: 200,
    image: '🏥',
    color: 'teal',
    description: 'مستشفى جامعي متميز بخدماته الشاملة ورعايته الطبية الممتازة',
    facilities: [
      'وحدة جراحة متقدمة',
      'قسم مخ وأعصاب',
      'عيادة عيون متخصصة',
      'قسم أنف وأذن وحنجرة',
      'معامل طبية شاملة',
      'صيدلية على مدار الساعة'
    ],
    doctors: [
      {
        id: 8,
        name: 'د. عمر سعيد',
        specialty: 'مخ وأعصاب',
        phone: '+20 100 345 6781',
        availableDays: 'السبت - الأربعاء',
        availableTime: '10 ص - 4 م',
        experience: '22 سنة',
        image: '👨‍⚕️'
      },
      {
        id: 9,
        name: 'د. هدى محمد',
        specialty: 'عيون',
        phone: '+20 100 345 6782',
        availableDays: 'الأحد - الخميس',
        availableTime: '9 ص - 3 م',
        experience: '13 سنة',
        image: '👩‍⚕️'
      },
      {
        id: 10,
        name: 'د. طارق علي',
        specialty: 'أنف وأذن وحنجرة',
        phone: '+20 100 345 6783',
        availableDays: 'السبت - الأربعاء',
        availableTime: '8 ص - 2 م',
        experience: '17 سنة',
        image: '👨‍⚕️'
      }
    ]
  },
  {
    id: 4,
    name: 'مستشفى الجلاء العسكري',
    nameEn: 'Galaa Military Hospital',
    location: 'المعادي، القاهرة',
    address: 'كورنيش المعادي، القاهرة',
    phone: '+20 2 3456 7893',
    email: 'info@galaa-hospital.mil.eg',
    website: 'www.galaa-hospital.mil.eg',
    workingHours: 'على مدار 24 ساعة',
    emergencyPhone: '+20 2 3456 7896',
    rating: 4.6,
    totalReviews: 180,
    image: '🏥',
    color: 'blue',
    description: 'مستشفى عسكري بمعايير عالمية يقدم أفضل الخدمات الطبية',
    facilities: [
      'وحدة جراحة قلب متطورة',
      'قسم كلى صناعية',
      'طوارئ متقدمة',
      'عناية مركزة مجهزة',
      'معامل تحاليل دقيقة',
      'صيدلية شاملة'
    ],
    doctors: [
      {
        id: 11,
        name: 'د. حسن عبد الرحمن',
        specialty: 'جراحة قلب',
        phone: '+20 100 456 7891',
        availableDays: 'الأحد - الخميس',
        availableTime: '9 ص - 3 م',
        experience: '25 سنة',
        image: '👨‍⚕️'
      },
      {
        id: 12,
        name: 'د. سارة أحمد',
        specialty: 'كلى',
        phone: '+20 100 456 7892',
        availableDays: 'السبت - الأربعاء',
        availableTime: '10 ص - 4 م',
        experience: '11 سنة',
        image: '👩‍⚕️'
      }
    ]
  },
  {
    id: 5,
    name: 'مستشفى دار الشفاء',
    nameEn: 'Dar Al Shifa Hospital',
    location: 'مدينة نصر، القاهرة',
    address: 'شارع عباس العقاد، مدينة نصر',
    phone: '+20 2 3456 7894',
    email: 'info@darshifa.com.eg',
    website: 'www.darshifa.com.eg',
    workingHours: 'الأحد - الخميس: 8 ص - 8 م',
    emergencyPhone: '+20 2 3456 7895',
    rating: 4.4,
    totalReviews: 140,
    image: '🏥',
    color: 'purple',
    description: 'متخصص في رعاية الأمومة والطفولة بأعلى معايير الجودة',
    facilities: [
      'وحدة نساء وولادة',
      'قسم أطفال متخصص',
      'مركز تطعيمات',
      'رعاية أمومة شاملة',
      'معمل أطفال',
      'صيدلية'
    ],
    doctors: [
      {
        id: 13,
        name: 'د. ليلى حسن',
        specialty: 'نساء وولادة',
        phone: '+20 100 567 8901',
        availableDays: 'الأحد - الخميس',
        availableTime: '9 ص - 5 م',
        experience: '16 سنة',
        image: '👩‍⚕️'
      },
      {
        id: 14,
        name: 'د. كريم محمود',
        specialty: 'أطفال',
        phone: '+20 100 567 8902',
        availableDays: 'السبت - الأربعاء',
        availableTime: '10 ص - 4 م',
        experience: '12 سنة',
        image: '👨‍⚕️'
      }
    ]
  },
  {
    id: 6,
    name: 'مستشفى السلام الدولي',
    nameEn: 'Al Salam International Hospital',
    location: 'المعادي، القاهرة',
    address: 'شارع النصر، المعادي، القاهرة',
    phone: '+20 2 3456 7895',
    email: 'info@alsalam-hospital.com',
    website: 'www.alsalam-hospital.com',
    workingHours: 'الأحد - الخميس: 9 ص - 9 م',
    emergencyPhone: '+20 2 3456 7894',
    rating: 4.8,
    totalReviews: 220,
    image: '🏥',
    color: 'indigo',
    description: 'مستشفى دولي بأحدث التقنيات الطبية والتجميلية',
    facilities: [
      'مركز جراحة تجميل',
      'عيادة أسنان متطورة',
      'قسم عيون بالليزر',
      'عيادات خارجية VIP',
      'معامل متقدمة',
      'صيدلية شاملة'
    ],
    doctors: [
      {
        id: 15,
        name: 'د. ياسر إبراهيم',
        specialty: 'جراحة تجميل',
        phone: '+20 100 678 9012',
        availableDays: 'الأحد - الخميس',
        availableTime: '10 ص - 6 م',
        experience: '19 سنة',
        image: '👨‍⚕️'
      },
      {
        id: 16,
        name: 'د. نور الدين',
        specialty: 'أسنان',
        phone: '+20 100 678 9013',
        availableDays: 'السبت - الأربعاء',
        availableTime: '9 ص - 5 م',
        experience: '14 سنة',
        image: '👨‍⚕️'
      }
    ]
  }
];

// Props type - Next.js 15+ এর জন্য
type Props = {
  params: Promise<{
    id: string;
  }>;
};

// Main component - async করা হয়েছে
export default async function HospitalDetailsPage({ params }: Props) {
  // params await করতে হবে Next.js 15+ এ
  const { id } = await params;
  
  // ID থেকে hospital খুঁজে বের করা
  const hospitalId = parseInt(id);
  const hospital = hospitalsData.find(h => h.id === hospitalId);

  // যদি hospital না পাওয়া যায়
  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <Hospital className="text-gray-400 mx-auto mb-4" size={64} />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">المستشفى غير موجود</h1>
          <p className="text-gray-600 mb-6">عذراً، لم نتمكن من العثور على هذا المستشفى</p>
          <Link
            href="/hospitals"
            className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            العودة إلى قائمة المستشفيات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* হেডার */}
      <div className={`bg-gradient-to-br from-${hospital.color}-500 to-${hospital.color}-600 py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/hospitals"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة إلى المستشفيات</span>
          </Link>

          <div className="flex items-start gap-6">
            <div className={`w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm text-5xl`}>
              {hospital.image}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{hospital.name}</h1>
              <p className="text-white/90 text-lg mb-4">{hospital.nameEn}</p>
              
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{hospital.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="fill-yellow-300 text-yellow-300" size={18} />
                  <span className="font-bold">{hospital.rating}</span>
                  <span className="text-sm">({hospital.totalReviews} تقييم)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* বিবরণ */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Hospital className={`text-${hospital.color}-600`} size={28} />
                <span>نبذة عن المستشفى</span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {hospital.description}
              </p>
            </div>

            {/* সুবিধাসমূহ */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">الخدمات والمرافق</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospital.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-10 h-10 bg-${hospital.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <ChevronRight className={`text-${hospital.color}-600`} size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ডাক্তারদের তালিকা */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Stethoscope className={`text-${hospital.color}-600`} size={28} />
                <span>الأطباء المتخصصون</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospital.doctors.map((doctor) => (
                  <div key={doctor.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{doctor.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg mb-1">{doctor.name}</h3>
                        <p className={`text-${hospital.color}-600 font-medium mb-2`}>{doctor.specialty}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User size={14} />
                          <span>خبرة: {doctor.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock size={16} className="text-gray-400" />
                        <span>{doctor.availableDays}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock size={16} className="text-gray-400" />
                        <span>{doctor.availableTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone size={16} className="text-gray-400" />
                        <a href={`tel:${doctor.phone}`} className={`text-${hospital.color}-600 font-medium hover:underline`}>
                          {doctor.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* যোগাযোগ */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات الاتصال</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={18} className={`text-${hospital.color}-600`} />
                    <span className="font-semibold">العنوان:</span>
                  </div>
                  <p className="text-gray-700 pr-7">{hospital.address}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Phone size={18} className={`text-${hospital.color}-600`} />
                    <span className="font-semibold">الهاتف:</span>
                  </div>
                  <a href={`tel:${hospital.phone}`} className={`text-${hospital.color}-600 font-medium pr-7 hover:underline block`}>
                    {hospital.phone}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Phone size={18} className="text-red-600" />
                    <span className="font-semibold">طوارئ:</span>
                  </div>
                  <a href={`tel:${hospital.emergencyPhone}`} className="text-red-600 font-bold pr-7 hover:underline block">
                    {hospital.emergencyPhone}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Mail size={18} className={`text-${hospital.color}-600`} />
                    <span className="font-semibold">البريد:</span>
                  </div>
                  <a href={`mailto:${hospital.email}`} className={`text-${hospital.color}-600 pr-7 hover:underline block break-all`}>
                    {hospital.email}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Globe size={18} className={`text-${hospital.color}-600`} />
                    <span className="font-semibold">الموقع:</span>
                  </div>
                  <a href={`https://${hospital.website}`} target="_blank" rel="noopener noreferrer" className={`text-${hospital.color}-600 pr-7 hover:underline block break-all`}>
                    {hospital.website}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Clock size={18} className={`text-${hospital.color}-600`} />
                    <span className="font-semibold">المواعيد:</span>
                  </div>
                  <p className="text-gray-700 pr-7 font-medium">{hospital.workingHours}</p>
                </div>
              </div>

              {/* কল বাটন */}
              <a
                href={`tel:${hospital.phone}`}
                className={`mt-6 w-full bg-gradient-to-r from-${hospital.color}-500 to-${hospital.color}-600 text-white py-3 rounded-lg font-bold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2`}
              >
                <Phone size={20} />
                <span>اتصل الآن</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




