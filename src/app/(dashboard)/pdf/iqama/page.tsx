import { Download, Eye, Search, Filter, Calendar, Users, FileText } from 'lucide-react';

export default function PDFIqamaPage() {
  // Demo data for Iqama lists
  const pdfList = [
    {
      id: 1,
      title: 'قائمة الإقامة - يناير 2025',
      date: '2025-01-15',
      students: 245,
      fileUrl: '/uploads/iqama-jan-2025.pdf',
      status: 'جديد',
      downloads: 1234,
      views: 3456
    },
    {
      id: 2,
      title: 'قائمة الإقامة - ديسمبر 2024',
      date: '2024-12-20',
      students: 238,
      fileUrl: '/uploads/iqama-dec-2024.pdf',
      downloads: 2345,
      views: 4567
    },
    {
      id: 3,
      title: 'قائمة الإقامة - نوفمبر 2024',
      date: '2024-11-18',
      students: 232,
      fileUrl: '/uploads/iqama-nov-2024.pdf',
      downloads: 1987,
      views: 3987
    },
    {
      id: 4,
      title: 'قائمة الإقامة - أكتوبر 2024',
      date: '2024-10-15',
      students: 228,
      fileUrl: '/uploads/iqama-oct-2024.pdf',
      downloads: 1765,
      views: 3421
    },
    {
      id: 5,
      title: 'قائمة الإقامة - سبتمبر 2024',
      date: '2024-09-20',
      students: 225,
      fileUrl: '/uploads/iqama-sep-2024.pdf',
      downloads: 1543,
      views: 3210
    },
    {
      id: 6,
      title: 'قائمة الإقامة - أغسطس 2024',
      date: '2024-08-18',
      students: 220,
      fileUrl: '/uploads/iqama-aug-2024.pdf',
      downloads: 1432,
      views: 2987
    },
  ];

  // Statistics
  const stats = [
    { label: 'إجمالي الطلاب', value: '1,388', icon: Users, color: 'emerald' },
    { label: 'ملفات PDF', value: '6', icon: FileText, color: 'green' },
    { label: 'التحميلات', value: '10,306', icon: Download, color: 'teal' },
    { label: 'المشاهدات', value: '21,628', icon: Eye, color: 'lime' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-reverse space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">قوائم الإقامة</h1>
              <p className="text-white/90 text-sm md:text-base">تحميل ومعاينة جميع قوائم الإقامة الخاصة بالطلاب</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 -mt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                <stat.icon className={`text-${stat.color}-600`} size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="ابحث باسم الطالب، رقم الإقامة، أو التاريخ..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
            </div>
            <button className="flex items-center justify-center space-x-reverse space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter size={20} />
              <span>تصفية</span>
            </button>
            <button className="flex items-center justify-center space-x-reverse space-x-2 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
              <Search size={20} />
              <span>بحث</span>
            </button>
          </div>
        </div>

        {/* Info Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-reverse space-x-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">ℹ</span>
            </div>
            <div>
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">ملاحظة:</span> يتم تحديث قوائم الإقامة شهرياً. في حالة عدم العثور على اسمك، يرجى التواصل مع الإدارة.
              </p>
            </div>
          </div>
        </div>

        {/* PDF List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pdfList.map((pdf) => (
            <div 
              key={pdf.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-reverse space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{pdf.title}</h3>
                    <div className="flex items-center space-x-reverse space-x-2 text-sm text-gray-500 mt-1">
                      <Calendar size={14} />
                      <span>{pdf.date}</span>
                    </div>
                  </div>
                </div>
                {pdf.status && (
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    {pdf.status}
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-reverse space-x-1 text-emerald-600 mb-1">
                    <Users size={16} />
                  </div>
                  <div className="text-lg font-bold text-gray-800">{pdf.students}</div>
                  <div className="text-xs text-gray-600">طالب</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="flex items-center justify-center space-x-reverse space-x-1 text-blue-600 mb-1">
                    <Download size={16} />
                  </div>
                  <div className="text-lg font-bold text-gray-800">{pdf.downloads}</div>
                  <div className="text-xs text-gray-600">تحميل</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-reverse space-x-1 text-purple-600 mb-1">
                    <Eye size={16} />
                  </div>
                  <div className="text-lg font-bold text-gray-800">{pdf.views}</div>
                  <div className="text-xs text-gray-600">مشاهدة</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-reverse space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-reverse space-x-2 bg-emerald-50 text-emerald-600 px-4 py-3 rounded-lg hover:bg-emerald-100 transition-colors text-sm font-medium">
                  <Eye size={18} />
                  <span>معاينة</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-reverse space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                  <Download size={18} />
                  <span>تحميل PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center space-x-reverse space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            السابق
          </button>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            التالي
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">هل تحتاج مساعدة؟</h3>
          <p className="text-white/90 mb-6">إذا لم تجد اسمك في القائمة أو لديك أي استفسار</p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
}