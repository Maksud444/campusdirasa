'use client';

import { useState } from 'react';
import { Upload, Image as ImageIcon, AlertCircle, CheckCircle, Camera, User, Phone, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function ImageUploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    uploaderName: '',
    uploaderPhone: '',
    description: '',
    category: 'passport', // 'passport' or 'missing-student'
  });

  // ফাইল সিলেক্ট হ্যান্ডলার
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError('');
    setSuccess(false);

    if (!file) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    // শুধুমাত্র ছবি গ্রহণযোগ্য
    if (!file.type.startsWith('image/')) {
      setError('يجب أن يكون الملف صورة فقط');
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    // ফাইলের সাইজ চেক (সর্বোচ্চ 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('حجم الصورة يجب أن يكون أقل من 5 ميجابايت');
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    setSelectedFile(file);

    // প্রিভিউ তৈরি
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // ভ্যালিডেশন
    if (!selectedFile) {
      setError('الرجاء اختيار صورة');
      return;
    }

    if (!formData.uploaderName.trim()) {
      setError('الرجاء إدخال اسمك');
      return;
    }

    if (!formData.description.trim()) {
      setError('الرجاء إدخال وصف للصورة');
      return;
    }

    setUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('image', selectedFile);
      uploadFormData.append('uploaderName', formData.uploaderName);
      uploadFormData.append('uploaderPhone', formData.uploaderPhone);
      uploadFormData.append('description', formData.description);
      uploadFormData.append('category', formData.category);

      const response = await fetch('/api/image-upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'فشل رفع الصورة');
      }

      // সফল হলে ফর্ম রিসেট
      setSuccess(true);
      setSelectedFile(null);
      setPreview(null);
      setFormData({
        uploaderName: '',
        uploaderPhone: '',
        description: '',
        category: 'passport',
      });

      // ফাইল ইনপুট রিসেট
      const fileInput = document.getElementById('image-file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (err: any) {
      setError(err.message || 'حدث خطأ أثناء رفع الصورة');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* পেজ হেডার */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Camera className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                رفع الصور
              </h1>
              <p className="text-white/90 text-lg">
                يمكنك رفع صورة جواز السفر المفقود أو معلومات عن طالب غائب
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* মূল কন্টেন্ট */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* তথ্য ব্যানার */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-2">معلومات مهمة</h3>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• إذا وجدت جواز سفر مفقود، يمكنك رفع صورته هنا</li>
                <li>• إذا كان طالب غائب ولديك معلومات عنه، يمكنك مشاركتها</li>
                <li>• الصور يجب أن تكون واضحة وبحجم أقل من 5 ميجابايت</li>
                <li>• جميع المعلومات سيتم مراجعتها من قبل الإدارة</li>
              </ul>
            </div>
          </div>
        </div>

        {/* আপলোড ফর্ম */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ক্যাটাগরি সিলেক্ট */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                نوع الصورة <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, category: 'passport' })}
                  className={`p-4 border-2 rounded-xl transition-all ${
                    formData.category === 'passport'
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      formData.category === 'passport' ? 'bg-purple-500' : 'bg-gray-200'
                    }`}>
                      <ImageIcon className={formData.category === 'passport' ? 'text-white' : 'text-gray-600'} size={24} />
                    </div>
                    <div className="text-right">
                      <h4 className="font-bold text-gray-800">جواز سفر مفقود</h4>
                      <p className="text-sm text-gray-600">وجدت جواز سفر</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, category: 'missing-student' })}
                  className={`p-4 border-2 rounded-xl transition-all ${
                    formData.category === 'missing-student'
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      formData.category === 'missing-student' ? 'bg-pink-500' : 'bg-gray-200'
                    }`}>
                      <User className={formData.category === 'missing-student' ? 'text-white' : 'text-gray-600'} size={24} />
                    </div>
                    <div className="text-right">
                      <h4 className="font-bold text-gray-800">طالب غائب</h4>
                      <p className="text-sm text-gray-600">معلومات عن طالب غائب</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* ছবি আপলোড এরিয়া */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-3">
                اختر الصورة <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
                {preview ? (
                  <div className="relative">
                    <Image
                      src={preview}
                      alt="Preview"
                      width={400}
                      height={400}
                      className="mx-auto rounded-lg shadow-lg max-h-96 object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFile(null);
                        setPreview(null);
                        const fileInput = document.getElementById('image-file') as HTMLInputElement;
                        if (fileInput) fileInput.value = '';
                      }}
                      className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      حذف الصورة
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-600 mb-2 font-medium">اضغط لاختيار صورة أو اسحبها هنا</p>
                    <p className="text-sm text-gray-500">JPG, PNG, GIF (حد أقصى 5 ميجابايت)</p>
                  </>
                )}
                <input
                  id="image-file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                {!preview && (
                  <label
                    htmlFor="image-file"
                    className="inline-block mt-4 bg-purple-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-purple-600 transition-colors font-medium"
                  >
                    اختر صورة
                  </label>
                )}
              </div>
            </div>

            {/* আপলোডারের নাম */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                اسمك <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.uploaderName}
                  onChange={(e) => setFormData({ ...formData, uploaderName: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
                <User className="absolute right-4 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* ফোন নাম্বার (ঐচ্ছিক) */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                رقم الهاتف <span className="text-gray-500 text-sm font-normal">(اختياري)</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={formData.uploaderPhone}
                  onChange={(e) => setFormData({ ...formData, uploaderPhone: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="+20 123 456 7890"
                />
                <Phone className="absolute right-4 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* বিবরণ */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                وصف الصورة <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                  placeholder={
                    formData.category === 'passport'
                      ? 'مثال: وجدت هذا الجواز في المكتبة يوم الأحد...'
                      : 'مثال: الطالب محمد أحمد من الصف المتقدم الثاني غائب منذ أسبوع...'
                  }
                  required
                />
                <MessageSquare className="absolute right-4 top-3.5 text-gray-400" size={20} />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                الحد الأدنى 10 أحرف - <span className="text-purple-600 font-bold">{formData.description.length}</span> حرف
              </p>
            </div>

            {/* এরর মেসেজ */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            {/* সাকসেস মেসেজ */}
            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-green-900 mb-1">تم الرفع بنجاح!</h4>
                  <p className="text-green-800 text-sm">شكراً لك. سيتم مراجعة الصورة من قبل الإدارة.</p>
                </div>
              </div>
            )}

            {/* সাবমিট বাটন */}
            <button
              type="submit"
              disabled={uploading || !selectedFile || formData.description.length < 10}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>جاري الرفع...</span>
                </>
              ) : (
                <>
                  <Upload size={24} />
                  <span>رفع الصورة</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* হেল্প সেকশন */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-10 text-center shadow-xl">
          <Camera className="text-white mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            هل لديك أي نصائح لتحسين عملنا؟
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            إذا واجهت أي مشكلة في رفع الصورة، يمكنك التواصل معنا
          </p>
          <a
            href="/feedback"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  );
}
