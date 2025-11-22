'use client';

import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { useState } from 'react';

type PDFViewerProps = {
  pdfUrl: string;
  title: string;
  onClose: () => void;
};

export default function PDFViewer({ pdfUrl, title, onClose }: PDFViewerProps) {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    if (zoom < 200) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 10);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex z-50" dir="rtl">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] border-b-4 border-[#00d2ff]">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="group flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform" />
              <span className="font-bold">إغلاق</span>
            </button>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Maximize2 className="text-[#00d2ff]" size={20} />
              <h3 className="font-bold text-xl text-white">{title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <button
              onClick={handleZoomOut}
              className="flex items-center gap-2 bg-[#00d2ff] hover:bg-[#00bfe6] text-white px-4 py-2 rounded-lg transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
              disabled={zoom <= 50}
            >
              <ZoomOut size={20} />
              <span>تصغير</span>
            </button>
            
            <div className="bg-white px-4 py-2 rounded-lg">
              <span className="text-lg font-bold text-gray-800 min-w-[70px] text-center inline-block">
                {zoom}%
              </span>
            </div>
            
            <button
              onClick={handleZoomIn}
              className="flex items-center gap-2 bg-[#00d2ff] hover:bg-[#00bfe6] text-white px-4 py-2 rounded-lg transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
              disabled={zoom >= 200}
            >
              <ZoomIn size={20} />
              <span>تكبير</span>
            </button>
          </div>
        </div>

        {/* PDF Viewer - Full native controls */}
        <div className="flex-1 bg-gray-800 overflow-hidden">
          <div style={{ 
            width: '100%', 
            height: '100%',
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center'
          }}>
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full"
              style={{ minHeight: '100vh' }}
            >
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title={title}
              />
            </object>
          </div>
        </div>
      </div>

      {/* Empty Ad Space */}
      <div className="w-80 bg-gray-100 border-l-4 border-[#00d2ff]"></div>
    </div>
  );
}