'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserCheck, ArrowRight, Eye, Download, ChevronLeft, Calendar, User, AlertCircle } from 'lucide-react';

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
  title: string;
  titleEn: string;
  date: string;
  category: string;
  students: number;
  pdfUrl: string;
  coverEmoji: string;
};

export default function NewStudentsPage() {
  const [selectedPDF, setSelectedPDF] = useState<PDF | null>(null);

  const pdfList: PDF[] = [
    {
      id: 1,
      title: 'قائمة الطلاب المقبولين الجدد',
      titleEn: 'New Accepted Students List',
      date: '2025-01-20',
      category: 'دراسة خاصة',
      students: 150,
      pdfUrl: 'https://azharguideline.com/sixbook/rutinurdu.pdf',
      coverEmoji: '✅'
    }
  ];

  const handleViewPDF = (pdf: PDF) => setSelectedPDF(pdf);
  const handleCloseViewer = () => setSelectedPDF(null);
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
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/qawaaim" className="text-[#00d2ff] hover:underline">القوائم</Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">الطلاب الجدد المقبولين</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/qawaaim" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowRight size={20} />
            <span>العودة للقوائم</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-6xl">✅</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">أسماء الطلاب الجدد المقبولين</h1>
              <p className="text-white/90 text-lg">قائمة الطلاب الذين تم قبولهم في دراسة خاصة</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#00d2ff] rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">معلومات القائمة</h3>
              <p className="text-gray-700 text-sm">يمكنك عرض قائمة الطلاب المقبولين مباشرة في المتصفح أو تحميلها. إذا لم تجد اسمك، يرجى التواصل مع الإدارة.</p>
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
              <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-700"></div>
                <div className="text-6xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-500">{pdf.coverEmoji}</div>
                <h3 className="text-lg font-bold text-white relative z-10 drop-shadow-lg">{pdf.category}</h3>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{pdf.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{pdf.titleEn}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} className="text-[#00d2ff]" />
                    <span className="text-gray-600">{new Date(pdf.date).toLocaleDateString('ar-EG')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} className="text-[#00d2ff]" />
                    <span className="text-gray-600">{pdf.students} طالب</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => handleViewPDF(pdf)} className="flex-1 flex items-center justify-center gap-2 bg-[#00d2ff] text-white px-4 py-3 rounded-lg hover:bg-[#00b8e6] transition-colors font-medium">
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

        <div className="mt-16 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-10 text-center shadow-xl">
          <UserCheck className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">لم تجد اسمك في القائمة؟</h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">إذا لم تجد اسمك أو كان لديك أي استفسار، تواصل معنا</p>
          <Link href="/feedback" className="inline-block bg-white text-[#00d2ff] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">تواصل معنا</Link>
        </div>
      </div>

      {selectedPDF && <PDFViewer pdfUrl={selectedPDF.pdfUrl} title={selectedPDF.title} onClose={handleCloseViewer} />}
    </div>
  );
}