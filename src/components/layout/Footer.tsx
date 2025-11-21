'use client';

import Link from 'next/link';
import { BookOpen, FileText, Building2, Hospital, Globe, Newspaper, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const pdfCategories = [
    { id: 1, title: 'قوائم الإقامة', href: '/pdf/iqama', icon: FileText },
    { id: 2, title: 'أرقام الغرف', href: '/pdf/rooms', icon: Building2 },
    { id: 3, title: 'أسماء الامتحانات', href: '/pdf/exams', icon: BookOpen },
  ];

  const services = [
    { id: 1, title: 'المستشفيات', href: '/hospitals', icon: Hospital },
    { id: 2, title: 'السفارات', href: '/embassies', icon: Globe },
    { id: 3, title: 'الأخبار', href: '/news', icon: Newspaper },
    { id: 4, title: 'النماذج', href: '/forms', icon: FileText },
  ];

  const quickLinks = [
    { title: 'الكتب', href: '/library' },
    { title: 'الفيديوهات', href: '/videos' },
    { title: 'المنح الدراسية', href: '/scholarships' },
    { title: 'تواصل معنا', href: '/feedback' },
  ];

  return (
    <footer className="bg-[#1F3942] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#00d2ff] rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">كامبوس دراسة</span>
            </div>
            <p className="text-white/70 mb-4">
              منصة شاملة لخدمات الطلاب في مصر
            </p>
            <div className="flex flex-col gap-2 text-white/60 text-sm">
              <a href="mailto:campusdirasa@gmail.com" className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors">
                <Mail size={16} />
                <span>campusdirasa@gmail.com</span>
              </a>
              <a href="tel:+201234567890" className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors">
                <Phone size={16} />
                <span dir="ltr">+20 123 456 7890</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>القاهرة، مصر</span>
              </div>
            </div>
          </div>
          
          {/* PDF Lists */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#00d2ff]">قوائم PDF</h3>
            <ul className="space-y-2">
              {pdfCategories.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href} 
                    className="text-white/70 hover:text-[#00d2ff] transition-colors flex items-center gap-2 group"
                  >
                    <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#00d2ff]">الخدمات</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href} 
                    className="text-white/70 hover:text-[#00d2ff] transition-colors flex items-center gap-2 group"
                  >
                    <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#00d2ff]">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-[#00d2ff] transition-colors inline-block hover:translate-x-[-4px] transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 كامبوس دراسة. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-[#00d2ff] transition-colors">
                سياسة الخصوصية
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/terms" className="text-white/60 hover:text-[#00d2ff] transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}