'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Download, 
  Printer, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Minimize2,
  RotateCw,
  Search,
  X,
  FileText
} from 'lucide-react';

interface PDFReaderProps {
  pdfUrl: string;
  title?: string;
}

export default function PDFReader({ pdfUrl, title = 'PDF Document' }: PDFReaderProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // PDF লোড সম্পন্ন হলে
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  // Zoom in
  const handleZoomIn = () => {
    if (zoom < 200) setZoom(zoom + 25);
  };

  // Zoom out
  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 25);
  };

  // Reset zoom
  const handleZoomReset = () => {
    setZoom(100);
  };

  // পরবর্তী পেজ
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // আগের পেজ
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Rotate PDF
  const handleRotate = () => {
    setRotation((rotation + 90) % 360);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Download PDF
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'document.pdf';
    link.click();
  };

  // Print PDF
  const handlePrint = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.print();
    }
  };

  // Search toggle
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col h-screen bg-gray-900"
      dir="rtl"
    >
      {/* Toolbar - উপরের কন্ট্রোল বার */}
      <div className="bg-gray-800 border-b border-gray-700 p-3">
        <div className="flex items-center justify-between gap-4">
          {/* বাম পাশ - নেভিগেশন */}
          <div className="flex items-center gap-2">
            {/* Page Navigation */}
            <div className="flex items-center gap-2 bg-gray-700 rounded-lg p-1">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="p-2 text-white hover:bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="الصفحة السابقة"
              >
                <ChevronRight size={20} />
              </button>
              
              <div className="flex items-center gap-2 px-3">
                <input
                  type="number"
                  value={currentPage}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= totalPages) {
                      setCurrentPage(page);
                    }
                  }}
                  className="w-16 bg-gray-800 text-white text-center rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                  max={totalPages}
                />
                <span className="text-gray-400 text-sm">/ {totalPages || '---'}</span>
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="p-2 text-white hover:bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="الصفحة التالية"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2 bg-gray-700 rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 50}
                className="p-2 text-white hover:bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="تصغير"
              >
                <ZoomOut size={20} />
              </button>
              
              <button
                onClick={handleZoomReset}
                className="px-3 py-1 text-white hover:bg-gray-600 rounded min-w-[60px] text-sm font-medium transition-colors"
                title="إعادة تعيين التكبير"
              >
                {zoom}%
              </button>

              <button
                onClick={handleZoomIn}
                disabled={zoom >= 200}
                className="p-2 text-white hover:bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="تكبير"
              >
                <ZoomIn size={20} />
              </button>
            </div>

            {/* Rotate */}
            <button
              onClick={handleRotate}
              className="p-2 bg-gray-700 text-white hover:bg-gray-600 rounded-lg transition-colors"
              title="تدوير"
            >
              <RotateCw size={20} />
            </button>
          </div>

          {/* মাঝখানে - শিরোনাম */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 text-white">
              <FileText size={20} />
              <h1 className="text-lg font-semibold truncate max-w-md">{title}</h1>
            </div>
          </div>

          {/* ডান পাশ - অ্যাকশন বাটন */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={toggleSearch}
              className={`p-2 rounded-lg transition-colors ${
                showSearch 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
              title="بحث"
            >
              <Search size={20} />
            </button>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="p-2 bg-gray-700 text-white hover:bg-gray-600 rounded-lg transition-colors"
              title="طباعة"
            >
              <Printer size={20} />
            </button>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="p-2 bg-gray-700 text-white hover:bg-gray-600 rounded-lg transition-colors"
              title="تحميل"
            >
              <Download size={20} />
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-gray-700 text-white hover:bg-gray-600 rounded-lg transition-colors"
              title={isFullscreen ? 'خروج من ملء الشاشة' : 'ملء الشاشة'}
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في المستند..."
                className="w-full bg-gray-700 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button
              onClick={toggleSearch}
              className="p-2 bg-gray-700 text-white hover:bg-gray-600 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>

      {/* PDF Viewer Area */}
      <div className="flex-1 bg-gray-900 relative overflow-auto">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-white">جاري تحميل المستند...</p>
            </div>
          </div>
        )}

        <div 
          className="flex items-center justify-center min-h-full p-4"
          style={{
            transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease'
          }}
        >
          <iframe
            ref={iframeRef}
            src={`${pdfUrl}#page=${currentPage}&zoom=${zoom}&toolbar=0&navpanes=0&scrollbar=1`}
            className="bg-white shadow-2xl"
            style={{
              width: '210mm',
              height: '297mm',
              border: 'none'
            }}
            title={title}
            onLoad={() => {
              // PDF এর total pages হিসাব করা (ডেমো - আসল implementation এ PDF.js ব্যবহার করতে হবে)
              setTotalPages(10); // Example
              setIsLoading(false);
            }}
          />
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div>
            صفحة {currentPage} من {totalPages}
          </div>
          <div className="flex items-center gap-4">
            <span>تكبير: {zoom}%</span>
            <span>تدوير: {rotation}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}




