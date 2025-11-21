'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Newspaper, Calendar, Tag, ArrowLeft, Search } from 'lucide-react';
import newsData from '@/lib/news.json';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'تعليمي', 'امتحانات', 'فعاليات', 'إعلانات', 'منح', 'إقامة', 'رياضة'];

  const categoryColors: Record<string, string> = {
    'تعليمي': 'from-[#1e3c72] to-[#2a5298]',
    'امتحانات': 'from-[#667eea] to-[#764ba2]',
    'فعاليات': 'from-[#4facfe] to-[#00f2fe]',
    'إعلانات': 'from-[#00d2ff] to-[#3a7bd5]',
    'منح': 'from-[#1e3c72] to-[#2a5298]',
    'إقامة': 'from-[#00d2ff] to-[#3a7bd5]',
    'رياضة': 'from-[#4facfe] to-[#00f2fe]',
  };

  const filteredNews = newsData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Page Header - Same as Homepage */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Newspaper className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            آخر الأخبار
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            تابع أحدث الأخبار والإعلانات المهمة
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search Box */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00d2ff] focus:border-[#00d2ff] bg-gray-50 text-gray-900 placeholder:text-gray-400"
                placeholder="ابحث في الأخبار..."
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#00d2ff] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'الكل' : category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((newsItem) => (
            <Link
              key={newsItem.id}
              href={`/news/${newsItem.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 card-3d-tilt"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              }}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${categoryColors[newsItem.category] || 'from-gray-500 to-gray-600'} p-6 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-700"></div>
                <div className="text-6xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-500">{newsItem.image}</div>
                <span className="inline-block px-4 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-bold relative z-10">
                  {newsItem.category}
                </span>
              </div>

              {/* Card Content - WHITE BACKGROUND */}
              <div className="p-6 bg-white">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00d2ff] transition-colors line-clamp-2">
                  {newsItem.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {newsItem.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(newsItem.date).toLocaleDateString('ar-EG', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>

                {/* Tags */}
                {newsItem.tags && newsItem.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {newsItem.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More */}
                <div className="flex items-center gap-2 text-[#00d2ff] font-bold group-hover:gap-3 transition-all">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={18} className="group-hover:animate-pulse" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">جرب البحث بكلمات أخرى أو اختر فئة مختلفة</p>
          </div>
        )}
      </div>
    </div>
  );
}