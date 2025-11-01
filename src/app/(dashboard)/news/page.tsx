'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Newspaper, Calendar, User, Tag, ChevronLeft, Clock, TrendingUp, Filter, Search } from 'lucide-react';
import newsData from '@/lib/news.json';

type NewsItem = {
  id: number;
  title: string;
  titleEn: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  priority: string;
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'الكل', color: 'gray' },
    { id: 'تعليمي', name: 'تعليمي', color: 'blue' },
    { id: 'امتحانات', name: 'امتحانات', color: 'red' },
    { id: 'فعاليات', name: 'فعاليات', color: 'purple' },
    { id: 'إعلانات', name: 'إعلانات', color: 'green' },
    { id: 'منح', name: 'منح', color: 'emerald' },
    { id: 'إقامة', name: 'إقامة', color: 'teal' },
    { id: 'رياضة', name: 'رياضة', color: 'orange' },
  ];

  // Filter news by category and search
  const filteredNews = (newsData as NewsItem[]).filter((news) => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort by priority (high first) then by date
  const sortedNews = filteredNews.sort((a, b) => {
    if (a.priority === 'high' && b.priority !== 'high') return -1;
    if (a.priority !== 'high' && b.priority === 'high') return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const getPriorityBadge = (priority: string) => {
    if (priority === 'high') {
      return (
        <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
          <TrendingUp size={14} />
          عاجل
        </span>
      );
    }
    return null;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat?.color || 'gray';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Newspaper className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                الأخبار والإعلانات
              </h1>
              <p className="text-white/90 text-lg mt-2">
                آخر الأخبار والتحديثات المهمة للطلاب
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="ابحث عن خبر أو كلمة مفتاحية..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
            </div>
            <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              <Search size={20} />
              <span>بحث</span>
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? `bg-${category.color}-500 text-white shadow-lg scale-105`
                    : `bg-${category.color}-50 text-${category.color}-700 hover:bg-${category.color}-100`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Newspaper className="text-blue-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">{newsData.length}</div>
            <div className="text-gray-600 text-sm">إجمالي الأخبار</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <TrendingUp className="text-red-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">
              {newsData.filter((n: NewsItem) => n.priority === 'high').length}
            </div>
            <div className="text-gray-600 text-sm">أخبار عاجلة</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Calendar className="text-green-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">10</div>
            <div className="text-gray-600 text-sm">هذا الشهر</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Tag className="text-purple-600 mx-auto mb-2" size={28} />
            <div className="text-3xl font-bold text-gray-800">{categories.length - 1}</div>
            <div className="text-gray-600 text-sm">الفئات</div>
          </div>
        </div>

        {/* News Results Info */}
        {searchQuery && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800">
              <span className="font-bold">{sortedNews.length}</span> نتيجة للبحث عن "{searchQuery}"
            </p>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedNews.map((news) => {
            const categoryColor = getCategoryColor(news.category);
            return (
              <div
                key={news.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100 relative"
              >
                {/* Priority Badge */}
                {getPriorityBadge(news.priority)}

                {/* News Icon/Image */}
                <div className={`bg-gradient-to-br from-${categoryColor}-500 to-${categoryColor}-600 p-8 text-center relative`}>
                  <div className="text-6xl mb-3">{news.image}</div>
                  <div className={`bg-${categoryColor}-100 text-${categoryColor}-700 px-3 py-1 rounded-full text-xs font-bold inline-block`}>
                    {news.category}
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  {/* Date and Author */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{news.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[56px]">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`bg-${categoryColor}-50 text-${categoryColor}-700 px-2 py-1 rounded-full text-xs`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <button className={`w-full flex items-center justify-center gap-2 bg-${categoryColor}-50 text-${categoryColor}-700 px-4 py-3 rounded-lg hover:bg-${categoryColor}-100 transition-colors font-medium group-hover:shadow-md`}>
                    <span>اقرأ المزيد</span>
                    <ChevronLeft size={18} className="group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {sortedNews.length === 0 && (
          <div className="text-center py-16">
            <Newspaper className="text-gray-400 mx-auto mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">جرب تغيير فلتر البحث أو الفئة</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              إعادة تعيين
            </button>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl p-10 text-center shadow-xl">
          <Newspaper className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تريد الاشتراك في النشرة الإخبارية؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            احصل على آخر الأخبار والتحديثات مباشرة على بريدك الإلكتروني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105">
              اشترك الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}