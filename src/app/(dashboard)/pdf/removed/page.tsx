'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserX, Eye, Download, ChevronLeft, Calendar, User, AlertTriangle } from 'lucide-react';

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
  period: string;
  students: number;
  pdfUrl: string;
  coverEmoji: string;
};

export default function RemovedPDFPage() {
  const [selectedPDF, setSelectedPDF] = useState<PDF | null>(null);

  // PDF data - المفصولات
  const pdfList: PDF[] = [
    {
      id: 1,
      title: 'قائمة المفصولات - الفصل الأول',
      titleEn: 'Removed Students - Semester 1',
      date: '2025-01-20',
      period: 'الفصل الأول 2025',
      students: 25,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📋'
    },
    {
      id: 2,
      title: 'قائمة المفصولات - الفصل الثاني',
      titleEn: 'Removed Students - Semester 2',
      date: '2025-06-20',
      period: 'الفصل الثاني 2025',
      students: 18,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📋'
    },
    {
      id: 3,
      title: 'قائمة المفصولات - نهاية العام',
      titleEn: 'Removed Students - End of Year',
      date: '2025-07-30',
      period: 'نهاية العام 2025',
      students: 32,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📋'
    },
    {
      id: 4,
      title: 'قائمة المفصولات - الغياب',
      titleEn: 'Removed Students - Absence',
      date: '2025-03-15',
      period: 'الفصل الأول',
      students: 15,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📋'
    },
    {
      id: 5,
      title: 'قائمة المفصولات - التحصيل الدراسي',
      titleEn: 'Removed Students - Academic Performance',
      date: '2025-02-10',
      period: 'الفصل الأول',
      students: 20,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📋'
    },
    {
      id: 6,
      title: 'قائمة المفصولات - السلوك',
      titleEn: 'Removed Students - Conduct',
      date: '2025-04-05',
      period: 'الفصل الثاني',
      students: 8,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '📋'
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
          <Link href="/qawaaim" className="text-slate-600 hover:underline">
            القوائم
          </Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">المفصولات</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-6xl">📋</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                قوائم المفصولات
              </h1>
              <p className="text-white/90 text-lg">
                قوائم الطلاب المستبعدين لأسباب مختلفة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Warning Banner */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-2">تنبيه هام</h3>
              <p className="text-amber-800 text-sm">
                هذه القوائم رسمية وتحتوي على أسماء الطلاب المستبعدين. في حالة وجود اعتراض أو استفسار، يرجى التواصل مع الإدارة فوراً.
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
              <div className="bg-gradient-to-br from-slate-500 to-slate-600 p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="text-6xl mb-3 relative z-10">{pdf.coverEmoji}</div>
                <h3 className="text-lg font-bold text-white relative z-10 drop-shadow-lg">
                  {pdf.period}
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
                    <Calendar size={16} className="text-slate-600" />
                    <span className="text-gray-600">
                      {new Date(pdf.date).toLocaleDateString('ar-EG')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} className="text-slate-600" />
                    <span className="text-gray-600">{pdf.students} طالب</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewPDF(pdf)}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-600 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
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
            <UserX className="text-gray-400 mx-auto mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد قوائم متاحة حالياً</h3>
            <p className="text-gray-500">سيتم إضافة القوائم عند الحاجة</p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-10 text-center shadow-xl">
          <UserX className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            لديك استفسار أو اعتراض؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا كان لديك اعتراض على قرار الفصل أو تحتاج لمزيد من المعلومات، تواصل مع الإدارة
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-slate-700 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل مع الإدارة
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