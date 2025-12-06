'use client';

import Link from 'next/link';
import { FileText, Building2, BookOpen, UserX, UserCheck } from 'lucide-react';

export default function QawaimPage() {
  const lists = [
    {
      id: 1,
      title: 'الإقامة',
      href: '/pdf/iqama',
      icon: FileText,
      color: 'from-[#1e3c72] to-[#2a5298]', // Dark Blue
      description: 'قوائم الإقامة للطلاب',
      bgColor: 'bg-blue-50',
      iconColor: 'text-[#1e3c72]'
    },
    {
      id: 2,
      title: 'أرقام الغرف',
      href: '/pdf/rooms',
      icon: Building2,
      color: 'from-[#00d2ff] to-[#3a7bd5]', // Cyan
      description: 'توزيع الطلاب على الغرف',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-[#00d2ff]'
    },
    {
      id: 3,
      title: ' نتيجة مستويات',
      href: '/pdf/exams',
      icon: BookOpen,
      color: 'from-[#4facfe] to-[#00f2fe]', // Light Cyan
      description: 'نتائج امتحانات المستويات',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-[#4facfe]'
    },
    {
      id: 4,
      title: 'المفصولات',
      href: '/pdf/removed',
      icon: UserX,
      color: 'from-[#667eea] to-[#764ba2]', // Purple
      description: 'قائمة المستبعدين',
      bgColor: 'bg-purple-50',
      iconColor: 'text-[#667eea]'
    },
    {
      id: 5,
      title: 'أسماء الطلاب الجدد',
      href: '/qawaaim/new-students',
      icon: UserCheck,
      color: 'from-[#1e3c72] to-[#2a5298]', // Dark Blue
      description: 'قائمة الطلاب المقبولين الجدد',
      bgColor: 'bg-blue-50',
      iconColor: 'text-[#1e3c72]'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            القوائم
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            اختر القائمة التي تريد الاطلاع عليها
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#00d2ff] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">معلومات مهمة</h3>
              <p className="text-gray-700">
                يمكنك الوصول إلى جميع القوائم والملفات من خلال الخيارات أدناه. اضغط على القائمة للاطلاع على التفاصيل الكاملة.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lists.map((list) => (
            <Link
              key={list.id}
              href={list.href}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-3d-tilt"
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
              <div className={`w-16 h-16 bg-gradient-to-br ${list.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                <list.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#00d2ff] transition-colors duration-300">
                {list.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {list.description}
              </p>

              <div className={`${list.bgColor} ${list.iconColor} px-4 py-2 rounded-lg text-center font-medium group-hover:shadow-md transition-all`}>
                عرض القائمة
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل لديك أي نصائح لتحسين عملنا؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا لم تجد ما تبحث عنه أو كان لديك أي استفسار، يمكنك التواصل معنا
          </p>
          <Link 
            href="/feedback"
            className="inline-block bg-white text-[#00d2ff] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}