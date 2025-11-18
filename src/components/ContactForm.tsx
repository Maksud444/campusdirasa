'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, User, MessageSquare, Phone } from 'lucide-react';

type FormType = 'request' | 'complaint' | 'general';

interface ContactFormProps {
  formType?: FormType;
  title?: string;
  description?: string;
}

export default function ContactForm({ 
  formType = 'general',
  title,
  description 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: formType
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const formTitles = {
    request: 'نموذج طلب خدمة',
    complaint: 'نموذج شكوى أو اقتراح',
    general: 'نموذج تواصل'
  };

  const formDescriptions = {
    request: 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن',
    complaint: 'نحن نهتم برأيك. شاركنا ملاحظاتك أو شكواك',
    general: 'تواصل معنا لأي استفسار أو مساعدة'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Using EmailJS to send email
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_campusdirasa', // Replace with your EmailJS service ID
          template_id: 'template_contact', // Replace with your EmailJS template ID
          user_id: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your EmailJS public key
          template_params: {
            to_email: 'campusdirasa@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            form_type: formData.type === 'request' ? 'طلب خدمة' : formData.type === 'complaint' ? 'شكوى/اقتراح' : 'تواصل عام',
            reply_to: formData.email
          }
        })
      });

      if (response.ok) {
        setStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          type: formType
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto" dir="rtl">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Form Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {title || formTitles[formType]}
          </h2>
          <p className="text-gray-600 text-base">
            {description || formDescriptions[formType]}
          </p>
        </div>

        {/* Success Message */}
        {status === 'success' && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-in fade-in">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={24} />
            <div>
              <h4 className="font-bold text-green-900 mb-1 text-base">تم الإرسال بنجاح!</h4>
              <p className="text-green-800 text-sm">
                شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن على البريد الإلكتروني المقدم.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 animate-in fade-in">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={24} />
            <div>
              <h4 className="font-bold text-red-900 mb-1 text-base">فشل الإرسال</h4>
              <p className="text-red-800 text-sm">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-base font-bold text-gray-900 mb-2">
              الاسم الكامل <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-900 placeholder-gray-400"
                placeholder="أدخل اسمك الكامل"
                disabled={status === 'loading'}
                style={{ fontSize: '16px' }}
              />
              <User className="absolute right-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-base font-bold text-gray-900 mb-2">
              البريد الإلكتروني <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-900 placeholder-gray-400"
                placeholder="example@email.com"
                disabled={status === 'loading'}
                style={{ fontSize: '16px' }}
              />
              <Mail className="absolute right-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-base font-bold text-gray-900 mb-2">
              رقم الهاتف <span className="text-gray-500 text-sm font-normal">(اختياري)</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-900 placeholder-gray-400"
                placeholder="+20 123 456 7890"
                disabled={status === 'loading'}
                style={{ fontSize: '16px' }}
              />
              <Phone className="absolute right-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-base font-bold text-gray-900 mb-2">
              الموضوع <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-900 placeholder-gray-400"
              placeholder="اكتب موضوع رسالتك"
              disabled={status === 'loading'}
              style={{ fontSize: '16px' }}
            />
          </div>

          {/* Message Type Selector */}
          <div>
            <label htmlFor="type" className="block text-base font-bold text-gray-900 mb-2">
              نوع الرسالة <span className="text-red-500">*</span>
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-900 bg-white"
              disabled={status === 'loading'}
              style={{ fontSize: '16px' }}
            >
              <option value="general">استفسار عام</option>
              <option value="request">طلب خدمة</option>
              <option value="complaint">شكوى أو اقتراح</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-base font-bold text-gray-900 mb-2">
              الرسالة <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none text-gray-900 placeholder-gray-400"
                placeholder="اكتب رسالتك هنا بالتفصيل..."
                disabled={status === 'loading'}
                style={{ fontSize: '16px', lineHeight: '1.6' }}
              />
              <MessageSquare className="absolute right-4 top-3.5 text-gray-400" size={20} />
            </div>
            <p className="text-sm text-gray-600 mt-2 font-medium">
              الحد الأدنى 10 أحرف - <span className="text-emerald-600 font-bold">{formData.message.length}</span> حرف
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading' || formData.message.length < 10}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={24} />
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <Send size={24} />
                <span>إرسال الرسالة</span>
              </>
            )}
          </button>
        </form>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">ℹ</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-900 text-base mb-2">معلومات مهمة</h4>
              <ul className="text-blue-800 text-sm space-y-1.5 font-medium">
                <li>• سنرد على رسالتك خلال 24-48 ساعة</li>
                <li>• تأكد من صحة بريدك الإلكتروني</li>
                <li>• للاستفسارات العاجلة، اتصل بنا على: +20 123 456 7890</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}