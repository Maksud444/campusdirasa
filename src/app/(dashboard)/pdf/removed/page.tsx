'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserX, Eye, Download, ChevronLeft, AlertTriangle } from 'lucide-react';

function PDFViewer({ pdfUrl, title, onClose }: { pdfUrl: string; title: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">×</button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe src={pdfUrl} className="w-full h-full" title={title} />
        </div>
      </div>
    </div>
  );
}

type PDF = {
  id: number;
  period: string;
  pdfUrl: string;
  coverEmoji: string;
};

export default function RemovedPDFPage() {
  const [selectedPDF, setSelectedPDF] = useState<PDF | null>(null);

  const pdfList: PDF[] = [
    { id: 1, period: 'الفصل الأول', pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf', coverEmoji: '📋' },
    { id: 2, period: 'الفصل الثاني', pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf', coverEmoji: '📋' },
    { id: 3, period: 'نهاية العام', pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf', coverEmoji: '📋' },
    { id: 4, period: 'الغياب', pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf', coverEmoji: '📋' },
    { id: 5, period: 'التحصيل الدراسي', pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf', coverEmoji: '📋' },
    { id: 6, period: 'السلوك', pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf', coverEmoji: '📋' }
  ];

  const handleViewPDF = (pdf: PDF) => setSelectedPDF(pdf);
  const handleCloseViewer = () => setSelectedPDF(null);
  const handleDownload = (pdf: PDF) => {
    const link = document.createElement('a');
    link.href = pdf.pdfUrl;
    link.download = `قائمة-المفصولات-${pdf.period}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/qawaaim" className="text-slate-600 hover:underline">القوائم</Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">المفصولات</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-600 to-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-6xl">📋</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">قوائم المفصولات</h1>
              <p className="text-white/90 text-lg">قوائم الطلاب المستبعدين</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-2">تنبيه هام</h3>
              <p className="text-amber-800 text-sm">هذه القوائم رسمية وتحتوي على أسماء الطلاب المستبعدين. في حالة وجود اعتراض أو استفسار، يرجى التواصل مع الإدارة فوراً.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfList.map((pdf) => (
            <div key={pdf.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all border border-gray-100 group overflow-hidden">
              <div className="bg-gradient-to-br from-slate-500 to-slate-600 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full" style={{ marginRight: '-3rem', marginTop: '-3rem' }}></div>
                <div className="text-6xl mb-4 relative z-10">{pdf.coverEmoji}</div>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-lg mb-2">{pdf.period}</h3>
                <p className="text-lg text-white/90 relative z-10">قائمة المفصولات</p>
              </div>

              <div className="p-6">
                <div className="flex gap-2">
                  <button onClick={() => handleViewPDF(pdf)} className="flex-1 flex items-center justify-center gap-2 bg-slate-600 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium">
                    <Eye size={18} />
                    <span>عرض</span>
                  </button>
                  <button onClick={() => handleDownload(pdf)} className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-10 text-center shadow-xl">
          <UserX className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">لديك استفسار أو اعتراض؟</h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">إذا كان لديك اعتراض على قرار الفصل أو تحتاج لمزيد من المعلومات، تواصل مع الإدارة</p>
          <Link href="/feedback" className="inline-block bg-white text-slate-700 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">تواصل مع الإدارة</Link>
        </div>
      </div>

      {selectedPDF && <PDFViewer pdfUrl={selectedPDF.pdfUrl} title={`قائمة المفصولات - ${selectedPDF.period}`} onClose={handleCloseViewer} />}
    </div>
  );
}