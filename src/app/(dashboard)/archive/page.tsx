'use client';

import { useState } from 'react';
import { FileText, Download, ArrowRight, X, Eye } from 'lucide-react';
import Link from 'next/link';

export default function ArchivePage() {
  const [selectedPdf, setSelectedPdf] = useState<{url: string, title: string} | null>(null);

  // রেজাল্ট
  const results = [
    {
      id: 1,
      year: '2024',
      pdfUrl: '/results/2024-mutaqaddim2.pdf',
      icon: '📊'
    },
    {
      id: 2,
      year: '2023',
      pdfUrl: '/results/2023-mutaqaddim2.pdf',
      icon: '📋'
    }
  ];

  const openPdf = (url: string, title: string) => {
    setSelectedPdf({ url, title });
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة للرئيسية</span>
          </Link>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <FileText className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              أرشيف النتائج
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              نتائج صف متقدم ثاني - السنوات السابقة
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#00d2ff] overflow-hidden group cursor-pointer"
              onClick={() => openPdf(result.pdfUrl, `نتيجة متقدم ثاني ${result.year}`)}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] p-8 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                    {result.icon}
                  </div>
                  <div className="text-5xl font-bold mb-2">
                    {result.year}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  نتيجة متقدم ثاني
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openPdf(result.pdfUrl, `نتيجة متقدم ثاني ${result.year}`);
                    }}
                    className="flex-1 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white px-4 py-4 rounded-lg hover:shadow-lg transition-all font-bold flex items-center justify-center gap-2 text-lg"
                  >
                    <Eye size={20} />
                    <span>عرض النتيجة</span>
                  </button>
                  <a
                    href={result.pdfUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-4 rounded-lg transition-colors flex items-center justify-center"
                    title="تحميل"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" dir="rtl">
          <div className="bg-white w-full max-w-6xl h-[90vh] rounded-xl overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
              <div className="flex items-center gap-3">
                <FileText className="text-white" size={24} />
                <h3 className="font-bold text-lg text-white">{selectedPdf.title}</h3>
              </div>
              <button
                onClick={closePdf}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                title="إغلاق"
              >
                <X size={20} />
                <span className="font-bold">إغلاق</span>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-gray-100">
              <iframe
                src={selectedPdf.url}
                className="w-full h-full"
                title={selectedPdf.title}
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}