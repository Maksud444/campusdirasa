import Link from 'next/link';
import { Clock, BookOpen, GraduationCap, Building2, ArrowRight, MapPin } from 'lucide-react';

export default function AzharHistoryPage() {
  const timeline = [
    {
      year: '970م',
      title: 'التأسيس',
      description: 'تأسست جامعة الأزهر في القاهرة عام 970م على يد الفاطميين، وكان الهدف من تأسيسها نشر العلم وتعليم الدين الإسلامي، وكان يُطلق عليها في البداية "جامع الأزهر" لأنّها كانت مؤسسة دينية تركز على التعليم الديني.',
      icon: BookOpen,
      color: 'from-[#00d2ff] to-[#3a7bd5]'
    },
    {
      year: '1961م',
      title: 'التحديث والتطوير',
      description: 'في عام 1961م، تم تحويل الأزهر من مجرد مؤسسة دينية إلى جامعة حديثة، حيث شملت العديد من التخصصات الأكاديمية، إلى جانب الكليات الإسلامية.',
      icon: GraduationCap,
      color: 'from-[#1e3a8a] to-[#3b82f6]'
    },
    {
      year: '1970م',
      title: 'التوسع الأكاديمي',
      description: 'تم إنشاء كليات جديدة في الأزهر مثل الكليات العلمية والطبية والهندسية، وذلك في محاولة لتوسيع نطاق التعليم وتقديم تخصصات أكاديمية متنوعة.',
      icon: Building2,
      color: 'from-[#0891b2] to-[#06b6d4]'
    },
    {
      year: 'من 2010م - الآن',
      title: 'العصر الحديث',
      description: 'أصبحت جامعة الأزهر في السنوات الأخيرة من أهم الجامعات في العالم الإسلامي، وقد شهدت تطورًا في مجالات البحث العلمي، بالإضافة إلى إنشاء العديد من الأقسام التكنولوجية والعلمية.',
      icon: Clock,
      color: 'from-[#1e40af] to-[#2563eb]'
    }
  ];

  const historicalPlaces = [
    {
      id: 1,
      name: 'الجامع الأزهر',
      nameEn: 'Al-Azhar Mosque',
      description: 'أول جامع بُني في مدينة القاهرة وأحد أهم المساجد في مصر والعالم الإسلامي. تأسس عام 970م ويعتبر القلب النابض للعلم والتعليم الديني.',
      year: '970م',
      icon: '🕌',
      color: 'from-[#00d2ff] to-[#3a7bd5]'
    },
    {
      id: 2,
      name: 'قلعة صلاح الدين',
      nameEn: 'Saladin Citadel',
      description: 'قلعة تاريخية محصنة بناها صلاح الدين الأيوبي عام 1176م على تل المقطم. كانت مقر الحكم في مصر لأكثر من 700 عام.',
      year: '1176م',
      icon: '🏰',
      color: 'from-[#1e3a8a] to-[#3b82f6]'
    },
    {
      id: 3,
      name: 'أهرامات الجيزة',
      nameEn: 'Pyramids of Giza',
      description: 'من عجائب الدنيا السبع القديمة والوحيدة الباقية حتى الآن. بُنيت قبل حوالي 4500 عام كمقابر للفراعنة.',
      year: '2560 ق.م',
      icon: '🔺',
      color: 'from-[#0891b2] to-[#06b6d4]'
    },
    {
      id: 4,
      name: 'المتحف المصري',
      nameEn: 'Egyptian Museum',
      description: 'يضم أكبر مجموعة من الآثار المصرية القديمة في العالم. افتتح عام 1902م ويحتوي على أكثر من 120 ألف قطعة أثرية.',
      year: '1902م',
      icon: '🏛️',
      color: 'from-[#1e40af] to-[#2563eb]'
    },
    {
      id: 5,
      name: 'مسجد محمد علي',
      nameEn: 'Muhammad Ali Mosque',
      description: 'يقع داخل قلعة صلاح الدين ويعرف بمسجد المرمر. بُني بين عامي 1830-1848م على الطراز العثماني.',
      year: '1848م',
      icon: '🕌',
      color: 'from-[#00d2ff] to-[#3a7bd5]'
    },
    {
      id: 6,
      name: 'خان الخليلي',
      nameEn: 'Khan el-Khalili',
      description: 'سوق تاريخي في قلب القاهرة الإسلامية، تأسس عام 1382م. يعتبر من أشهر الأسواق السياحية والتجارية في مصر.',
      year: '1382م',
      icon: '🏪',
      color: 'from-[#1e3a8a] to-[#3b82f6]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة للرئيسية</span>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            تاريخ جامعة الأزهر الشريف
          </h1>
          <p className="text-xl text-white/90 max-w-4xl leading-relaxed drop-shadow-md">
            جامعة الأزهر هي أعرق مؤسسة تعليمية ودينية في العالم الإسلامي، وتُعد واحدة من أقدم الجامعات المستمرة في العالم. تأسست كجامع للصلاة والتعليم في عام 972 م (361 هـ) خلال فترة حكم الخليفة الفاطمي المعز لدين الله. تطورت لاحقًا إلى جامعة تدرّس العلوم الدينية والدنيوية على حد سواء.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">الخط الزمني للأزهر</h2>
            <p className="text-gray-600 text-lg">رحلة عبر أكثر من ألف عام من العلم والمعرفة</p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start gap-6 group"
                >
                  {idx !== timeline.length - 1 && (
                    <div className="absolute right-8 top-20 w-1 h-full bg-gradient-to-b from-cyan-200 to-transparent hidden md:block"></div>
                  )}

                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Historical Places Section */}
      <div className="bg-gradient-to-br from-gray-50 to-cyan-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] p-4 rounded-full mb-4">
              <MapPin className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">مواقع الأماكن الهامة</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              اكتشف أهم المعالم التاريخية والثقافية في مصر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicalPlaces.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${place.color} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="text-6xl mb-3 relative z-10">{place.icon}</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block relative z-10">
                    <span className="text-white text-sm font-bold">{place.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {place.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 italic">{place.nameEn}</p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
              إرث يمتد لأكثر من ألف عام
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-8">
              جامعة الأزهر ليست مجرد مؤسسة تعليمية، بل هي منارة العلم والمعرفة في العالم الإسلامي، 
              ومركز إشعاع حضاري يجمع بين الأصالة والمعاصرة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">1050+</div>
                <div className="text-white/90 text-lg drop-shadow-md">عام من التاريخ</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">100+</div>
                <div className="text-white/90 text-lg drop-shadow-md">دولة يدرس طلابها في الأزهر</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">500K+</div>
                <div className="text-white/90 text-lg drop-shadow-md">طالب وطالبة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            انضم إلى تاريخ الأزهر العريق
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            كن جزءًا من هذا الإرث العظيم وابدأ رحلتك التعليمية في أعرق جامعة في العالم الإسلامي
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-[#00d2ff] px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            استكشف الخدمات
          </Link>
        </div>
      </div>
    </div>
  );
}