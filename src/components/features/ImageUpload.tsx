'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type ImageMeta = {
  id: string;
  filename: string;
  originalName: string;
  category: 'announcement',
  uploaderId?: string;
  uploaderName?: string;
  createdAt: string;
};

export default function ImageUpload() {
  const { data: session, status } = useSession();
  const role = (session?.user as any)?.role as string | undefined;

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<ImageMeta[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    try {
      const res = await fetch('/api/announcements');
      const data = await res.json();
      setImages(data || []);
    } catch (e) {
      // ignore
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const f = e.target.files?.[0] ?? null;
    if (f && !f.type.startsWith('image/')) {
      setError('الرجاء اختيار صورة فقط');
      setFile(null);
      setPreview(null);
      return;
    }
    setFile(f);
    if (f) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  }

  async function handleUpload(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!file) {
      setError('اختر صورة للرفع');
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
      formData.append('category', 'announcement');

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'خطأ في الخادم' }));
        throw new Error(body?.error ?? 'upload_failed');
      }

      setFile(null);
      setPreview(null);
      if (document.getElementById('image-file')) {
        (document.getElementById('image-file') as HTMLInputElement).value = '';
      }
      await fetchList();
    } catch (err: any) {
      setError(err.message || 'خطأ أثناء الرفع');
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(meta: ImageMeta) {
    if (!confirm('هل أنت متأكد من حذف هذه الصورة؟')) return;
    
    try {
      const res = await fetch(`/api/announcements/${meta.id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('failed');
      await fetchList();
    } catch {
      setError('فشل حذف الصورة');
    }
  }

  if (status === 'loading') return null;

  if (!role || (role !== 'teacher' && role !== 'admin')) {
    return (
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-2">رفع صور الإعلانات</h2>
        <p>خاص بالمدرّسين والمدراء فقط.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">رفع صورة إعلان</h2>

      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">اختر صورة</label>
          <input
            id="image-file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
          />
          {preview && (
            <div className="mt-2">
              <Image
                src={preview}
                alt="Preview"
                width={200}
                height={200}
                className="object-cover rounded"
              />
            </div>
          )}
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <div>
          <button
            type="submit"
            disabled={uploading}
            className="px-4 py-2 bg-emerald-600 text-white rounded disabled:opacity-50"
          >
            {uploading ? 'جاري الرفع...' : 'رفع'}
          </button>
        </div>
      </form>

      <hr className="my-6" />

      <h3 className="text-lg font-medium mb-3">الإعلانات المرفوعة</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="border rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={`/api/files/${encodeURIComponent(img.filename)}`}
                alt={img.originalName}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <div className="text-sm text-gray-500">
                {new Date(img.createdAt).toLocaleString('ar-EG')}
              </div>
              <button
                onClick={() => handleDelete(img)}
                className="mt-2 px-3 py-1 bg-red-50 text-red-600 rounded text-sm hover:bg-red-100"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
