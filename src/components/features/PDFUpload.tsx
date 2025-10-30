'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { File, Eye, Download, X } from 'lucide-react';

type PdfMeta = {
  id: string;
  filename: string;
  originalName: string;
  category: string;
  uploaderId?: string;
  uploaderName?: string;
  createdAt: string;
};

const CATEGORIES = [
  'قوائم الإقامة',
  'أرقام الغرف',
  'إعلانات الامتحانات',
  'المستبعدين',
  'المستشفيات',
  'السفارات',
  'النماذج الرسمية',
  'كتب',
];

export default function PDFUpload() {
  const { data: session, status } = useSession();
  const role = (session?.user as any)?.role as string | undefined;

  const [category, setCategory] = useState(CATEGORIES[0]);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [pdfs, setPdfs] = useState<PdfMeta[]>([]);
  const [viewer, setViewer] = useState<PdfMeta | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPDFs();
  }, []);

  async function fetchPDFs() {
    try {
      const res = await fetch('/api/pdfs');
      const data = await res.json();
      setPdfs(data || []);
    } catch (e) {
      console.error('Failed to fetch PDFs:', e);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const f = e.target.files?.[0] ?? null;
    if (f && f.type !== 'application/pdf') {
      setError('الرجاء اختيار ملف PDF فقط');
      setFile(null);
      return;
    }
    setFile(f);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!file) {
      setError('الرجاء اختيار ملف PDF');
      return;
    }

    if (!role || (role !== 'teacher' && role !== 'admin')) {
      setError('غير مسموح بالرفع');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'فشل الرفع');
      }

      setFile(null);
      if (document.getElementById('pdf-file')) {
        (document.getElementById('pdf-file') as HTMLInputElement).value = '';
      }
      await fetchPDFs();
    } catch (err: any) {
      setError(err.message || 'حدث خطأ أثناء الرفع');
    } finally {
      setUploading(false);
    }
  }

  async function handleDownload(pdf: PdfMeta) {
    try {
      const res = await fetch(`/api/files/${encodeURIComponent(pdf.filename)}?download=1`);
      if (!res.ok) throw new Error('فشل التحميل');
      
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = pdf.originalName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError('فشل تحميل الملف');
    }
  }

  if (status === 'loading') return null;

  if (!role || (role !== 'teacher' && role !== 'admin')) {
    return (
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-2">رفع ملفات PDF</h2>
        <p>خاص بالمدرّسين والمدراء فقط.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">رفع ملفات PDF</h2>

      <form onSubmit={handleUpload} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">الفئة</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">اختر ملف PDF</label>
          <input
            id="pdf-file"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={uploading}
          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50"
        >
          {uploading ? 'جاري الرفع...' : 'رفع الملف'}
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">الملفات المرفوعة</h3>
        
        <div className="space-y-2">
          {pdfs.filter(pdf => category === 'الكل' || pdf.category === category).map((pdf) => (
            <div 
              key={pdf.id} 
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-reverse space-x-3">
                <File className="text-emerald-600" size={24} />
                <div>
                  <div className="font-medium">{pdf.originalName}</div>
                  <div className="text-sm text-gray-500">
                    {pdf.category} • {new Date(pdf.createdAt).toLocaleDateString('ar-EG')}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewer(pdf)}
                  className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full"
                  title="عرض"
                >
                  <Eye size={20} />
                </button>
                <button
                  onClick={() => handleDownload(pdf)}
                  className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full"
                  title="تحميل"
                >
                  <Download size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">{viewer.originalName}</h3>
              <button 
                onClick={() => setViewer(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1">
              <iframe
                src={`/api/files/${encodeURIComponent(viewer.filename)}`}
                className="w-full h-full"
                title={viewer.originalName}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

