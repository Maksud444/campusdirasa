'use client';

import ContactForm from '@/components/ContactForm';
import { MessageSquare, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <MessageSquare className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            تواصل معنا
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. أرسل لنا استفسارك أو طلبك أو شكواك
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات الاتصال</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h4>
                    <a 
                      href="mailto:campusdirasa@gmail.com"
                      className="text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      campusdirasa@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">الهاتف</h4>
                    <a 
                      href="tel:+201234567890"
                      className="text-green-600 hover:text-green-700 text-sm font-mono"
                    >
                      +20 123 456 7890
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">العنوان</h4>
                    <p className="text-gray-600 text-sm">
                      القاهرة، مصر
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-white" size={24} />
                <h3 className="text-xl font-bold">ساعات العمل</h3>
              </div>
              <div className="space-y-3 text-white/90">
                <div className="flex justify-between">
                  <span>الأحد - الخميس</span>
                  <span className="font-bold">9 ص - 5 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span className="font-bold">مغلق</span>
                </div>
                <div className="flex justify-between">
                  <span>السبت</span>
                  <span className="font-bold">10 ص - 2 م</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">الأسئلة الشائعة</h3>
              <p className="text-blue-800 text-sm mb-4">
                قد تجد إجابة سريعة لسؤالك في قسم الأسئلة الشائعة
              </p>
              <button className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                عرض الأسئلة الشائعة
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-emerald-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">رد سريع</h3>
            <p className="text-gray-600 text-sm">
              نرد على جميع الرسائل خلال 24-48 ساعة
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-green-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">دعم احترافي</h3>
            <p className="text-gray-600 text-sm">
              فريق دعم متخصص جاহز لمساعدتك
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-teal-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">متاح دائماً</h3>
            <p className="text-gray-600 text-sm">
              يمكنك التواصل معنا في أي وقت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
