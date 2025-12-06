'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Eye, Download, ChevronLeft } from 'lucide-react';

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
  className: string;
  pdfUrl: string;
  coverEmoji: string;
};

export default function ExamsPDFPage() {
  const [selectedPDF, setSelectedPDF] = useState<PDF | null>(null);

  const pdfList: PDF[] = [
    { id: 1, className: 'مبتدئ أول', pdfUrl: 'https://azharguideline.com/result.pdf', coverEmoji: '📝' },
    { id: 2, className: 'مبتدئ ثاني', pdfUrl: 'https://azharguideline.com/result.pdf', coverEmoji: '📝' },
    { id: 3, className: 'متوسط أول', pdfUrl: 'https://azharguideline.com/result.pdf', coverEmoji: '📝' },
    { id: 4, className: 'متوسط ثاني', pdfUrl: 'https://azharguideline.com/result.pdf', coverEmoji: '📝' },
    { id: 5, className: 'متقدم أول', pdfUrl: 'https://azharguideline.com/result.pdf', coverEmoji: '📝' },
    { id: 6, className: 'متقدم ثاني', pdfUrl: 'https://azharguideline.com/result.pdf', coverEmoji: '📝' }
  ];

  const handleViewPDF = (pdf: PDF) => setSelectedPDF(pdf);
  const handleCloseViewer = () => setSelectedPDF(null);
  const handleDownload = (pdf: PDF) => {
    const link = document.createElement('a');
    link.href = pdf.pdfUrl;
    link.download = `نتيجة مستويات${pdf.className}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/qawaaim" className="text-[#4facfe] hover:underline">القوائم</Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">نتيجة الامتحانات</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-6xl">📝</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">نتيجة الامتحانات</h1>
              <p className="text-white/90 text-lg">جميع نتيجة الامتحانات لجميع المستويات</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#4facfe] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">معلومات الامتحانات</h3>
              <p className="text-gray-700 text-sm">تأكد من مراجعة جدول الامتحانات والالتزام بالمواعيد المحددة. في حالة وجود استفسار، تواصل مع مكتب الامتحانات.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfList.map((pdf) => (
            <div 
              key={pdf.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden card-3d-tilt"
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
              <div className="bg-gradient-to-br from-[#4facfe] to-[#00f2fe] p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-700"></div>
                <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500">{pdf.coverEmoji}</div>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-lg mb-2">{pdf.className}</h3>
                <p className="text-lg text-white/90 relative z-10">جدول الامتحانات</p>
              </div>

              <div className="p-6">
                <div className="flex gap-2">
                  <button onClick={() => handleViewPDF(pdf)} className="flex-1 flex items-center justify-center gap-2 bg-[#4facfe] text-white px-4 py-3 rounded-lg hover:bg-[#3a8ed8] transition-colors font-medium">
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

        <div className="mt-16 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-2xl p-10 text-center shadow-xl">
          <BookOpen className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">لديك استفسار عن الامتحانات؟</h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">تواصل مع مكتب الامتحانات للحصول على المعلومات أو الإجابة على أي استفسار</p>
          <Link href="/feedback" className="inline-block bg-white text-[#4facfe] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">تواصل معنا</Link>
        </div>
      </div>

      {selectedPDF && <PDFViewer pdfUrl={selectedPDF.pdfUrl} title={`نتيجة مستويات ${selectedPDF.className}`} onClose={handleCloseViewer} />}
    </div>
  );
}