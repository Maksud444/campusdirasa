import Link from 'next/link';
import { 
  ArrowRight, GraduationCap, Calendar, Clock, Users, Award, 
  CheckCircle, MapPin, DollarSign, FileText, AlertCircle, 
  Send, Download, ExternalLink 
} from 'lucide-react';

// Scholarship data
const scholarshipsData = [
  {
    id: 1,
    title: 'منحة التفوق الأكاديمي',
    titleEn: 'Academic Excellence Scholarship',
    provider: 'جامعة الأزهر',
    country: 'مصر',
    flag: '🇪🇬',
    amount: '5000 جنيه / سنة',
    deadline: '2025-03-15',
    startDate: '2025-02-01',
    duration: '4 سنوات',
    level: 'بكالوريوس',
    eligibleFor: ['الطلاب المتفوقون', 'معدل 85% فأعلى', 'جميع التخصصات'],
    description: 'منحة مخصصة للطلاب المتفوقين أكاديمياً في جميع التخصصات. تهدف هذه المنحة إلى تشجيع الطلاب على التفوق الأكاديمي وتقديم الدعم المالي اللازم لإكمال دراستهم بنجاح.',
    bgGradient: 'from-[#00d2ff] to-[#3a7bd5]',
    spots: 50,
    requirements: [
      'معدل 85% فأعلى في الشهادة الثانوية',
      'شهادة حسن سير وسلوك من المدرسة',
      'رسالة تحفيزية توضح أهدافك الأكاديمية',
      'صورة من بطاقة الرقم القومي',
      'صورة شخصية حديثة',
      'نسخة من آخر شهادة دراسية'
    ],
    benefits: [
      'تغطية كاملة للرسوم الدراسية',
      'مكافأة مالية شهرية 500 جنيه',
      'أولوية في السكن الجامعي',
      'خصم 50% على الكتب والمراجع',
      'فرص تدريب صيفية'
    ],
    applicationProcess: [
      'التسجيل في الموقع الإلكتروني',
      'تعبئة نموذج الطلب الإلكتروني',
      'رفع المستندات المطلوبة',
      'دفع رسوم التقديم (100 جنيه)',
      'انتظار المراجعة والموافقة',
      'حضور المقابلة الشخصية إن لزم'
    ],
    contactInfo: {
      email: 'scholarships@azhar.edu.eg',
      phone: '+20 2 1234 5678',
      website: 'https://scholarships.azhar.edu.eg',
      office: 'مكتب المنح الدراسية - الدور الثالث - مبنى الإدارة'
    },
    timeline: [
      { date: '2025-02-01', event: 'بداية فترة التقديم' },
      { date: '2025-03-15', event: 'آخر موعد للتقديم' },
      { date: '2025-04-01', event: 'إعلان النتائج الأولية' },
      { date: '2025-04-15', event: 'المقابلات الشخصية' },
      { date: '2025-05-01', event: 'إعلان النتائج النهائية' },
      { date: '2025-09-01', event: 'بداية الدراسة' },
    ]
  },
];

export default function ScholarshipDetailPage({ params }: { params: { id: string } }) {
  const scholarshipId = parseInt(params.id);
  const scholarship = scholarshipsData.find((s) => s.id === scholarshipId);

  if (!scholarship) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">المنحة غير موجودة</h1>
          <Link
            href="/scholarships"
            className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-[#3a7bd5]"
          >
            <ArrowRight size={20} />
            <span>العودة إلى قائمة المنح</span>
          </Link>
        </div>
      </div>
    );
  }

  const daysRemaining = Math.ceil(
    (new Date(scholarship.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/scholarships"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#00d2ff] transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة إلى قائمة المنح</span>
          </Link>
        </div>
      </div>

      {/* Scholarship Header */}
      <div className={`bg-gradient-to-br ${scholarship.bgGradient} py-16 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-9xl">{scholarship.flag}</div>
            <div className="text-center md:text-right flex-1">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Award className="text-white" size={20} />
                <span className="text-white font-medium">{scholarship.level}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                {scholarship.title}
              </h1>
              <p className="text-2xl text-white/90 font-semibold drop-shadow-md mb-4">
                {scholarship.titleEn}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 text-white/90">
                <GraduationCap size={20} />
                <span className="font-medium">{scholarship.provider}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Deadline Alert */}
            {daysRemaining > 0 && (
              <div className={`${daysRemaining <= 7 ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'} border-2 rounded-2xl p-6`}>
                <div className="flex items-start gap-4">
                  <Clock className={daysRemaining <= 7 ? 'text-red-600' : 'text-yellow-600'} size={32} />
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-2 ${daysRemaining <= 7 ? 'text-red-800' : 'text-yellow-800'}`}>
                      {daysRemaining <= 7 ? '⚠️ انتبه! الوقت ينفد' : '⏰ لا تفوت الفرصة'}
                    </h3>
                    <p className={daysRemaining <= 7 ? 'text-red-700' : 'text-yellow-700'}>
                      باقي <strong className="text-2xl">{daysRemaining}</strong> يوم على انتهاء فترة التقديم
                    </p>
                    <p className="text-sm mt-2 text-gray-600">
                      آخر موعد: {new Date(scholarship.deadline).toLocaleDateString('ar-EG', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#00d2ff]">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">نبذة عن المنحة</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {scholarship.description}
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#00d2ff]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">شروط التقديم</h2>
              <ul className="space-y-3">
                {scholarship.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-gray-700 text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border-2 border-cyan-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">مميزات المنحة</h2>
              <div className="space-y-3">
                {scholarship.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="text-[#00d2ff] flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#00d2ff]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">خطوات التقديم</h2>
              <div className="space-y-4">
                {scholarship.applicationProcess.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-800 font-medium text-lg">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#00d2ff]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">الجدول الزمني</h2>
              <div className="space-y-4">
                {scholarship.timeline.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                    <Calendar className="text-[#00d2ff]" size={24} />
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">{item.event}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(item.date).toLocaleDateString('ar-EG', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#00d2ff]">
              <h2 className="text-xl font-bold text-gray-800 mb-6">معلومات سريعة</h2>
              
              <div className="space-y-4">
                {/* Amount */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                  <DollarSign className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">قيمة المنحة</p>
                    <p className="text-gray-800 font-bold text-lg">{scholarship.amount}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <Clock className="text-[#3a7bd5] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">مدة المنحة</p>
                    <p className="text-gray-800 font-bold">{scholarship.duration}</p>
                  </div>
                </div>

                {/* Spots */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                  <Users className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">عدد المقاعد</p>
                    <p className="text-gray-800 font-bold">{scholarship.spots} مقعد</p>
                  </div>
                </div>

                {/* Start Date */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <Calendar className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">بداية التقديم</p>
                    <p className="text-gray-800 font-bold text-sm">
                      {new Date(scholarship.startDate).toLocaleDateString('ar-EG')}
                    </p>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-100">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">آخر موعد</p>
                    <p className="text-gray-800 font-bold text-sm">
                      {new Date(scholarship.deadline).toLocaleDateString('ar-EG')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white py-4 rounded-xl font-bold hover:from-[#00bfe6] hover:to-[#3468b5] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Send size={20} />
                <span>تقديم الطلب الآن</span>
              </button>

              {/* Download Brochure */}
              <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                <Download size={18} />
                <span>تحميل الكتيب التعريفي</span>
              </button>
            </div>

            {/* Eligible For */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#00d2ff]">
              <h3 className="text-lg font-bold text-gray-800 mb-4">من يمكنه التقديم؟</h3>
              <div className="space-y-2">
                {scholarship.eligibleFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                    <CheckCircle className="text-[#00d2ff]" size={16} />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">معلومات التواصل</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <FileText className="text-white mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-white/80">البريد الإلكتروني</p>
                    <a href={`mailto:${scholarship.contactInfo.email}`} className="text-sm text-white hover:underline font-medium">
                      {scholarship.contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <FileText className="text-white mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-white/80">الهاتف</p>
                    <a href={`tel:${scholarship.contactInfo.phone}`} className="text-sm text-white hover:underline font-medium">
                      {scholarship.contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <ExternalLink className="text-white mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-white/80">الموقع الإلكتروني</p>
                    <a href={scholarship.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:underline font-medium break-all">
                      {scholarship.contactInfo.website}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <MapPin className="text-white mt-0.5" size={16} />
                  <div>
                    <p className="text-xs text-white/80">المكتب</p>
                    <p className="text-sm text-white font-medium">
                      {scholarship.contactInfo.office}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}