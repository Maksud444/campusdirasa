'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageMeta = {
  id: string;
  filename: string;
  originalName: string;
  createdAt: string;
};

export default function Announcements() {
  const [images, setImages] = useState<ImageMeta[]>([]);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch('/api/announcements');
        const data = await res.json();
        setImages(data || []);
      } catch (e) {
        console.error('Failed to fetch announcements:', e);
      }
    }
    fetchAnnouncements();
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">آخر الإعلانات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.id} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/api/files/${encodeURIComponent(img.filename)}`}
              alt={img.originalName}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}