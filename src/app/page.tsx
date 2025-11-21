'use client';

import Link from 'next/link';
import { 
  FileText, 
  Newspaper, 
  Hospital, 
  Globe, 
  BookOpen,
  Building2,
  ChevronLeft,
  Star,
  Users,
  ArrowLeft
} from 'lucide-react';
import AnnouncementSection from '@/components/AnnouncementSection';

export default function HomePage() {
  const features = [
    { 
      id: 1, 
      title: 'قوائم PDF', 
      icon: FileText, 
      color: 'from-[#1e3c72] to-[#2a5298]', // Dark Blue
      desc: 'إقامات، غرف، امتحانات، المفصولات، اسماء الطلب الجديد',
      link: '/qawaaim'
    },
    { 
      id: 2, 
      title: 'الأخبار', 
      icon: Newspaper, 
      color: 'from-[#00d2ff] to-[#3a7bd5]', // Cyan
      desc: 'آخر الأخبار والإعلانات المهمة',
      link: '/news',
      priority: 1
    },
    { 
      id: 3, 
      title: 'المستشفيات', 
      icon: Hospital, 
      color: 'from-[#4facfe] to-[#00f2fe]', // Light Cyan
      desc: 'دليل المستشفيات والأطباء',
      link: '/hospitals'
    },
    { 
      id: 4, 
      title: 'السفارات', 
      icon: Globe, 
      color: 'from-[#667eea] to-[#764ba2]', // Purple
      desc: 'معلومات الاتصال والمواعيد',
      link: '/embassies'
    },
    { 
      id: 5, 
      title: 'الاستمارات والتقديم الإلكتروني للإقامة والتدرس', 
      icon: FileText, 
      color: 'from-[#1e3c72] to-[#2a5298]', // Dark Blue
      desc: 'جميع الاستمارات',
      link: '/forms'
    },
    { 
      id: 6, 
      title: 'الكتب', 
      icon: BookOpen, 
      color: 'from-[#00d2ff] to-[#3a7bd5]', // Cyan
      desc: 'كتب دراسية شاملة',
      link: '/library'
    },
  ];

  // 4 Quick Links
  const quickLinks = [
    { title: 'كيف يلتحق الطالب الجديد؟', link: '/verification' },
    { title: 'نتائج السابقة لمتقدم ثاني', link: '/archive' },
    { title: 'الفيديوهات التعليمية', link: '/videos' },
    { title: 'المنح الدراسية', link: '/scholarships' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section - Dark Blue & Cyan Gradient */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            مرحباً بك في <span className="text-[#00d2ff]">Campus Dirasah</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            منصتك الشاملة لجميع الخدمات الطلابية والمعلومات الأكاديمية
          </p>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="py-8 px-4">
        <AnnouncementSection />
      </div>

      {/* Main Features Grid - 3D Tilt Effect */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">الخدمات المتاحة</h2>
          <p className="text-gray-600 text-lg">اختر الخدمة التي تحتاجها</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.id}
                href={feature.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 card-3d-tilt"
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
                <div className={`bg-gradient-to-br ${feature.color} p-8 text-center relative overflow-hidden transition-all duration-500`}>
                  {/* Floating decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>
                  
                  {/* Icon with animation */}
                  <Icon className="text-white mx-auto mb-4 relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" size={48} />
                  
                  <h3 className="text-2xl font-bold text-white relative z-10 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="bg-white p-6 relative z-20">
                  <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-gray-800">{feature.desc}</p>
                  <div className="flex items-center justify-between text-[#00d2ff] font-bold transition-all duration-300 group-hover:translate-x-[-8px]">
                    <span>اضغط للدخول</span>
                    <ChevronLeft size={20} className="group-hover:animate-bounce" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Al-Azhar History Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/history"
          className="group block bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={32} />
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">تاريخ جامعة الأزهر الشريف</h3>
                <p className="text-gray-600">اكتشف تاريخ أعرق جامعة في العالم الإسلامي</p>
              </div>
            </div>
            <ChevronLeft className="text-amber-600 group-hover:translate-x-[-8px] transition-transform" size={32} />
          </div>
        </Link>

        {/* Important Places Section */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-right">مواقع الأماكن الهامة</h3>
          <p className="text-gray-600 text-right">قريباً: معلومات عن أهم الأماكن والمواقع</p>
        </div>
      </div>

      {/* Quick Links Section - 3D Tilt Effect */}
      <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">روابط سريعة</h2>
            <p className="text-white/80 text-lg">الوصول السريع للخدمات الأكثر استخداماً</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border-t-4 border-[#00d2ff] relative overflow-hidden card-3d-tilt"
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
                  const rotateX = (y - centerY) / 8;
                  const rotateY = (centerX - x) / 8;
                  
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08)`;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2 relative z-10">{link.title}</h3>
                <div className="flex items-center text-[#00d2ff] font-medium relative z-10">
                  <span className="text-sm">انتقل</span>
                  <ArrowLeft size={16} className="mr-1 group-hover:animate-pulse" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Highlight - 3D Tilt Effect */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">خصائص الموقع</h2>
            <p className="text-gray-600 text-lg">نوفر لك أفضل الخدمات الطلابية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="group bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden card-3d-tilt"
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">سهولة الوصول</h3>
              <p className="text-gray-600 relative z-10">
                جميع الخدمات والمعلومات في مكان واحد سهل الاستخدام
              </p>
            </div>

            <div 
              className="group bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden card-3d-tilt"
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">مجتمع طلابي</h3>
              <p className="text-gray-600 relative z-10">
                تواصل مع الطلاب من جميع أنحاء العالم
              </p>
            </div>

            <div 
              className="group bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden card-3d-tilt"
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">خدمات شاملة</h3>
              <p className="text-gray-600 relative z-10">
                من السكن إلى الدراسة، نوفر كل ما تحتاجه
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#4facfe] rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            هل لديك أي اقتراحات؟
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            يمكنك إخبارنا برأيك حول النظام، المشاكل التي تواجهها، وكيفية تحسين الخدمات
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-[#00d2ff] px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            أرسل ملاحظاتك
          </Link>
        </div>
      </div>
    </div>
  );
}