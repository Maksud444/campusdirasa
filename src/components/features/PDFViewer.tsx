'use client';

import { X, ZoomIn, ZoomOut } from 'lucide-react';
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
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" dir="rtl">
      <div className="bg-white w-full max-w-6xl h-[90vh] rounded-xl overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              title="إغلاق"
            >
              <X size={20} />
            </button>
            <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          </div>

          {/* Controls - Zoom Only */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              title="تصغير"
              disabled={zoom <= 50}
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-sm font-medium text-gray-600 min-w-[60px] text-center">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              title="تكبير"
              disabled={zoom >= 200}
            >
              <ZoomIn size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div 
            className="mx-auto bg-white shadow-lg"
            style={{ 
              width: `${zoom}%`,
              minHeight: '100%'
            }}
          >
            <iframe
              src={`${pdfUrl}#view=FitH`}
              className="w-full h-full min-h-[800px]"
              title={title}
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 text-center">
          <p className="text-sm text-gray-600">
            استخدم أزرار التكبير/التصغير للتحكم في العرض
          </p>
        </div>
      </div>
    </div>
  );
}