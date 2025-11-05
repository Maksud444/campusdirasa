'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import {
  Bell, Search, User, ChevronDown, Home, FileText, Hospital, Globe, BookOpen,
  GraduationCap, Video, Archive, MessageSquare, Upload, Newspaper
} from 'lucide-react';

export default function TopNav() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [pdfMenuOpen, setPdfMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [libraryMenuOpen, setLibraryMenuOpen] = useState(false);

  const role = (session?.user as any)?.role;

  const pdfCategories = [
    { title: 'قوائم الإقامة', href: '/pdf/iqama', icon: FileText },
    { title: 'أرقام الغرف', href: '/pdf/rooms', icon: BookOpen },
    { title: 'إعلانات الامتحانات', href: '/pdf/exams', icon: FileText },
    { title: 'المستبعدين', href: '/pdf/removed', icon: FileText },
  ];

  const servicesMenu = [
    { title: 'المستشفيات', href: '/hospitals', icon: Hospital },
    { title: 'السفارات', href: '/embassies', icon: Globe },
    { title: 'النماذج الرسمية', href: '/forms', icon: FileText },
    { title: 'المنح الدراسية', href: '/scholarships', icon: GraduationCap },
    { title: 'الفيديوهات', href: '/videos', icon: Video },
    { title: 'الأرشيف', href: '/archive', icon: Archive },
  ];

  const libraryMenu = [
    { title: 'دراسة خاصة', href: '/library/dirasa-khassa', icon: BookOpen },
    { title: 'الإعدادي', href: '/library/iedadi', icon: BookOpen },
    { title: 'الثانوي', href: '/library/thanawi', icon: BookOpen },
  ];

  // Mobile Bottom Navigation Items
  const mobileNavItems = [
    { title: 'الرئيسية', href: '/', icon: Home },
    { title: 'الأخبار', href: '/news', icon: Newspaper },
    { title: 'قوائم', href: '/qawaaim', icon: FileText },
    { title: 'الخدمات', href: '/hospitals', icon: Hospital },
    { title: 'المزيد', href: '/feedback', icon: MessageSquare },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow">
                <BookOpen className="text-white" size={20} />
              </div>
              <span className="text-lg sm:text-xl font-bold hidden sm:block">كامبوس دراسة</span>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {/* Home */}
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                <Home size={18} />
                <span className="font-medium">الرئيسية</span>
              </Link>

              {/* News */}
              <Link
                href="/news"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                <Newspaper size={18} />
                <span className="font-medium">الأخبار</span>
              </Link>

              {/* PDF Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onMouseEnter={() => setPdfMenuOpen(true)}
                >
                  <FileText size={18} />
                  <span className="font-medium">قوائم PDF</span>
                  <ChevronDown size={14} />
                </button>
                
                {pdfMenuOpen && (
                  <div
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                    onMouseLeave={() => setPdfMenuOpen(false)}
                  >
                    {pdfCategories.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        <item.icon size={16} />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onMouseEnter={() => setServicesMenuOpen(true)}
                >
                  <Hospital size={18} />
                  <span className="font-medium">الخدمات</span>
                  <ChevronDown size={14} />
                </button>
                
                {servicesMenuOpen && (
                  <div
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    {servicesMenu.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        <item.icon size={16} />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Library Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onMouseEnter={() => setLibraryMenuOpen(true)}
                >
                  <BookOpen size={18} />
                  <span className="font-medium">كتب</span>
                  <ChevronDown size={14} />
                </button>
                
                {libraryMenuOpen && (
                  <div
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                    onMouseLeave={() => setLibraryMenuOpen(false)}
                  >
                    {libraryMenu.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        <item.icon size={16} />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Feedback */}
              <Link
                href="/feedback"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                <MessageSquare size={18} />
                <span className="font-medium">الملاحظات</span>
              </Link>

              {/* Upload (for teachers/admins) */}
              {(role === 'teacher' || role === 'admin') && (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  <Upload size={18} />
                  <span className="font-medium">رفع ملفات</span>
                </Link>
              )}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:block p-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">
                <Search size={18} />
              </button>
              
              <button className="hidden md:block relative p-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {session ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all"
                  >
                    <User size={16} />
                    <span className="hidden lg:inline">{session.user?.name || 'المستخدم'}</span>
                    <ChevronDown size={14} />
                  </button>

                  {userMenuOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setUserMenuOpen(false)}
                      />
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100 z-20">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                          <p className="text-xs text-gray-500">{session.user?.email}</p>
                        </div>
                        <Link 
                          href="/profile" 
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-emerald-50 transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User size={16} />
                          <span>الملف الشخصي</span>
                        </Link>
                        <div className="border-t border-gray-100 my-1" />
                        <button 
                          onClick={() => {
                            setUserMenuOpen(false);
                            signOut();
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <span>تسجيل الخروج</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link 
                  href="/login" 
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  <User size={16} />
                  <span className="hidden sm:inline">تسجيل الدخول</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl pb-safe">
        <div className="grid grid-cols-5 gap-1">
          {mobileNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-1 transition-all ${
                  active 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <item.icon 
                  size={22} 
                  className={active ? 'mb-1' : 'mb-1'} 
                  strokeWidth={active ? 2.5 : 2}
                />
                <span className={`text-xs font-medium ${active ? 'font-bold' : ''}`}>
                  {item.title}
                </span>
                {active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-emerald-600 rounded-t-full"></div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}