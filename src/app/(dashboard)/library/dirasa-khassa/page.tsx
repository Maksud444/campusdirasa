'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Eye, ChevronLeft, FileText, User, Calendar } from 'lucide-react';
import PDFViewer from '@/components/features/PDFViewer';
import booksData from '@/lib/books.json';

type Book = {
  id: number;
  title: string;
  titleEn: string;
  category: string;
  subject: string;
  grade: string;
  pdfUrl: string;
  coverImage: string;
  author: string;
  pages: number;
  publishYear: string;
};

export default function DirasaKhassaBooksPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Filter books for Dirasa Khassa category
  const dirasaKhassaBooks = booksData.filter((book: Book) => book.category === 'dirasa-khassa');

  const handleViewBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseViewer = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/library" className="text-purple-600 hover:underline">
            الكتب
          </Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">دراسة خاصة</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-6xl">📚</div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                كتب دراسة خاصة
              </h1>
              <p className="text-white/90 text-lg">
                كتب ومراجع الدراسة الخاصة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Banner */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">ℹ</span>
            </div>
            <div>
              <h3 className="font-bold text-purple-900 text-lg mb-2">معلومات القراءة</h3>
              <p className="text-purple-800 text-sm">
                يمكنك قراءة الكتب مباشرة في المتصفح. استخدم أزرار التكبير/التصغير للتحكم في العرض.
              </p>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dirasaKhassaBooks.map((book: Book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden group"
            >
              {/* Book Cover */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-center">
                <div className="text-7xl mb-3">{book.coverImage}</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block">
                  <span className="text-white text-sm font-medium">{book.subject}</span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[56px]">
                  {book.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{book.titleEn}</p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User size={16} />
                    <span>{book.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText size={16} />
                    <span>{book.pages} صفحة</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{book.publishYear}</span>
                  </div>
                </div>

                {/* Grade Badge */}
                <div className="mb-4">
                  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    {book.grade}
                  </span>
                </div>

                {/* View Button Only */}
                <button
                  onClick={() => handleViewBook(book)}
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  <Eye size={18} />
                  <span>قراءة الكتاب</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Books Message */}
        {dirasaKhassaBooks.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="text-gray-400 mx-auto mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد كتب متاحة حالياً</h3>
            <p className="text-gray-500">سيتم إضافة الكتب قريباً</p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-10 text-center shadow-xl">
          <BookOpen className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تواجه مشكلة في القراءة؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            تأكد من تفعيل JavaScript في متصفحك، أو قم بتحديث الصفحة
          </p>
          <Link
            href="/feedback"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedBook && (
        <PDFViewer
          pdfUrl={selectedBook.pdfUrl}
          title={selectedBook.title}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}