'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Eye, Download, ChevronLeft, Calendar, User, Hash } from 'lucide-react';

// PDF Viewer Component (Simple version - আপনার বিদ্যমান PDFViewer component ব্যবহার করুন)
function PDFViewer({ pdfUrl, title, onClose }: { pdfUrl: string; title: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        {/* PDF Iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}

type PDF = {
  id: number;
  title: string;
  titleEn: string;
  date: string;
  level: string;
  students: number;
  pdfUrl: string;
  coverEmoji: string;
};

export default function IqamaPDFPage() {
  const [selectedPDF, setSelectedPDF] = useState<PDF | null>(null);

  // PDF data - قوائم الإقامة
  const pdfList: PDF[] = [
    {
      id: 1,
      title: 'قائمة إقامة - المبتدئ الأول',
      titleEn: 'Iqama List - Beginner 1',
      date: '2025-01-15',
      level: 'المبتدئ الأول',
      students: 120,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📄'
    },
    {
      id: 2,
      title: 'قائمة إقامة - المبتدئ الثاني',
      titleEn: 'Iqama List - Beginner 2',
      date: '2025-01-15',
      level: 'المبتدئ الثاني',
      students: 115,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📄'
    },
    {
      id: 3,
      title: 'قائمة إقامة - المتوسط الأول',
      titleEn: 'Iqama List - Intermediate 1',
      date: '2025-01-15',
      level: 'المتوسط الأول',
      students: 105,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📄'
    },
    {
      id: 4,
      title: 'قائمة إقامة - المتوسط الثاني',
      titleEn: 'Iqama List - Intermediate 2',
      date: '2025-01-15',
      level: 'المتوسط الثاني',
      students: 98,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📄'
    },
    {
      id: 5,
      title: 'قائمة إقامة - المتقدم الأول',
      titleEn: 'Iqama List - Advanced 1',
      date: '2025-01-15',
      level: 'المتقدم الأول',
      students: 87,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📄'
    },
    {
      id: 6,
      title: 'قائمة إقامة - المتقدم الثاني',
      titleEn: 'Iqama List - Advanced 2',
      date: '2025-01-15',
      level: 'المتقدم الثاني',
      students: 92,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📄'
    },
  ];

  const handleViewPDF = (pdf: PDF) => {
    setSelectedPDF(pdf);
  };

  const handleCloseViewer = () => {
    setSelectedPDF(null);
  };

  const handleDownload = (pdf: PDF) => {
    const link = document.createElement('a');
    link.href = pdf.pdfUrl;
    link.download = `${pdf.title}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/qawaaim" className="text-emerald-600 hover:underline">
            القوائم
          </Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">قوائم الإقامة</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-6xl">📄</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                قوائم الإقامة
              </h1>
              <p className="text-white/90 text-lg">
                جميع قوائم الإقامة الخاصة بالطلاب لجميع المستويات
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-emerald-900 text-lg mb-2">معلومات القراءة</h3>
              <p className="text-emerald-800 text-sm">
                يمكنك قراءة القوائم مباشرة في المتصفح أو تحميلها. إذا لم تجد اسمك، يرجى التواصل مع الإدارة.
              </p>
            </div>
          </div>
        </div>

        {/* PDF Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfList.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all border border-gray-100 group overflow-hidden"
            >
              {/* Card Header - Gradient */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="text-6xl mb-3 relative z-10">{pdf.coverEmoji}</div>
                <h3 className="text-lg font-bold text-white relative z-10 drop-shadow-lg">
                  {pdf.level}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {pdf.title}
                </h4>
                <p className="text-sm text-gray-500 mb-4">{pdf.titleEn}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} className="text-emerald-600" />
                    <span className="text-gray-600">
                      {new Date(pdf.date).toLocaleDateString('ar-EG')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} className="text-emerald-600" />
                    <span className="text-gray-600">{pdf.students} طالب</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewPDF(pdf)}
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium"
                  >
                    <Eye size={18} />
                    <span>عرض</span>
                  </button>
                  <button
                    onClick={() => handleDownload(pdf)}
                    className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No PDFs Message */}
        {pdfList.length === 0 && (
          <div className="text-center py-16">
            <FileText className="text-gray-400 mx-auto mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد قوائم متاحة حالياً</h3>
            <p className="text-gray-500">سيتم إضافة القوائم قريباً</p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-xl">
          <FileText className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            لم تجد اسمك في القائمة؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            تواصل مع الإدارة للحصول على المساعدة أو التأكد من بياناتك
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <PDFViewer
          pdfUrl={selectedPDF.pdfUrl}
          title={selectedPDF.title}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}
