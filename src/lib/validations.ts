import { z } from 'zod';

/**
 * Authentication validation schemas
 */
export const loginSchema = z.object({
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
});

export const registerSchema = z.object({
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  password: z.string().min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'),
  name: z.string().min(2, 'الاسم يجب أن يكون حرفين على الأقل'),
  role: z.enum(['admin', 'teacher', 'user']).optional(),
});

/**
 * PDF upload validation schema
 */
export const pdfUploadSchema = z.object({
  category: z.enum(['iqama', 'rooms', 'exams', 'other'], {
    errorMap: () => ({ message: 'الفئة غير صحيحة' }),
  }),
  file: z.object({
    name: z.string(),
    size: z.number().max(10 * 1024 * 1024, 'حجم الملف يجب أن يكون أقل من 10 ميجابايت'),
    type: z.string().refine(
      (type) => ['application/pdf'].includes(type),
      'نوع الملف يجب أن يكون PDF'
    ),
  }),
});

/**
 * Feedback/Contact form validation schema
 */
export const feedbackSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون حرفين على الأقل'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'الموضوع يجب أن يكون 3 أحرف على الأقل'),
  message: z.string().min(10, 'الرسالة يجب أن تكون 10 أحرف على الأقل'),
  type: z.enum(['request', 'complaint', 'general']),
});

/**
 * Announcement validation schema
 */
export const announcementSchema = z.object({
  title: z.string().min(3, 'العنوان يجب أن يكون 3 أحرف على الأقل'),
  content: z.string().min(10, 'المحتوى يجب أن يكون 10 أحرف على الأقل'),
  imageUrl: z.string().url('رابط الصورة غير صحيح').optional(),
});

/**
 * Hospital data validation schema
 */
export const hospitalSchema = z.object({
  name: z.string().min(2, 'اسم المستشفى يجب أن يكون حرفين على الأقل'),
  address: z.string().min(5, 'العنوان يجب أن يكون 5 أحرف على الأقل'),
  phone: z.string().min(10, 'رقم الهاتف غير صحيح'),
  type: z.string().optional(),
});

/**
 * Scholarship validation schema
 */
export const scholarshipSchema = z.object({
  title: z.string().min(3, 'العنوان يجب أن يكون 3 أحرف على الأقل'),
  description: z.string().min(10, 'الوصف يجب أن يكون 10 أحرف على الأقل'),
  deadline: z.string().datetime('تاريخ الانتهاء غير صحيح').optional(),
  link: z.string().url('الرابط غير صحيح').optional(),
});

/**
 * Book validation schema
 */
export const bookSchema = z.object({
  title: z.string().min(2, 'العنوان يجب أن يكون حرفين على الأقل'),
  author: z.string().min(2, 'اسم المؤلف يجب أن يكون حرفين على الأقل'),
  category: z.enum(['khassa', 'iedadi', 'thanawi', 'other']),
  fileUrl: z.string().url('رابط الملف غير صحيح'),
});

/**
 * Video validation schema
 */
export const videoSchema = z.object({
  title: z.string().min(2, 'العنوان يجب أن يكون حرفين على الأقل'),
  description: z.string().optional(),
  url: z.string().url('رابط الفيديو غير صحيح'),
  category: z.string().optional(),
});

/**
 * Helper function to validate data against a schema
 */
export function validateData<T>(schema: z.ZodSchema<T>, data: unknown) {
  try {
    return {
      success: true as const,
      data: schema.parse(data),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false as const,
        errors: error.errors.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        })),
      };
    }
    return {
      success: false as const,
      errors: [{ path: 'unknown', message: 'خطأ في التحقق من البيانات' }],
    };
  }
}
