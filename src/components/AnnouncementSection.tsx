'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Upload, X, Eye, Trash2 } from 'lucide-react';

type ImageMeta = {
  id: string;
  filename: string;
  originalName: string;
  createdAt: string;
};

export default function AnnouncementSection() {
  const [images, setImages] = useState<ImageMeta[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageMeta | null>(null); // ✅ NEW: Modal state

  // Check if admin logged in
  useEffect(() => {
    const adminCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('admin-session='));
    
    if (adminCookie && adminCookie.split('=')[1] === 'authenticated') {
      setIsAdmin(true);
    }
  }, []);

  // Fetch announcements
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  async function fetchAnnouncements() {
    try {
      const res = await fetch('/api/announcements');
      const data = await res.json();
      setImages(data || []);
    } catch (e) {
      console.error('Failed to fetch:', e);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f && f.type.startsWith('image/')) {
      setFile(f);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(f);
    }
  }

  async function handleUpload() {
    if (!file) return;
    
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', 'announcement');

      const res = await fetch('/api/upload-announcement', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setFile(null);
        setPreview(null);
        setShowUpload(false);
        await fetchAnnouncements();
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('هل أنت متأكد من حذف هذه الصورة؟')) return;

    try {
      const res = await fetch(`/api/announcements/${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        await fetchAnnouncements();
      }
    } catch (err) {
      console.error('Delete failed:', err);
    }
  }

  if (images.length === 0 && !isAdmin) return null;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">آخر الإعلانات</h2>
            
            {/* Admin Upload Button */}
            {isAdmin && (
              <button
                onClick={() => setShowUpload(!showUpload)}
                className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <Upload size={18} />
                <span>رفع صورة</span>
              </button>
            )}
          </div>

          {/* Upload Form (Admin Only) */}
          {isAdmin && showUpload && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اختر صورة الإعلان
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full text-gray-700 bg-white border-2 border-gray-300 rounded-lg px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                  />
                </div>

                {preview && (
                  <div className="relative w-full h-48">
                    <Image
                      src={preview}
                      alt="Preview"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={handleUpload}
                    disabled={!file || uploading}
                    className="flex-1 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploading ? 'جاري الرفع...' : 'رفع الصورة'}
                  </button>
                  <button
                    onClick={() => {
                      setShowUpload(false);
                      setFile(null);
                      setPreview(null);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Announcements Grid */}
          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div key={img.id} className="relative group">
                  <div 
                    className="relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105"
                    onClick={() => !isAdmin && setSelectedImage(img)} // ✅ NEW: Open modal (non-admin)
                  >
                    <Image
                      src={`/api/files/${encodeURIComponent(img.filename)}`}
                      alt={img.originalName}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Admin Actions Overlay */}
                    {isAdmin && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(img); // ✅ NEW: Admin can also view
                          }}
                          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                          title="عرض"
                        >
                          <Eye size={20} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(img.id);
                          }}
                          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                          title="حذف"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    )}

                    {/* Non-Admin: Show click hint */}
                    {!isAdmin && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white font-medium">انقر للتكبير</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Date */}
                  <div className="mt-2 text-sm text-gray-500 text-center">
                    {new Date(img.createdAt).toLocaleDateString('ar-EG')}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              لا توجد إعلانات حالياً
            </div>
          )}
        </div>
      </div>

      {/* ✅ NEW: Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Large Image */}
            <div className="relative w-full h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`/api/files/${encodeURIComponent(selectedImage.filename)}`}
                alt={selectedImage.originalName}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center">
              <p className="text-white text-sm">
                {new Date(selectedImage.createdAt).toLocaleDateString('ar-EG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}