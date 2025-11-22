'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, FileText, ChevronLeft, ArrowRight } from 'lucide-react';
import PDFViewer from '@/components/features/PDFViewer';

type ClassItem = {
  id: number;
  className: string;
  classNameEn: string;
  icon: string;
  pdfUrl: string;
  bgGradient: string;
  bgLight: string;
  textColor: string;
  borderColor: string;
};

export default function DirasaKhassaBooksPage() {
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  const classes: ClassItem[] = [
    {
      id: 1,
      className: 'مبتدئ أول',
      classNameEn: 'Beginner Level 1',
      icon: '📗',
      pdfUrl: '/pdfs/dirasa-khassa/mubtadi-1.pdf',
      bgGradient: 'from-[#00d2ff] to-[#3a7bd5]',
      bgLight: 'bg-cyan-50',
      textColor: 'text-cyan-700',
      borderColor: 'border-cyan-300'
    },
    {
      id: 2,
      className: 'مبتدئ ثاني',
      classNameEn: 'Beginner Level 2',
      icon: '📘',
      pdfUrl: '/pdfs/dirasa-khassa/mubtadi-2.pdf',
      bgGradient: 'from-[#1e3a8a] to-[#3b82f6]',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-300'
    },
    {
      id: 3,
      className: 'متوسط أول',
      classNameEn: 'Intermediate Level 1',
      icon: '📙',
      pdfUrl: '/pdfs/dirasa-khassa/mutawasit-1.pdf',
      bgGradient: 'from-[#0891b2] to-[#06b6d4]',
      bgLight: 'bg-cyan-50',
      textColor: 'text-cyan-700',
      borderColor: 'border-cyan-300'
    },
    {
      id: 4,
      className: 'متوسط ثاني',
      classNameEn: 'Intermediate Level 2',
      icon: '📕',
      pdfUrl: '/pdfs/dirasa-khassa/mutawasit-2.pdf',
      bgGradient: 'from-[#1e40af] to-[#2563eb]',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-300'
    },
    {
      id: 5,
      className: 'متقدم أول',
      classNameEn: 'Advanced Level 1',
      icon: '📔',
      pdfUrl: '/pdfs/dirasa-khassa/mutaqadim-1.pdf',
      bgGradient: 'from-[#0c4a6e] to-[#0369a1]',
      bgLight: 'bg-sky-50',
      textColor: 'text-sky-700',
      borderColor: 'border-sky-300'
    },
    {
      id: 6,
      className: 'متقدم ثاني',
      classNameEn: 'Advanced Level 2',
      icon: '📓',
      pdfUrl: '/pdfs/dirasa-khassa/mutaqadim-2.pdf',
      bgGradient: 'from-[#164e63] to-[#0891b2]',
      bgLight: 'bg-cyan-50',
      textColor: 'text-cyan-700',
      borderColor: 'border-cyan-300'
    }
  ];

  const handleViewPDF = (classItem: ClassItem) => {
    setSelectedClass(classItem);
  };

  const handleCloseViewer = () => {
    setSelectedClass(null);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/library" className="text-[#00d2ff] hover:underline">
            الكتب
          </Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">دراسة خاصة</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة للكتب</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-6xl">📚</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                كتب دراسة خاصة
              </h1>
              <p className="text-white/90 text-lg">
                اختر الصف للوصول إلى الكتب
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#00d2ff] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">معلومات مهمة</h3>
              <p className="text-gray-700 text-sm">
                اضغط على البطاقة لعرض الكتب المتاحة للصف. يمكنك قراءة الكتب مباشرة في المتصفح.
              </p>
            </div>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              onClick={() => handleViewPDF(classItem)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border-2 border-gray-100 hover:border-[#00d2ff] cursor-pointer"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${classItem.bgGradient} p-8 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-4">{classItem.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {classItem.className}
                  </h2>
                  <p className="text-white/90 text-sm">{classItem.classNameEn}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className={`p-4 ${classItem.bgLight} rounded-xl border-2 ${classItem.borderColor} mb-4`}>
                  <div className="flex items-center justify-center gap-3">
                    <FileText className={classItem.textColor} size={24} />
                    <span className={`font-bold ${classItem.textColor} text-lg`}>
                      عرض الكتب
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center text-[#00d2ff] font-bold group-hover:gap-3 gap-2 transition-all">
                  <span>اضغط للعرض</span>
                  <ArrowRight className="group-hover:translate-x-[-4px] transition-transform" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-2xl">
          <BookOpen className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل لديك أي نصائح لتحسين عملنا؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت أي مشكلة في الوصول إلى الكتب، تواصل معنا
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-[#00d2ff] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedClass && (
        <PDFViewer
          pdfUrl={selectedClass.pdfUrl}
          title={selectedClass.className}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}