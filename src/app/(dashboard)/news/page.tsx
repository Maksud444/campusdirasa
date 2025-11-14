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
    'تعليمي': 'bg-blue-500',
    'امتحانات': 'bg-red-500',
    'فعاليات': 'bg-purple-500',
    'إعلانات': 'bg-yellow-500',
    'منح': 'bg-green-500',
    'إقامة': 'bg-cyan-500',
    'رياضة': 'bg-orange-500',
  };

  const filteredNews = newsData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 py-16 px-4">
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
                className="w-full pr-10 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 text-gray-900 placeholder:text-gray-400"
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
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'الكل' : category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((newsItem) => (
            <Link
              key={newsItem.id}
              href={`/news/${newsItem.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 transform hover:-translate-y-1"
            >
              {/* Card Header with Gradient */}
              <div className={`${categoryColors[newsItem.category] || 'bg-gray-500'} p-6 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5"></div>
                <div className="text-6xl mb-3 relative z-10">{newsItem.image}</div>
                <span className="inline-block px-4 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-bold relative z-10">
                  {newsItem.category}
                </span>
              </div>

              {/* Card Content - WHITE BACKGROUND */}
              <div className="p-6 bg-white">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
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
                <div className="flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={18} />
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








