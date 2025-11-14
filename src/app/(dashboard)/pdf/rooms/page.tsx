import { Download, Eye, Building2, MapPin, FileText, Calendar } from 'lucide-react';

export default function PDFRoomsPage() {
  // রুম অ্যাসাইনমেন্টের ডাটা - আপডেট করা
  const roomsList = [
    {
      id: 1,
      building: 'المبنى A',
      floor: 'الطابق الأول',
      rooms: '101-120',
      className: 'متقدم ثاني', // ক্লাসের নাম যোগ করা হয়েছে
      fileUrl: '/uploads/rooms-a1.pdf',
      uploadDate: '2025-01-15', // আপলোড তারিখ
      color: 'emerald'
    },
    {
      id: 2,
      building: 'المبنى A',
      floor: 'الطابق الثاني',
      rooms: '201-220',
      className: 'متقدم أول',
      fileUrl: '/uploads/rooms-a2.pdf',
      uploadDate: '2025-01-15',
      color: 'green'
    },
    {
      id: 3,
      building: 'المبنى B',
      floor: 'الطابق الأول',
      rooms: '101-115',
      className: 'متوسط ثاني',
      fileUrl: '/uploads/rooms-b1.pdf',
      uploadDate: '2025-01-14',
      color: 'teal'
    },
    {
      id: 4,
      building: 'المبنى B',
      floor: 'الطابق الثاني',
      rooms: '201-215',
      className: 'متوسط أول',
      fileUrl: '/uploads/rooms-b2.pdf',
      uploadDate: '2025-01-14',
      color: 'lime'
    },
    {
      id: 5,
      building: 'المبنى C',
      floor: 'الطابق الأول',
      rooms: '101-110',
      className: 'مبتدئ ثاني',
      fileUrl: '/uploads/rooms-c1.pdf',
      uploadDate: '2025-01-13',
      color: 'cyan'
    },
    {
      id: 6,
      building: 'المبنى C',
      floor: 'الطابق الثاني',
      rooms: '201-210',
      className: 'مبتدئ أول',
      fileUrl: '/uploads/rooms-c2.pdf',
      uploadDate: '2025-01-13',
      color: 'sky'
    },
  ];

  // তারিখ ফরম্যাট করার ফাংশন
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const buildings = [
    { name: 'المبنى A', floors: 2, rooms: 40, color: 'emerald' },
    { name: 'المبنى B', floors: 2, rooms: 30, color: 'teal' },
    { name: 'المبنى C', floors: 2, rooms: 20, color: 'green' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* পেজ হেডার */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-reverse space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Building2 className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">أرقام الغرف</h1>
              <p className="text-white/90 text-sm md:text-base">توزيع الطلاب على الغرف والمباني السكنية</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* বিল্ডিং সারাংশ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 -mt-16">
          {buildings.map((building, idx) => (
            <div key={idx} className={`bg-white rounded-xl p-6 shadow-lg border-t-4 border-${building.color}-500`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{building.name}</h3>
                <div className={`w-12 h-12 bg-${building.color}-100 rounded-lg flex items-center justify-center`}>
                  <Building2 className={`text-${building.color}-600`} size={24} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">الطوابق</span>
                  <span className="font-semibold text-gray-800">{building.floors}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-gray-600 text-sm">الغرف</span>
                  <span className={`font-bold text-${building.color}-600 text-lg`}>{building.rooms}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* তথ্য ব্যানার */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-reverse space-x-3">
            <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">معلومات مهمة</h4>
              <p className="text-blue-800 text-sm">
                يمكنك قراءة أو تحميل قائمة غرف المبنى الخاص بك للتعرف على رقم غرفتك. اضغط على "قراءة" للعرض أو "تحميل" للحفظ.
              </p>
            </div>
          </div>
        </div>

        {/* রুম লিস্ট গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {roomsList.map((room) => (
            <div 
              key={room.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 group"
            >
              {/* হেডার */}
              <div className="flex items-start space-x-reverse space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br from-${room.color}-500 to-${room.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Building2 className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{room.building}</h3>
                  <p className="text-gray-600 font-medium">{room.floor}</p>
                </div>
              </div>

              {/* রুম ডিটেইলস */}
              <div className="space-y-3 mb-6">
                {/* ক্লাসের নাম - নতুন */}
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <FileText size={18} className="text-purple-600" />
                    <span className="text-gray-700 font-medium">اسم الصف</span>
                  </div>
                  <span className="text-purple-700 font-bold text-lg">{room.className}</span>
                </div>

                {/* আপলোড তারিখ - নতুন */}
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Calendar size={18} className="text-blue-600" />
                    <span className="text-gray-700 font-medium">تاريخ الرفع</span>
                  </div>
                  <span className="text-blue-700 font-bold text-sm">{formatDate(room.uploadDate)}</span>
                </div>

                {/* রুম নাম্বার */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <MapPin size={18} className="text-gray-500" />
                    <span className="text-gray-700 font-medium">أرقام الغرف</span>
                  </div>
                  <span className="text-gray-800 font-bold">{room.rooms}</span>
                </div>
              </div>

              {/* অ্যাকশন বাটন - রিড এবং ডাউনলোড */}
              <div className="flex space-x-reverse space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-reverse space-x-2 bg-blue-50 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors font-medium border border-blue-200">
                  <Eye size={18} />
                  <span>قراءة PDF</span>
                </button>
                <button className={`flex-1 flex items-center justify-center space-x-reverse space-x-2 bg-gradient-to-r from-${room.color}-500 to-${room.color}-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all font-medium`}>
                  <Download size={18} />
                  <span>تحميل</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* সারাংশ পরিসংখ্যান */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl p-6 text-white">
            <Building2 className="mb-3" size={32} />
            <div className="text-3xl font-bold mb-1">3</div>
            <div className="text-white/90">إجمالي المباني</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-6 text-white">
            <MapPin className="mb-3" size={32} />
            <div className="text-3xl font-bold mb-1">90</div>
            <div className="text-white/90">إجمالي الغرف</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-lime-500 rounded-xl p-6 text-white">
            <FileText className="mb-3" size={32} />
            <div className="text-3xl font-bold mb-1">6</div>
            <div className="text-white/90">ملفات PDF</div>
          </div>
        </div>

        {/* হেল্প সেকশন */}
        <div className="mt-12 bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">هل تحتاج مساعدة في تحديد غرفتك؟</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            يمكنك التواصل مع إدارة السكن للحصول على معلومات إضافية عن موقع غرفتك والخدمات المتاحة
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
            تواصل مع إدارة السكن
          </button>
        </div>
      </div>
    </div>
  );
}




