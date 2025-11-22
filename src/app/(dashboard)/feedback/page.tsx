'use client';

import ContactForm from '@/components/ContactForm';
import { MessageSquare, Mail, Phone, MapPin, Clock, GraduationCap, ExternalLink } from 'lucide-react';

export default function FeedbackPage() {
  const scholarships = [
    {
      id: 1,
      title: 'منحة الحكومة المصرية للطلاب الأجانب',
      organization: 'وزارة التعليم العالي المصرية',
      link: 'https://www.study.mohesr.gov.eg',
      type: 'منحة كاملة',
      deadline: 'مفتوح طوال العام',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'منحة الأزهر الشريف',
      organization: 'جامعة الأزهر',
      link: 'https://www.azhar.edu.eg',
      type: 'منحة دراسية',
      deadline: 'يوليو - سبتمبر',
      icon: '📚'
    },
    {
      id: 3,
      title: 'كورسات مجانية - Coursera',
      organization: 'Coursera',
      link: 'https://www.coursera.org/courseraplus',
      type: 'دورات مجانية',
      deadline: 'متاح دائماً',
      icon: '💻'
    },
    {
      id: 4,
      title: 'كورسات مجانية - edX',
      organization: 'edX',
      link: 'https://www.edx.org',
      type: 'دورات مجانية',
      deadline: 'متاح دائماً',
      icon: '🎯'
    },
    {
      id: 5,
      title: 'منحة تركيا - Türkiye Scholarships',
      organization: 'الحكومة التركية',
      link: 'https://www.turkiyeburslari.gov.tr',
      type: 'منحة كاملة',
      deadline: 'يناير - فبراير',
      icon: '🇹🇷'
    },
    {
      id: 6,
      title: 'كورسات Google المجانية',
      organization: 'Google',
      link: 'https://grow.google/intl/ar',
      type: 'شهادات مجانية',
      deadline: 'متاح دائماً',
      icon: '🔍'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <MessageSquare className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            هل لديك مقترح لتحسين الموقع؟
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            يمكنك إرسال مقترحاتك وملاحظاتك لنا، نحن نقدر رأيك ونسعى دائماً للتحسين
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#00d2ff]">
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات الاتصال</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#00d2ff]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h4>
                    <a 
                      href="mailto:campusdirasa@gmail.com"
                      className="text-[#00d2ff] hover:text-[#3a7bd5] text-sm"
                    >
                      campusdirasa@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#3a7bd5]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">الهاتف</h4>
                    <a 
                      href="tel:+201234567890"
                      className="text-[#3a7bd5] hover:text-[#00d2ff] text-sm font-mono"
                    >
                      +20 123 456 7890
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">العنوان</h4>
                    <p className="text-gray-600 text-sm">
                      القاهرة، مصر
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-white" size={24} />
                <h3 className="text-xl font-bold">ساعات العمل</h3>
              </div>
              <div className="space-y-3 text-white/90">
                <div className="flex justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <span>الأحد - الخميس</span>
                  <span className="font-bold">9 ص - 5 م</span>
                </div>
                <div className="flex justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <span>الجمعة</span>
                  <span className="font-bold">مغلق</span>
                </div>
                <div className="flex justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <span>السبت</span>
                  <span className="font-bold">10 ص - 2 م</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">الأسئلة الشائعة</h3>
              <p className="text-gray-700 text-sm mb-4">
                قد تجد إجابة سريعة لسؤالك في قسم الأسئلة الشائعة
              </p>
              <button className="inline-block bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                عرض الأسئلة الشائعة
              </button>
            </div>
          </div>
        </div>

        {/* Scholarships and Free Courses Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">المنح الدراسية والدورات المجانية</h2>
            <p className="text-gray-600 text-lg">فرص رائعة للتعلم والتطوير</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border-2 border-gray-100 hover:border-[#00d2ff] group"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform">{scholarship.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-[56px]">
                  {scholarship.title}
                </h3>

                {/* Organization */}
                <p className="text-gray-600 text-sm mb-3">{scholarship.organization}</p>

                {/* Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">النوع:</span>
                    <span className="bg-gradient-to-r from-cyan-100 to-blue-100 text-[#00d2ff] px-3 py-1 rounded-full text-xs font-bold border border-cyan-200">
                      {scholarship.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">الموعد:</span>
                    <span className="text-gray-800 font-medium text-xs">{scholarship.deadline}</span>
                  </div>
                </div>

                {/* Link Button */}
                <a
                  href={scholarship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all font-medium group-hover:scale-105"
                >
                  <span>زيارة الموقع</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-[#00d2ff] hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-[#00d2ff]" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">رد سريع</h3>
            <p className="text-gray-600 text-sm">
              نرد على جميع الرسائل خلال 24-48 ساعة
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-[#3a7bd5] hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-[#3a7bd5]" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">دعم احترافي</h3>
            <p className="text-gray-600 text-sm">
              فريق دعم متخصص جاهز لمساعدتك
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-indigo-600 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-indigo-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">متاح دائماً</h3>
            <p className="text-gray-600 text-sm">
              يمكنك التواصل معنا في أي وقت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}