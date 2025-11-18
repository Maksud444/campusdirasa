'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  Newspaper, 
  FileText, 
  Hospital, 
  MessageSquare,
  Menu,
  X,
  Shield
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TopNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if admin logged in
  useEffect(() => {
    const adminCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('admin-session='));
    
    if (adminCookie && adminCookie.split('=')[1] === 'authenticated') {
      setIsAdmin(true);
    }
  }, []);

  const navItems = [
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

  const handleLogout = () => {
    document.cookie = 'admin-session=; path=/; max-age=0';
    window.location.href = '/';
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
                كامبوس دراسة
              </span>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {/* Home */}
              <Link
                href="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <Home size={18} />
                <span className="font-medium">الرئيسية</span>
              </Link>

              {/* News */}
              <Link
                href="/news"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/news') 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <Newspaper size={18} />
                <span className="font-medium">الأخبار</span>
              </Link>

              {/* PDF Lists */}
              <Link
                href="/qawaaim"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/qawaaim') || isActive('/pdf') 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <FileText size={18} />
                <span className="font-medium">قوائم PDF</span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                  <Hospital size={18} />
                  <span className="font-medium">الخدمات</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/hospitals" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-t-lg">
                    المستشفيات
                  </Link>
                  <Link href="/embassies" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    السفارات
                  </Link>
                  <Link href="/library" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-b-lg">
                    المكتبة
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/feedback"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/feedback') 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <MessageSquare size={18} />
                <span className="font-medium">تواصل معنا</span>
              </Link>
            </nav>

            {/* Admin Section */}
            <div className="hidden lg:flex items-center gap-3">
              {isAdmin ? (
                <>
                  <Link
                    href="/admin"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
                  >
                    <Shield size={18} />
                    <span className="font-medium">لوحة التحكم</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-gray-700 hover:text-red-600 rounded-lg transition-colors"
                  >
                    تسجيل الخروج
                  </button>
                </>
              ) : (
                <Link
                  href="/admin/login"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  <Shield size={18} />
                  <span className="font-medium">دخول المشرف</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Admin Section */}
              <div className="pt-4 border-t border-gray-200">
                {isAdmin ? (
                  <>
                    <Link
                      href="/admin"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 bg-emerald-100 text-emerald-700 rounded-lg mb-2"
                    >
                      <Shield size={20} />
                      <span className="font-medium">لوحة التحكم</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <span className="font-medium">تسجيل الخروج</span>
                    </button>
                  </>
                ) : (
                  <Link
                    href="/admin/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <Shield size={20} />
                    <span className="font-medium">دخول المشرف</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}








