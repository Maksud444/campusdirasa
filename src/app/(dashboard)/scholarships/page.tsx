'use client';

import Link from 'next/link';
import { GraduationCap, Calendar, Users, MapPin, Award, Clock, ArrowLeft, TrendingUp } from 'lucide-react';

export default function ScholarshipsPage() {
  const scholarships = [
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
      description: 'منحة مخصصة للطلاب المتفوقين أكاديمياً في جميع التخصصات',
      bgGradient: 'from-[#00d2ff] to-[#3a7bd5]',
      spots: 50,
      requirements: ['معدل 85% فأعلى', 'شهادة حسن سير وسلوك', 'رسالة تحفيزية']
    },
    {
      id: 2,
      title: 'منحة البحث العلمي',
      titleEn: 'Scientific Research Scholarship',
      provider: 'وزارة التعليم العالي',
      country: 'مصر',
      flag: '🇪🇬',
      amount: '8000 جنيه / سنة',
      deadline: '2025-04-30',
      startDate: '2025-03-01',
      duration: '2-3 سنوات',
      level: 'ماجستير / دكتوراه',
      eligibleFor: ['طلاب الدراسات العليا', 'الباحثون', 'تخصصات علمية'],
      description: 'منحة مقدمة للباحثين في مجالات العلوم والتكنولوجيا',
      bgGradient: 'from-[#1e3a8a] to-[#3b82f6]',
      spots: 30,
      requirements: ['مشروع بحثي معتمد', 'معدل 80% فأعلى', 'خطاب توصية']
    },
    {
      id: 3,
      title: 'منحة الطلاب الدوليين',
      titleEn: 'International Students Scholarship',
      provider: 'المجلس الأعلى للجامعات',
      country: 'مصر',
      flag: '🇪🇬',
      amount: '6000 جنيه / سنة',
      deadline: '2025-05-20',
      startDate: '2025-04-01',
      duration: '4 سنوات',
      level: 'بكالوريوس',
      eligibleFor: ['الطلاب الوافدون', 'من خارج مصر', 'جميع الجنسيات'],
      description: 'منحة دراسية للطلاب الدوليين القادمين للدراسة في مصر',
      bgGradient: 'from-[#0891b2] to-[#06b6d4]',
      spots: 100,
      requirements: ['جواز سفر ساري', 'شهادة الثانوية العامة', 'إثبات إتقان اللغة العربية']
    },
    {
      id: 4,
      title: 'منحة الأيتام والمحتاجين',
      titleEn: 'Orphans & Needy Students Scholarship',
      provider: 'الجمعيات الخيرية',
      country: 'مصر',
      flag: '🇪🇬',
      amount: '4000 جنيه / سنة',
      deadline: '2025-06-10',
      startDate: '2025-05-01',
      duration: '4 سنوات',
      level: 'جميع المراحل',
      eligibleFor: ['الطلاب الأيتام', 'الأسر المحتاجة', 'ذوي الدخل المحدود'],
      description: 'منحة اجتماعية لدعم الطلاب من الفئات المحتاجة',
      bgGradient: 'from-[#1e40af] to-[#2563eb]',
      spots: 200,
      requirements: ['شهادة يتم', 'بحث اجتماعي', 'إثبات الحالة المادية']
    },
    {
      id: 5,
      title: 'منحة التميز الرياضي',
      titleEn: 'Sports Excellence Scholarship',
      provider: 'وزارة الشباب والرياضة',
      country: 'مصر',
      flag: '🇪🇬',
      amount: '3500 جنيه / سنة',
      deadline: '2025-07-15',
      startDate: '2025-06-01',
      duration: '4 سنوات',
      level: 'بكالوريوس',
      eligibleFor: ['الرياضيون المتميزون', 'حاملو الميداليات', 'أعضاء المنتخبات'],
      description: 'منحة للرياضيين المتميزين في مختلف الألعاب الرياضية',
      bgGradient: 'from-[#0c4a6e] to-[#0369a1]',
      spots: 40,
      requirements: ['شهادة رياضية معتمدة', 'إنجازات رياضية موثقة', 'لياقة بدنية']
    },
    {
      id: 6,
      title: 'منحة الإبداع والابتكار',
      titleEn: 'Innovation & Creativity Scholarship',
      provider: 'أكاديمية البحث العلمي',
      country: 'مصر',
      flag: '🇪🇬',
      amount: '7000 جنيه / سنة',
      deadline: '2025-08-30',
      startDate: '2025-07-01',
      duration: '3-4 سنوات',
      level: 'بكالوريوس / ماجستير',
      eligibleFor: ['المخترعون', 'المبدعون', 'أصحاب المشاريع'],
      description: 'منحة لدعم الطلاب المبدعين وأصحاب الأفكار الابتكارية',
      bgGradient: 'from-[#164e63] to-[#0891b2]',
      spots: 25,
      requirements: ['مشروع ابتكاري', 'براءة اختراع أو فكرة مميزة', 'عرض تقديمي']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <GraduationCap className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            المنح الدراسية
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            اكتشف جميع المنح الدراسية المتاحة وقدم طلبك الآن
          </p>
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship) => (
            <Link
              key={scholarship.id}
              href={`/scholarships/${scholarship.id}`}
              className="group bg-white border-2 border-gray-200 hover:border-[#00d2ff] rounded-2xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${scholarship.bgGradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <Award className="text-white/90" size={32} />
                    <span className="text-4xl">{scholarship.flag}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 line-clamp-2 min-h-[3.5rem]">
                    {scholarship.title}
                  </h3>
                  <p className="text-white/80 text-sm">{scholarship.titleEn}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <GraduationCap size={18} className="text-[#00d2ff]" />
                  <span className="text-gray-700 font-medium text-sm">{scholarship.provider}</span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">المبلغ:</span>
                    <span className="font-bold text-[#00d2ff]">{scholarship.amount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">المقاعد:</span>
                    <span className="font-bold text-blue-600">{scholarship.spots} مقعد</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">المستوى:</span>
                    <span className="font-medium text-gray-800">{scholarship.level}</span>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-red-600" />
                    <div className="flex-1">
                      <p className="text-xs text-red-600 font-medium">آخر موعد للتقديم</p>
                      <p className="text-sm font-bold text-red-700">
                        {new Date(scholarship.deadline).toLocaleDateString('ar-EG', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {scholarship.eligibleFor.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                    {scholarship.eligibleFor.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{scholarship.eligibleFor.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-[#00d2ff] font-bold group-hover:gap-2 flex items-center gap-1 transition-all">
                    <span>التفاصيل الكاملة</span>
                    <ArrowLeft size={18} className="group-hover:translate-x-[-4px] transition-transform" />
                  </span>
                  <TrendingUp size={20} className="text-[#00d2ff]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}