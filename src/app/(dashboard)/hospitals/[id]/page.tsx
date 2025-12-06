import Link from 'next/link';
import { Hospital, MapPin, Phone, Clock, Users, Star, ChevronLeft, Stethoscope, ArrowRight, User, Mail, Globe } from 'lucide-react';

// সব হসপিটালের ডাটা (area-wise)
const hospitalsDataByArea = {
  'cairo-center': [
    { id: 1, name: 'مستشفى القاهرة الجامعي', nameEn: 'Cairo University Hospital', location: 'المنيل، القاهرة', phone: '+20 2 3456 7890', doctors: 45, specialties: ['جراحة', 'باطنة', 'أطفال', 'نساء وولادة'], rating: 4.5, image: '🏥', color: 'from-[#1e3c72] to-[#2a5298]', workingHours: 'على مدار 24 ساعة', description: 'أحد أعرق المستشفيات الجامعية في مصر' },
    { id: 2, name: 'مستشفى عين شمس التخصصي', nameEn: 'Ain Shams Specialized Hospital', location: 'العباسية، القاهرة', phone: '+20 2 3456 7891', doctors: 38, specialties: ['قلب', 'عظام', 'أورام', 'جلدية'], rating: 4.3, image: '🏥', color: 'from-[#00d2ff] to-[#3a7bd5]', workingHours: 'على مدار 24 ساعة', description: 'مستشفى تخصصي يقدم خدمات طبية متقدمة' },
    { id: 3, name: 'مستشفى الأزهر الجامعي', nameEn: 'Al-Azhar University Hospital', location: 'نصر سيتي، القاهرة', phone: '+20 2 3456 7892', doctors: 52, specialties: ['جراحة عامة', 'مخ وأعصاب', 'عيون', 'أنف وأذن'], rating: 4.7, image: '🏥', color: 'from-[#4facfe] to-[#00f2fe]', workingHours: 'على مدار 24 ساعة', description: 'مستشفى جامعي متميز بخدماته الشاملة' }
  ],
  'maadi': [
    { id: 4, name: 'مستشفى الجلاء العسكري', nameEn: 'Galaa Military Hospital', location: 'المعادي، القاهرة', phone: '+20 2 3456 7893', doctors: 40, specialties: ['جراحة قلب', 'كلى', 'طوارئ', 'عناية مركزة'], rating: 4.6, image: '🏥', color: 'from-[#667eea] to-[#764ba2]', workingHours: 'على مدار 24 ساعة', description: 'مستشفى عسكري بمعايير عالمية' },
    { id: 6, name: 'مستشفى السلام الدولي', nameEn: 'Al Salam International Hospital', location: 'المعادي، القاهرة', phone: '+20 2 3456 7895', doctors: 48, specialties: ['جراحة تجميل', 'أسنان', 'عيون', 'ليزر'], rating: 4.8, image: '🏥', color: 'from-[#00d2ff] to-[#3a7bd5]', workingHours: 'الأحد - الخميس: 9 ص - 9 م', description: 'مستشفى دولي بأحدث التقنيات' }
  ],
  'nasr-city': [
    { id: 5, name: 'مستشفى دار الشفاء', nameEn: 'Dar Al Shifa Hospital', location: 'مدينة نصر، القاهرة', phone: '+20 2 3456 7894', doctors: 35, specialties: ['نساء وولادة', 'أطفال', 'تطعيمات', 'رعاية أمومة'], rating: 4.4, image: '🏥', color: 'from-[#1e3c72] to-[#2a5298]', workingHours: 'الأحد - الخميس: 8 ص - 8 م', description: 'متخصص في رعاية الأمومة والطفولة' }
  ]
};

// সব হসপিটালের বিস্তারিত ডাটা (আপনার বিদ্যমান)
const hospitalsDetails: Record<number, any> = {
  1: {
    id: 1,
    name: 'مستشفى القاهرة الجامعي',
    nameEn: 'Cairo University Hospital',
    location: 'المنيল، القاهرة',
    address: 'شارع المنيل، القاهرة، مصر',
    phone: '+20 2 3456 7890',
    email: 'info@cairo-hospital.edu.eg',
    website: 'www.cairo-hospital.edu.eg',
    workingHours: 'على مدار 24 ساعة',
    emergencyPhone: '+20 2 3456 7899',
    rating: 4.5,
    totalReviews: 150,
    image: '🏥',
    color: 'from-[#1e3c72] to-[#2a5298]',
    description: 'أحد أعرق المستشفيات الجامعية في مصر، يقدم خدمات طبية متميزة في جميع التخصصات',
    facilities: ['قسم طوارئ على مدار الساعة', 'غرف عمليات مجهزة بأحدث التقنيات', 'وحدة عناية مركزة', 'معامل تحاليل طبية', 'قسم أشعة متطور', 'صيدلية'],
    doctors: [
      { id: 1, name: 'د. أحمد محمود', specialty: 'جراحة عامة', phone: '+20 100 123 4567', availableDays: 'السبت - الأربعاء', availableTime: '9 ص - 3 م', experience: '15 سنة', image: '👨‍⚕️' },
      { id: 2, name: 'د. فاطمة علي', specialty: 'باطنة', phone: '+20 100 123 4568', availableDays: 'الأحد - الخميس', availableTime: '10 ص - 4 م', experience: '12 سنة', image: '👩‍⚕️' },
      { id: 3, name: 'د. محمد حسن', specialty: 'أطفال', phone: '+20 100 123 4569', availableDays: 'السبت - الأربعاء', availableTime: '8 ص - 2 م', experience: '18 سنة', image: '👨‍⚕️' },
      { id: 4, name: 'د. عائشة أحمد', specialty: 'نساء وولادة', phone: '+20 100 123 4570', availableDays: 'الأحد - الخميس', availableTime: '9 ص - 3 م', experience: '10 سنوات', image: '👩‍⚕️' }
    ]
  },
  // ... বাকি সব হসপিটালের details (আপনার বিদ্যমান data)
  2: { id: 2, name: 'مستشفى عين شمس التخصصي', nameEn: 'Ain Shams Specialized Hospital', location: 'العباسية، القاهرة', address: 'شارع الخليفة المأمون، العباسية، القاهرة', phone: '+20 2 3456 7891', email: 'info@ainshams-hospital.edu.eg', website: 'www.ainshams-hospital.edu.eg', workingHours: 'على مدار 24 ساعة', emergencyPhone: '+20 2 3456 7898', rating: 4.3, totalReviews: 120, image: '🏥', color: 'from-[#00d2ff] to-[#3a7bd5]', description: 'مستشفى تخصصي يقدم خدمات طبية متقدمة في التخصصات الدقيقة', facilities: ['قسم قلب متخصص', 'وحدة عظام وجراحة', 'قسم أورام', 'عيادات خارجية', 'معمل تحاليل متقدم', 'صيدلية'], doctors: [{ id: 5, name: 'د. خالد إبراهيم', specialty: 'قلب وأوعية دموية', phone: '+20 100 234 5671', availableDays: 'الأحد - الخميس', availableTime: '10 ص - 4 م', experience: '20 سنة', image: '👨‍⚕️' }, { id: 6, name: 'د. منى عبد الله', specialty: 'عظام', phone: '+20 100 234 5672', availableDays: 'السبت - الأربعاء', availableTime: '9 ص - 3 م', experience: '14 سنة', image: '👩‍⚕️' }, { id: 7, name: 'د. يوسف مصطفى', specialty: 'أورام', phone: '+20 100 234 5673', availableDays: 'الأحد - الخميس', availableTime: '8 ص - 2 م', experience: '16 سنة', image: '👨‍⚕️' }] },
  3: { id: 3, name: 'مستشفى الأزهر الجامعي', nameEn: 'Al-Azhar University Hospital', location: 'نصر سيتي، القاهرة', address: 'شارع يوسف عباس، نصر سيتي، القاهرة', phone: '+20 2 3456 7892', email: 'info@azhar-hospital.edu.eg', website: 'www.azhar-hospital.edu.eg', workingHours: 'على مدار 24 ساعة', emergencyPhone: '+20 2 3456 7897', rating: 4.7, totalReviews: 200, image: '🏥', color: 'from-[#4facfe] to-[#00f2fe]', description: 'مستشفى جامعي متميز بخدماته الشاملة ورعايته الطبية الممتازة', facilities: ['وحدة جراحة متقدمة', 'قسم مخ وأعصاب', 'عيادة عيون متخصصة', 'قسم أنف وأذن وحنجرة', 'معامل طبية شاملة', 'صيدلية على مدار الساعة'], doctors: [{ id: 8, name: 'د. عمر سعيد', specialty: 'مخ وأعصاب', phone: '+20 100 345 6781', availableDays: 'السبت - الأربعاء', availableTime: '10 ص - 4 م', experience: '22 سنة', image: '👨‍⚕️' }, { id: 9, name: 'د. هدى محمد', specialty: 'عيون', phone: '+20 100 345 6782', availableDays: 'الأحد - الخميس', availableTime: '9 ص - 3 م', experience: '13 سنة', image: '👩‍⚕️' }, { id: 10, name: 'د. طارق علي', specialty: 'أنف وأذن وحنجرة', phone: '+20 100 345 6783', availableDays: 'السبت - الأربعاء', availableTime: '8 ص - 2 م', experience: '17 سنة', image: '👨‍⚕️' }] },
  4: { id: 4, name: 'مستشفى الجلاء العسكري', nameEn: 'Galaa Military Hospital', location: 'المعادي، القاهرة', address: 'كورنيش المعادي، القاهرة', phone: '+20 2 3456 7893', email: 'info@galaa-hospital.mil.eg', website: 'www.galaa-hospital.mil.eg', workingHours: 'على مدار 24 ساعة', emergencyPhone: '+20 2 3456 7896', rating: 4.6, totalReviews: 180, image: '🏥', color: 'from-[#667eea] to-[#764ba2]', description: 'مستشفى عسكري بمعايير عالمية يقدم أفضل الخدمات الطبية', facilities: ['وحدة جراحة قلب متطورة', 'قسم كلى صناعية', 'طوارئ متقدمة', 'عناية مركزة مجهزة', 'معامل تحاليل دقيقة', 'صيدلية شاملة'], doctors: [{ id: 11, name: 'د. حسن عبد الرحمن', specialty: 'جراحة قلب', phone: '+20 100 456 7891', availableDays: 'الأحد - الخميس', availableTime: '9 ص - 3 م', experience: '25 سنة', image: '👨‍⚕️' }, { id: 12, name: 'د. سارة أحمد', specialty: 'كلى', phone: '+20 100 456 7892', availableDays: 'السبت - الأربعاء', availableTime: '10 ص - 4 م', experience: '11 سنة', image: '👩‍⚕️' }] },
  5: { id: 5, name: 'مستشفى دار الشفاء', nameEn: 'Dar Al Shifa Hospital', location: 'مدينة نصر، القاهرة', address: 'شارع عباس العقاد، مدينة نصر', phone: '+20 2 3456 7894', email: 'info@darshifa.com.eg', website: 'www.darshifa.com.eg', workingHours: 'الأحد - الخميس: 8 ص - 8 م', emergencyPhone: '+20 2 3456 7895', rating: 4.4, totalReviews: 140, image: '🏥', color: 'from-[#1e3c72] to-[#2a5298]', description: 'متخصص في رعاية الأمومة والطفولة بأعلى معايير الجودة', facilities: ['وحدة نساء وولادة', 'قسم أطفال متخصص', 'مركز تطعيمات', 'رعاية أمومة شاملة', 'معمل أطفال', 'صيدلية'], doctors: [{ id: 13, name: 'د. ليلى حسن', specialty: 'نساء وولادة', phone: '+20 100 567 8901', availableDays: 'الأحد - الخميس', availableTime: '9 ص - 5 م', experience: '16 سنة', image: '👩‍⚕️' }, { id: 14, name: 'د. كريم محمود', specialty: 'أطفال', phone: '+20 100 567 8902', availableDays: 'السبت - الأربعاء', availableTime: '10 ص - 4 م', experience: '12 سنة', image: '👨‍⚕️' }] },
  6: { id: 6, name: 'مستشفى السلام الدولي', nameEn: 'Al Salam International Hospital', location: 'المعادي، القاهرة', address: 'شارع النصر، المعادي، القاهرة', phone: '+20 2 3456 7895', email: 'info@alsalam-hospital.com', website: 'www.alsalam-hospital.com', workingHours: 'الأحد - الخميس: 9 ص - 9 م', emergencyPhone: '+20 2 3456 7894', rating: 4.8, totalReviews: 220, image: '🏥', color: 'from-[#00d2ff] to-[#3a7bd5]', description: 'مستشفى دولي بأحدث التقنيات الطبية والتجميلية', facilities: ['مركز جراحة تجميل', 'عيادة أسنان متطورة', 'قسم عيون بالليزر', 'عيادات خارجية VIP', 'معامل متقدمة', 'صيدلية شاملة'], doctors: [{ id: 15, name: 'د. ياسر إبراهيم', specialty: 'جراحة تجميل', phone: '+20 100 678 9012', availableDays: 'الأحد - الخميس', availableTime: '10 ص - 6 م', experience: '19 سنة', image: '👨‍⚕️' }, { id: 16, name: 'د. نور الدين', specialty: 'أسنان', phone: '+20 100 678 9013', availableDays: 'السبت - الأربعاء', availableTime: '9 ص - 5 م', experience: '14 سنة', image: '👨‍⚕️' }] }
};

const areaNames: Record<string, { ar: string; en: string; emoji: string }> = {
  'cairo-center': { ar: 'وسط القاهرة', en: 'Cairo Center', emoji: '🏙️' },
  'maadi': { ar: 'المعادي', en: 'Maadi', emoji: '🌳' },
  'nasr-city': { ar: 'مدينة نصر', en: 'Nasr City', emoji: '🏢' }
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HospitalDynamicPage({ params }: Props) {
  const { id } = await params;

  // ✅ Smart Detection: এলাকা নাকি হসপিটাল ID?
  const isArea = id in hospitalsDataByArea;

  // যদি এলাকা হয় → এলাকার হসপিটাল দেখাও
  if (isArea) {
    const hospitals = hospitalsDataByArea[id as keyof typeof hospitalsDataByArea];
    const areaInfo = areaNames[id];

    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <Link href="/hospitals" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowRight size={20} />
              <span>العودة إلى المناطق</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-6xl">{areaInfo.emoji}</div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">مستشفيات {areaInfo.ar}</h1>
                <p className="text-white/90 text-lg">{areaInfo.en} Hospitals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Hospital className="text-[#00d2ff] mx-auto mb-2" size={28} />
              <div className="text-3xl font-bold text-gray-800">{hospitals.length}</div>
              <div className="text-gray-600 text-sm">مستشفى</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Users className="text-[#4facfe] mx-auto mb-2" size={28} />
              <div className="text-3xl font-bold text-gray-800">{hospitals.reduce((sum, h) => sum + h.doctors, 0)}</div>
              <div className="text-gray-600 text-sm">طبيب</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Clock className="text-[#667eea] mx-auto mb-2" size={28} />
              <div className="text-3xl font-bold text-gray-800">24/7</div>
              <div className="text-gray-600 text-sm">خدمة طوارئ</div>
            </div>
          </div>

          {/* Hospitals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <Link key={hospital.id} href={`/hospitals/${hospital.id}`} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className={`bg-gradient-to-br ${hospital.color} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-700"></div>
                  <div className="text-6xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-500">{hospital.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-1 relative z-10">{hospital.name}</h3>
                  <p className="text-white/80 text-sm relative z-10">{hospital.nameEn}</p>
                </div>
                <div className="p-6">
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
                  <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{hospital.description}</p>
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700 text-sm">{hospital.location}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="text-gray-400 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-mono text-sm">{hospital.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-gray-400 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{hospital.workingHours}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">التخصصات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.slice(0, 3).map((spec, idx) => (
                        <span key={idx} className="bg-cyan-50 text-[#00d2ff] px-3 py-1 rounded-full text-xs font-medium">{spec}</span>
                      ))}
                      {hospital.specialties.length > 3 && <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">+{hospital.specialties.length - 3}</span>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-cyan-50 text-[#00d2ff] px-4 py-3 rounded-lg group-hover:bg-cyan-100 transition-colors">
                    <span className="font-medium">عرض الأطباء والتفاصيل</span>
                    <ChevronLeft className="group-hover:translate-x-[-4px] transition-transform" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // যদি হসপিটাল ID হয় → হসপিটাল বিস্তারিত দেখাও
  const hospitalId = parseInt(id);
  const hospital = hospitalsDetails[hospitalId];

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <Hospital className="text-gray-400 mx-auto mb-4" size={64} />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">المستشفى غير موجود</h1>
          <p className="text-gray-600 mb-6">عذراً، لم نتمكن من العثور على هذا المستشفى</p>
          <Link href="/hospitals" className="inline-block bg-[#00d2ff] text-white px-6 py-3 rounded-lg hover:bg-[#00b8e6] transition-colors">العودة إلى قائمة المستشفيات</Link>
        </div>
      </div>
    );
  }

  // হসপিটাল বিস্তারিত UI (আপনার বিদ্যমান code)
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/hospitals" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowRight size={20} />
            <span>العودة إلى المستشفيات</span>
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm text-5xl">{hospital.image}</div>
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
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Hospital className="text-[#00d2ff]" size={28} />
                <span>نبذة عن المستشفى</span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{hospital.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">الخدمات والمرافق</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospital.facilities.map((facility: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChevronLeft className="text-[#00d2ff]" size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Stethoscope className="text-[#00d2ff]" size={28} />
                <span>الأطباء المتخصصون</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospital.doctors.map((doctor: any) => (
                  <div key={doctor.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{doctor.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg mb-1">{doctor.name}</h3>
                        <p className="text-[#00d2ff] font-medium mb-2">{doctor.specialty}</p>
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
                        <a href={`tel:${doctor.phone}`} className="text-[#00d2ff] font-medium hover:underline">{doctor.phone}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات الاتصال</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={18} className="text-[#00d2ff]" />
                    <span className="font-semibold">العنوان:</span>
                  </div>
                  <p className="text-gray-700 pr-7">{hospital.address}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Phone size={18} className="text-[#00d2ff]" />
                    <span className="font-semibold">الهاتف:</span>
                  </div>
                  <a href={`tel:${hospital.phone}`} className="text-[#00d2ff] font-medium pr-7 hover:underline block">{hospital.phone}</a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Phone size={18} className="text-red-600" />
                    <span className="font-semibold">طوارئ:</span>
                  </div>
                  <a href={`tel:${hospital.emergencyPhone}`} className="text-red-600 font-bold pr-7 hover:underline block">{hospital.emergencyPhone}</a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Mail size={18} className="text-[#00d2ff]" />
                    <span className="font-semibold">البريد:</span>
                  </div>
                  <a href={`mailto:${hospital.email}`} className="text-[#00d2ff] pr-7 hover:underline block break-all">{hospital.email}</a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Globe size={18} className="text-[#00d2ff]" />
                    <span className="font-semibold">الموقع:</span>
                  </div>
                  <a href={`https://${hospital.website}`} target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] pr-7 hover:underline block break-all">{hospital.website}</a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Clock size={18} className="text-[#00d2ff]" />
                    <span className="font-semibold">المواعيد:</span>
                  </div>
                  <p className="text-gray-700 pr-7 font-medium">{hospital.workingHours}</p>
                </div>
              </div>
              <a href={`tel:${hospital.phone}`} className="mt-6 w-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white py-3 rounded-lg font-bold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2">
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