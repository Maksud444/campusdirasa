"use client";

import React, { use, useState } from 'react';
import { Menu, X, Download, FileText, Building2, Hospital, Globe, BookOpen, GraduationCap, MessageSquare, Video, ChevronDown, ChevronLeft, User, Settings, LogOut, Upload, Bell, ArrowLeft, Search, Home } from 'lucide-react';

const CampusDirasa = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [pdfMenuOpen, setPdfMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [libraryMenuOpen, setLibraryMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState('user'); // 'user', 'teacher', 'admin'

  const pdfCategories = [
    { id: 1, title: 'قوائم الإقامة', href: '/pdf/iqama', icon: FileText },
    { id: 2, title: 'أرقام الغرف', href: '/pdf/rooms', icon: Building2 },
    { id: 3, title: 'إعلانات الامتحانات', href: '/pdf/exams', icon: BookOpen },
    { id: 4, title: 'المستبعدين', href: '/pdf/removed', icon: FileText },
  ];

  const servicesMenu = [
    { id: 1, title: 'المستشفيات', href: '/hospitals', icon: Hospital },
    { id: 2, title: 'السفارات', href: '/embassies', icon: Globe },
    { id: 3, title: 'النماذج الرسمية', href: '/forms', icon: FileText },
    { id: 4, title: 'المنح الدراسية', href: '/scholarships', icon: GraduationCap },
    { id: 5, title: 'الفيديوهات التعليمية', href: '/videos', icon: Video },
    { id: 6, title: 'أرشيف متقدم ثاني', href: '/archive', icon: BookOpen },
  ];

  const libraryMenu = [
    { id: 1, title: 'دراسة خاصة', href: '/books/dirasa-khassa', icon: BookOpen },
    { id: 2, title: 'كتب إعدادي', href: '/books/iedadi', icon: BookOpen },
    { id: 3, title: 'كتب ثانوي', href: '/books/thanawi', icon: BookOpen },
  ];

  const features = [
    { 
      id: 1, 
      title: 'قوائم PDF', 
      icon: FileText, 
      color: 'from-emerald-500 to-emerald-600',
      desc: 'إقامات، غرف، امتحانات',
      link: '/pdf'
    },
    { 
      id: 2, 
      title: 'المستشفيات', 
      icon: Hospital, 
      color: 'from-green-500 to-green-600',
      desc: 'دليل المستشفيات والأطباء',
      link: '/hospitals'
    },
    { 
      id: 3, 
      title: 'السفارات', 
      icon: Globe, 
      color: 'from-teal-500 to-teal-600',
      desc: 'معلومات الاتصال والمواعيد',
      link: '/embassies'
    },
    { 
      id: 4, 
      title: 'النماذج الرسمية', 
      icon: FileText, 
      color: 'from-lime-500 to-lime-600',
      desc: 'جميع النماذج المطلوبة',
      link: '/forms'
    },
    { 
      id: 5, 
      title: 'المكتبة', 
      icon: BookOpen, 
      color: 'from-emerald-600 to-green-600',
      desc: 'كتب دراسية شاملة',
      link: '/library'
    },
    { 
      id: 6, 
      title: 'المنح الدراسية', 
      icon: GraduationCap, 
      color: 'from-teal-600 to-emerald-600',
      desc: 'فرص دراسية مجانية',
      link: '/scholarships'
    },
  ];

  const quickLinks = [
    { title: 'التحقق من طلب جديد', link: '/verification', color: 'emerald' },
    { title: 'أرشيف متقدم ثاني', link: '/archive', color: 'green' },
    { title: 'الفيديوهات التعليمية', link: '/videos', color: 'teal' },
    { title: 'إرسال ملاحظة', link: '/feedback', color: 'lime' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Top Navigation Bar */}
     

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:mr-72' : 'lg:mr-0'}`}>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 py-20 px-4 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              منصة خدمات الطلاب المتكاملة
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md max-w-3xl mx-auto">
              كل ما تحتاجه في مكان واحد - إقامات، نماذج، مستشفيات، سفارات، ومكتبة شاملة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/services" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                استكشف الخدمات
              </a>
              <a href="/verification" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all">
                التحقق من الطلب
              </a>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">الخدمات الرئيسية</h2>
            <p className="text-gray-600 text-lg">اختر الخدمة التي تحتاجها</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <a
                key={feature.id}
                href={feature.link}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft size={18} className="group-hover:translate-x-[-4px] transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">روابط سريعة</h2>
              <p className="text-gray-600 text-lg">الوصول السريع للخدمات الأكثر استخداماً</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.link}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-emerald-500"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{link.title}</h3>
                  <div className="flex items-center text-emerald-600 font-medium">
                    <span className="text-sm">انتقل</span>
                    <ArrowLeft size={16} className="mr-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هل تحتاج مساعدة؟</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              فريقنا جاهز لمساعدتك في أي استفسار أو مشكلة تواجهها
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/feedback" className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:shadow-xl transition-all font-semibold">
                إرسال رسالة
              </a>
              <a href="/videos" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all font-semibold">
                شاهد الفيديوهات التعليمية
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <span className="text-xl font-bold">كامبوس دراسة</span>
                </div>
                <p className="text-gray-400">
                  منصة شاملة لخدمات الطلاب في مصر
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">قوائم PDF</h3>
                <ul className="space-y-2 text-gray-400">
                  {pdfCategories.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <a href={item.href} className="hover:text-emerald-400 transition-colors">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">الخدمات</h3>
                <ul className="space-y-2 text-gray-400">
                  {servicesMenu.slice(0, 4).map((item) => (
                    <li key={item.id}>
                      <a href={item.href} className="hover:text-emerald-400 transition-colors">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
                <p className="text-gray-400 mb-2">support@campusdirasa.com</p>
                <p className="text-gray-400 mb-4">+20 123 456 7890</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">© 2025 كامبوس دراسة. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CampusDirasa;
