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
      color: 'from-emerald-500 to-emerald-600',
      desc: 'إقامات، غرف، امتحانات',
      link: '/qawaaim'
    },
    { 
      id: 2, 
      title: 'الأخبار', 
      icon: Newspaper, 
      color: 'from-blue-500 to-indigo-600',
      desc: 'آخر الأخبار والإعلانات المهمة',
      link: '/news',
      priority: 1
    },
    { 
      id: 3, 
      title: 'المستشفيات', 
      icon: Hospital, 
      color: 'from-green-500 to-green-600',
      desc: 'دليل المستشفيات والأطباء',
      link: '/hospitals'
    },
    { 
      id: 4, 
      title: 'السفارات', 
      icon: Globe, 
      color: 'from-teal-500 to-teal-600',
      desc: 'معلومات الاتصال والمواعيد',
      link: '/embassies'
    },
    { 
      id: 5, 
      title: 'النماذج الرسمية', 
      icon: FileText, 
      color: 'from-lime-500 to-lime-600',
      desc: 'جميع النماذج المطلوبة',
      link: '/forms'
    },
    { 
      id: 6, 
      title: 'الكتب', 
      icon: BookOpen, 
      color: 'from-emerald-600 to-green-600',
      desc: 'كتب دراسية شاملة',
      link: '/library'
    },
  ];

  // 4 Quick Links
  const quickLinks = [
    { title: 'التحقق من طلب جديد', link: '/verification' },
    { title: 'أرشيف متقدم ثاني', link: '/archive' },
    { title: 'الفيديوهات التعليمية', link: '/videos' },
    { title: 'المنح الدراسية', link: '/scholarships' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            مرحباً بك في Campus Dirasah
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            منصتك الشاملة لجميع الخدمات الطلابية والمعلومات الأكاديمية
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/qawaaim"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              استكشف الخدمات
            </Link>
            <Link
              href="/news"
              className="bg-emerald-600 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105"
            >
              آخر الأخبار
            </Link>
          </div>
        </div>
      </div>

      {/* Announcement Section - WITH PADDING */}
      <div className="py-8 px-4">
        <AnnouncementSection />
      </div>



      {/* Main Features Grid */}
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${feature.color} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <Icon className="text-white mx-auto mb-4 relative z-10" size={48} />
                  <h3 className="text-2xl font-bold text-white relative z-10">
                    {feature.title}
                  </h3>
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-600 mb-4">{feature.desc}</p>
                  <div className="flex items-center justify-between text-emerald-600 font-bold group-hover:translate-x-[-4px] transition-transform">
                    <span>اضغط للدخول</span>
                    <ChevronLeft size={20} />
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

      {/* Quick Links Section - 4 LINKS */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">روابط سريعة</h2>
            <p className="text-gray-600 text-lg">الوصول السريع للخدمات الأكثر استخداماً</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-emerald-500"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{link.title}</h3>
                <div className="flex items-center text-emerald-600 font-medium">
                  <span className="text-sm">انتقل</span>
                  <ArrowLeft size={16} className="mr-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">خصائص الموقع</h2>
            <p className="text-gray-600 text-lg">نوفر لك أفضل الخدمات الطلابية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">سهولة الوصول</h3>
              <p className="text-gray-600">
                جميع الخدمات والمعلومات في مكان واحد سهل الاستخدام
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">مجتمع طلابي</h3>
              <p className="text-gray-600">
                تواصل مع الطلاب من جميع أنحاء العالم
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">خدمات شاملة</h3>
              <p className="text-gray-600">
                من السكن إلى الدراسة، نوفر كل ما تحتاجه
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
هل لديك أي نصائح لتحسين عملنا؟          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            يمكنك إخبارنا برأيك حول النظام، المشاكل التي تواجهها، وكيفية تحسين الخدمات
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            أرسل ملاحظاتك
          </Link>
        </div>
      </div>
    </div>
  );
}








