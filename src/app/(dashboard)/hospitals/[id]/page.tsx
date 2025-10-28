'use client';

import { use } from 'react';
import Link from 'next/link';
import { Hospital, MapPin, Phone, Clock, Mail, User, Stethoscope, Calendar, Award, ArrowRight, Star, ChevronLeft } from 'lucide-react';

// Hospital data with doctors
const hospitalsData = [
  {
    id: 1,
    name: 'مستشفى القاهرة الجامعي',
    nameEn: 'Cairo University Hospital',
    location: 'المنيل، القاهرة',
    phone: '+20 2 3456 7890',
    email: 'info@cairo-hospital.edu.eg',
    workingHours: 'على مدار 24 ساعة',
    rating: 4.5,
    image: '🏥',
    color: 'emerald',
    description: 'أحد أعرق المستشفيات الجامعية في مصر، يقدم خدمات طبية متميزة في جميع التخصصات',
    doctors: [
      {
        id: 1,
        name: 'د. محمد أحمد السيد',
        specialty: 'جراحة عامة',
        phone: '+20 100 123 4567',
        email: 'dr.mohamed@hospital.eg',
        experience: '15 سنة',
        education: 'دكتوراه جراحة عامة - جامعة القاهرة',
        available: 'السبت - الخميس: 10 ص - 4 م',
        rating: 4.8
      },
      {
        id: 2,
        name: 'د. فاطمة حسن علي',
        specialty: 'نساء وولادة',
        phone: '+20 100 234 5678',
        email: 'dr.fatma@hospital.eg',
        experience: '12 سنة',
        education: 'دكتوراه نساء وولادة - جامعة عين شمس',
        available: 'الأحد - الخميس: 9 ص - 3 م',
        rating: 4.9
      },
      {
        id: 3,
        name: 'د. أحمد محمود إبراهيم',
        specialty: 'أطفال',
        phone: '+20 100 345 6789',
        email: 'dr.ahmed@hospital.eg',
        experience: '10 سنوات',
        education: 'ماجستير طب الأطفال - جامعة الأزهر',
        available: 'السبت - الأربعاء: 11 ص - 5 م',
        rating: 4.7
      },
      {
        id: 4,
        name: 'د. سارة عبد الرحمن',
        specialty: 'باطنة عامة',
        phone: '+20 100 456 7890',
        email: 'dr.sara@hospital.eg',
        experience: '18 سنة',
        education: 'دكتوراه باطنة - جامعة القاهرة',
        available: 'الأحد - الخميس: 10 ص - 4 م',
        rating: 4.6
      }
    ]
  },
  {
    id: 2,
    name: 'مستشفى عين شمس التخصصي',
    nameEn: 'Ain Shams Specialized Hospital',
    location: 'العباسية، القاهرة',
    phone: '+20 2 3456 7891',
    email: 'info@ainshams-hospital.edu.eg',
    workingHours: 'على مدار 24 ساعة',
    rating: 4.3,
    image: '🏥',
    color: 'green',
    description: 'مستشفى تخصصي يقدم خدمات طبية متقدمة في جراحة القلب والعظام والأورام',
    doctors: [
      {
        id: 5,
        name: 'د. خالد سعيد محمد',
        specialty: 'جراحة قلب',
        phone: '+20 101 123 4567',
        email: 'dr.khaled@ainshams.eg',
        experience: '20 سنة',
        education: 'دكتوراه جراحة قلب - جامعة عين شمس',
        available: 'الأحد - الأربعاء: 9 ص - 2 م',
        rating: 4.9
      },
      {
        id: 6,
        name: 'د. منى حسين علي',
        specialty: 'عظام',
        phone: '+20 101 234 5678',
        email: 'dr.mona@ainshams.eg',
        experience: '14 سنة',
        education: 'دكتوراه جراحة عظام - جامعة القاهرة',
        available: 'السبت - الخميس: 10 ص - 4 م',
        rating: 4.7
      }
    ]
  },
  // Add more hospitals as needed
];

export default function HospitalDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const hospitalId = parseInt(id);
  const hospital = hospitalsData.find(h => h.id === hospitalId);

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <Hospital className="text-gray-400 mx-auto mb-4" size={64} />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">المستشفى غير موجود</h1>
          <Link href="/hospitals" className="text-emerald-600 hover:underline">
            العودة لقائمة المستشفيات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/hospitals" className="text-emerald-600 hover:underline">
            المستشفيات
          </Link>
          <ChevronLeft size={16} className="text-gray-400" />
          <span className="text-gray-600">{hospital.name}</span>
        </div>
      </div>

      {/* Hospital Header */}
      <div className={`bg-gradient-to-r from-${hospital.color}-500 to-${hospital.color}-600 py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/hospitals"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight size={20} />
            <span>العودة للقائمة</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-6xl">{hospital.image}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{hospital.name}</h1>
              <p className="text-white/90 text-lg mb-4">{hospital.nameEn}</p>
              <p className="text-white/80 max-w-3xl">{hospital.description}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Star className="text-yellow-300 fill-yellow-300" size={24} />
              <span className="text-2xl font-bold text-white">{hospital.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 bg-${hospital.color}-100 rounded-lg flex items-center justify-center`}>
                <MapPin className={`text-${hospital.color}-600`} size={20} />
              </div>
              <h3 className="font-bold text-gray-800">العنوان</h3>
            </div>
            <p className="text-gray-600">{hospital.location}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 bg-${hospital.color}-100 rounded-lg flex items-center justify-center`}>
                <Phone className={`text-${hospital.color}-600`} size={20} />
              </div>
              <h3 className="font-bold text-gray-800">الهاتف</h3>
            </div>
            <a href={`tel:${hospital.phone}`} className="text-gray-600 hover:text-emerald-600 font-mono">
              {hospital.phone}
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 bg-${hospital.color}-100 rounded-lg flex items-center justify-center`}>
                <Clock className={`text-${hospital.color}-600`} size={20} />
              </div>
              <h3 className="font-bold text-gray-800">مواعيد العمل</h3>
            </div>
            <p className="text-gray-600">{hospital.workingHours}</p>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className={`text-${hospital.color}-600`} size={32} />
            <h2 className="text-3xl font-bold text-gray-800">الأطباء المتخصصون</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hospital.doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"
              >
                {/* Doctor Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${hospital.color}-500 to-${hospital.color}-600 rounded-full flex items-center justify-center`}>
                      <User className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                      <p className={`text-${hospital.color}-600 font-medium`}>{doctor.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-bold text-gray-800">{doctor.rating}</span>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm text-gray-500">الخبرة</p>
                      <p className="text-gray-700 font-medium">{doctor.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm text-gray-500">المؤهلات</p>
                      <p className="text-gray-700">{doctor.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm text-gray-500">مواعيد العمل</p>
                      <p className="text-gray-700">{doctor.available}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between gap-4">
                      <a
                        href={`tel:${doctor.phone}`}
                        className={`flex-1 flex items-center justify-center gap-2 bg-${hospital.color}-50 text-${hospital.color}-700 px-4 py-2 rounded-lg hover:bg-${hospital.color}-100 transition-colors font-medium`}
                      >
                        <Phone size={18} />
                        <span>اتصال</span>
                      </a>
                      <a
                        href={`mailto:${doctor.email}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        <Mail size={18} />
                        <span>بريد</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`bg-gradient-to-r from-${hospital.color}-500 to-${hospital.color}-600 rounded-2xl p-10 text-center shadow-xl`}>
          <Hospital className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل تحتاج حجز موعد؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            تواصل معنا الآن لحجز موعد مع أحد الأطباء المتخصصين
          </p>
          <a
            href={`tel:${hospital.phone}`}
            className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            اتصل الآن
          </a>
        </div>
      </div>
    </div>
  );
}
