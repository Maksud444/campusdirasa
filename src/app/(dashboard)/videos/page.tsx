'use client';

import { Play, ExternalLink, ArrowRight, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function VideosPage() {
  // ভিডিও তালিকা
  const videos = [
    {
      id: 1,
      youtubeUrl: 'https://youtu.be/m6ebZCaugWA?si=lyIbcXm4_VGEJWzW',
      videoId: 'm6ebZCaugWA',
      thumbnail: 'https://img.youtube.com/vi/m6ebZCaugWA/maxresdefault.jpg'
    },
    {
      id: 2,
      youtubeUrl: 'https://youtu.be/c4WPkFTinuA?si=ecm31goTFhn3Kzyc',
      videoId: 'c4WPkFTinuA',
      thumbnail: 'https://img.youtube.com/vi/c4WPkFTinuA/maxresdefault.jpg'
    },
    {
      id: 3,
      youtubeUrl: 'https://youtu.be/ntJOCvtI1U4?si=zHNBJFEFwDAt5VBw',
      videoId: 'ntJOCvtI1U4',
      thumbnail: 'https://img.youtube.com/vi/ntJOCvtI1U4/maxresdefault.jpg'
    },
    {
      id: 4,
      youtubeUrl: 'https://youtu.be/l6xdgnYbnWw?si=KWOfPSGAudXFh7gF',
      videoId: 'l6xdgnYbnWw',
      thumbnail: 'https://img.youtube.com/vi/l6xdgnYbnWw/maxresdefault.jpg'
    },
    {
      id: 5,
      youtubeUrl: 'https://youtu.be/ty24XXimGE0?si=RTLq7xX__hpCu0HS',
      videoId: 'ty24XXimGE0',
      thumbnail: 'https://img.youtube.com/vi/ty24XXimGE0/maxresdefault.jpg'
    },
    {
      id: 6,
      youtubeUrl: 'https://youtu.be/4xU5apdTS4Q?si=AWLiN42vYEj516-H',
      videoId: '4xU5apdTS4Q',
      thumbnail: 'https://img.youtube.com/vi/4xU5apdTS4Q/maxresdefault.jpg'
    }
  ];

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
              <Youtube className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              الفيديوهات التعليمية
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              مجموعة من الفيديوهات التعليمية المفيدة للطلاب
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100 hover:border-[#00d2ff] group"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt="فيديو تعليمي"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }}
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="text-white mr-1" size={32} fill="white" />
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-600">
                    <Youtube size={20} />
                    <span className="text-sm font-bold">YouTube</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#00d2ff] font-bold group-hover:gap-2 transition-all">
                    <span className="text-sm">مشاهدة</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Youtube className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">ℹ️ ملاحظات هامة</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>جميع الفيديوهات مستضافة على YouTube - يتطلب اتصال بالإنترنت</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>الضغط على أي فيديو سيفتح الفيديو في نافذة جديدة على YouTube</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>يُنصح بمشاهدة الفيديوهات بجودة عالية للحصول على أفضل تجربة تعليمية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>يمكنك تفعيل الترجمة التلقائية من إعدادات YouTube إذا لزم الأمر</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">هل تبحث عن محتوى معين؟</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            إذا كنت تحتاج إلى فيديو تعليمي حول موضوع محدد، لا تتردد في التواصل معنا
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-[#00d2ff] px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}