import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag, Share2 } from 'lucide-react';
import newsData from '@/lib/news.json';

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsId = parseInt(params.id);
  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">الخبر غير موجود</h1>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <ArrowRight size={20} />
            <span>العودة إلى الأخبار</span>
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    'تعليمي': 'bg-blue-100 text-blue-700',
    'امتحانات': 'bg-red-100 text-red-700',
    'فعاليات': 'bg-purple-100 text-purple-700',
    'إعلانات': 'bg-yellow-100 text-yellow-700',
    'منح': 'bg-green-100 text-green-700',
    'إقامة': 'bg-cyan-100 text-cyan-700',
    'رياضة': 'bg-orange-100 text-orange-700',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50" dir="rtl">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة إلى الأخبار</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${categoryColors[newsItem.category] || 'bg-gray-100 text-gray-700'}`}>
              {newsItem.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {newsItem.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>{new Date(newsItem.date).toLocaleDateString('ar-EG', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={20} />
              <span>{newsItem.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Emoji Icon */}
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{newsItem.image}</div>
          </div>

          {/* Excerpt */}
          <div className="bg-emerald-50 border-r-4 border-emerald-500 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {newsItem.excerpt}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-xl whitespace-pre-line">
              {newsItem.content}
            </p>
          </div>

          {/* Tags */}
          {newsItem.tags && newsItem.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag size={20} className="text-gray-400" />
                {newsItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">شارك هذا الخبر</h3>
              <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                <Share2 size={20} />
                <span>مشاركة</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related News */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">أخبار ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData
              .filter((item) => item.id !== newsId && item.category === newsItem.category)
              .slice(0, 2)
              .map((relatedNews) => (
                <Link
                  key={relatedNews.id}
                  href={`/news/${relatedNews.id}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-4xl">{relatedNews.image}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[relatedNews.category] || 'bg-gray-100 text-gray-700'}`}>
                      {relatedNews.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {relatedNews.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedNews.excerpt}
                  </p>
                  <div className="mt-3 text-sm text-gray-500 flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{new Date(relatedNews.date).toLocaleDateString('ar-EG')}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}








