'use client';

import Link from 'next/link';
import { 
  FileText, Download, MapPin, CheckCircle, AlertCircle, 
  Calendar, Clock, Phone, Mail, ExternalLink, ArrowRight,
  Building2, FileCheck, Upload, Users, Info
} from 'lucide-react';

export default function VerificationPage() {
  // ভর্তির ধাপসমূহ
  const admissionSteps = [
    {
      id: 1,
      title: 'المستندات المطلوبة',
      titleBn: 'প্রয়োজনীয় কাগজপত্র',
      description: 'قم بتحضير جميع المستندات المطلوبة للتسجيل',
      icon: FileText,
      color: 'from-[#00d2ff] to-[#3a7bd5]',
      items: [
        'شهادة الثانوية العامة (أصل + صورة)',
        'صورة من جواز السفر (ساري المفعول)',
        '6 صور شخصية حديثة (4×6)',
        'شهادة صحية معتمدة',
        'شهادة حسن سير وسلوك',
        'نموذج طلب الالتحاق (مُعبأ)'
      ]
    },
    {
      id: 2,
      title: 'زيارة مكتب القبول',
      titleBn: 'ভর্তি অফিসে যাওয়া',
      description: 'توجه إلى مكتب القبول والتسجيل في الجامعة',
      icon: Building2,
      color: 'from-[#1e3a8a] to-[#3b82f6]',
      items: [
        'العنوان: مبنى الإدارة - الدور الأرضي',
        'ساعات العمل: 9 صباحاً - 3 عصراً',
        'الأيام: الأحد إلى الخميس',
        'يُفضل الحضور مبكراً لتجنب الازدحام'
      ]
    },
    {
      id: 3,
      title: 'تعبئة نماذج التسجيل',
      titleBn: 'ফর্ম পূরণ করা',
      description: 'املأ النماذج المطلوبة بدقة واهتمام',
      icon: FileCheck,
      color: 'from-[#0891b2] to-[#06b6d4]',
      items: [
        'نموذج طلب الالتحاق',
        'نموذج البيانات الشخصية',
        'نموذج الإقرار والتعهد',
        'نموذج الفحص الطبي'
      ]
    },
    {
      id: 4,
      title: 'دفع الرسوم',
      titleBn: 'ফি প্রদান',
      description: 'سدد رسوم التسجيل والقبول',
      icon: FileText,
      color: 'from-[#1e40af] to-[#2563eb]',
      items: [
        'رسوم التسجيل: 500 جنيه',
        'رسوم الفحص الطبي: 200 جنيه',
        'طرق الدفع: نقداً أو بطاقة بنكية',
        'احتفظ بإيصال الدفع'
      ]
    },
    {
      id: 5,
      title: 'المراجعة والموافقة',
      titleBn: 'যাচাই ও অনুমোদন',
      description: 'انتظر مراجعة الطلب والحصول على الموافقة',
      icon: CheckCircle,
      color: 'from-[#0c4a6e] to-[#0369a1]',
      items: [
        'مدة المراجعة: 3-5 أيام عمل',
        'سيتم التواصل معك عبر الهاتف/البريد',
        'تحقق من حالة الطلب أونلاين',
        'في حالة القبول، احصل على رقم الطالب'
      ]
    },
    {
      id: 6,
      title: 'استلام بطاقة الطالب',
      titleBn: 'ছাত্র কার্ড সংগ্রহ',
      description: 'احصل على بطاقة الطالب الجامعية',
      icon: Users,
      color: 'from-[#164e63] to-[#0891b2]',
      items: [
        'مدة الإصدار: أسبوع واحد',
        'استلام البطاقة من مكتب شؤون الطلاب',
        'أحضر إيصال الدفع ورقم القبول',
        'البطاقة مطلوبة للدخول والامتحانات'
      ]
    }
  ];

  // ডাউনলোড করার ফর্মসমূহ
  const downloadableForms = [
    {
      id: 1,
      title: 'نموذج طلب الالتحاق',
      titleEn: 'Admission Application Form',
      description: 'النموذج الرئيسي لطلب الالتحاق بالجامعة',
      fileSize: '250 KB',
      fileType: 'PDF',
      downloadLink: '/forms/admission-application.pdf',
      icon: FileText,
      required: true
    },
    {
      id: 2,
      title: 'نموذج البيانات الشخصية',
      titleEn: 'Personal Information Form',
      description: 'نموذج بيانات الطالب الشخصية والعائلية',
      fileSize: '180 KB',
      fileType: 'PDF',
      downloadLink: '/forms/personal-info.pdf',
      icon: FileCheck,
      required: true
    },
    {
      id: 3,
      title: 'نموذج الإقرار والتعهد',
      titleEn: 'Declaration & Commitment Form',
      description: 'إقرار بالالتزام بقوانين ولوائح الجامعة',
      fileSize: '120 KB',
      fileType: 'PDF',
      downloadLink: '/forms/declaration.pdf',
      icon: FileText,
      required: true
    },
    {
      id: 4,
      title: 'نموذج الفحص الطبي',
      titleEn: 'Medical Examination Form',
      description: 'نموذج الكشف الطبي المعتمد',
      fileSize: '200 KB',
      fileType: 'PDF',
      downloadLink: '/forms/medical-exam.pdf',
      icon: FileText,
      required: true
    },
    {
      id: 5,
      title: 'دليل القبول والتسجيل',
      titleEn: 'Admission Guide',
      description: 'دليل شامل لإجراءات القبول والتسجيل',
      fileSize: '1.2 MB',
      fileType: 'PDF',
      downloadLink: '/forms/admission-guide.pdf',
      icon: Info,
      required: false
    }
  ];

  // অফিস লোকেশন
  const officeLocations = [
    {
      id: 1,
      name: 'مكتب القبول والتسجيل',
      nameEn: 'Admission & Registration Office',
      building: 'مبنى الإدارة - الدور الأرضي',
      hours: 'الأحد - الخميس: 9 ص - 3 م',
      phone: '+20 2 1234 5678',
      email: 'admission@azhar.edu.eg',
      mapLink: 'https://maps.google.com/?q=Al-Azhar+University+Cairo',
      color: 'from-[#00d2ff] to-[#3a7bd5]'
    },
    {
      id: 2,
      name: 'مكتب شؤون الطلاب',
      nameEn: 'Student Affairs Office',
      building: 'مبنى الطلاب - الدور الثاني',
      hours: 'الأحد - الخميس: 9 ص - 4 م',
      phone: '+20 2 1234 5679',
      email: 'students@azhar.edu.eg',
      mapLink: 'https://maps.google.com/?q=Al-Azhar+University+Cairo',
      color: 'from-[#1e3a8a] to-[#3b82f6]'
    },
    {
      id: 3,
      name: 'مكتب الطلاب الوافدين',
      nameEn: 'International Students Office',
      building: 'مبنى العلاقات الدولية - الدور الأول',
      hours: 'الأحد - الخميس: 9 ص - 3 م',
      phone: '+20 2 1234 5680',
      email: 'international@azhar.edu.eg',
      mapLink: 'https://maps.google.com/?q=Al-Azhar+University+Cairo',
      color: 'from-[#0891b2] to-[#06b6d4]'
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
              <FileCheck className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
               كيف يلتحق الطالب الجديد؟
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              دليل شامل لإجراءات القبول والتسجيل للطلاب الجدد في جامعة الأزهر الشريف
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">⚠️ تنبيه هام</h3>
              <p className="text-yellow-800 leading-relaxed">
                يُرجى قراءة جميع الخطوات بعناية قبل البدء في إجراءات التسجيل. تأكد من إحضار جميع المستندات المطلوبة في المرة الأولى لتجنب التأخير.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Steps */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">خطوات القبول والتسجيل</h2>
          <p className="text-gray-600 text-lg">اتبع هذه الخطوات بالترتيب لإتمام عملية التسجيل بنجاح</p>
        </div>

        <div className="space-y-8">
          {admissionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${step.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-3xl font-bold">0{step.id}</span>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-white/90">{step.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[#00d2ff] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Downloadable Forms */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Download className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">النماذج المطلوبة للتحميل</h2>
            <p className="text-gray-600 text-lg">قم بتحميل وطباعة النماذج التالية وتعبئتها بدقة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableForms.map((form) => {
              const Icon = form.icon;
              return (
                <div
                  key={form.id}
                  className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-[#00d2ff] hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-[#00d2ff]" size={24} />
                    </div>
                    {form.required && (
                      <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                        مطلوب
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-[56px]">
                    {form.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 italic">{form.titleEn}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {form.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <span className="flex items-center gap-1">
                      <FileText size={16} />
                      {form.fileType}
                    </span>
                    <span>{form.fileSize}</span>
                  </div>

                  <a
                    href={form.downloadLink}
                    download
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    <Download size={18} />
                    <span>تحميل النموذج</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">مواقع المكاتب المهمة</h2>
          <p className="text-gray-600 text-lg">عناوين وأوقات عمل المكاتب التي ستحتاج لزيارتها</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeLocations.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100"
            >
              <div className={`bg-gradient-to-r ${office.color} p-6 text-white text-center`}>
                <MapPin className="mx-auto mb-3" size={32} />
                <h3 className="text-xl font-bold mb-1">{office.name}</h3>
                <p className="text-white/80 text-sm">{office.nameEn}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">الموقع</p>
                    <p className="text-gray-800 font-medium text-sm">{office.building}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">ساعات العمل</p>
                    <p className="text-gray-800 font-medium text-sm">{office.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">الهاتف</p>
                    <a href={`tel:${office.phone}`} className="text-[#00d2ff] hover:underline font-medium text-sm">
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-[#00d2ff] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">البريد الإلكتروني</p>
                    <a href={`mailto:${office.email}`} className="text-[#00d2ff] hover:underline font-medium text-sm break-all">
                      {office.email}
                    </a>
                  </div>
                </div>

                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium text-sm mt-4"
                >
                  <MapPin size={16} />
                  <span>عرض على الخريطة</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى مساعدة؟</h2>
          <p className="text-xl text-white/90 mb-8">
            فريقنا جاهز لمساعدتك في أي استفسار حول إجراءات القبول والتسجيل
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/feedback"
              className="bg-white text-[#00d2ff] px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              <Mail size={20} />
              <span>تواصل معنا</span>
            </Link>
            <a
              href="tel:+201234567890"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all inline-flex items-center gap-2 border-2 border-white/30"
            >
              <Phone size={20} />
              <span>اتصل بنا</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}