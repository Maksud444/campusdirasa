/**
 * Mock user data for authentication testing
 */
export const mockUsers = [
  {
    id: 'admin-1',
    email: 'admin@test.com',
    password: '$2a$10$YourHashedPasswordHere', // bcrypt hash of 'password123'
    name: 'Admin User',
    role: 'admin' as const,
  },
  {
    id: 'teacher-1',
    email: 'teacher@test.com',
    password: '$2a$10$YourHashedPasswordHere',
    name: 'Teacher User',
    role: 'teacher' as const,
  },
  {
    id: 'user-1',
    email: 'user@test.com',
    password: '$2a$10$YourHashedPasswordHere',
    name: 'Regular User',
    role: 'user' as const,
  },
];

/**
 * Mock PDF metadata
 */
export const mockPdfs = [
  {
    id: 'pdf-1',
    filename: '1234567890-uuid.pdf',
    originalName: 'test-document.pdf',
    category: 'iqama',
    uploaderId: 'teacher-1',
    uploaderName: 'Teacher User',
    createdAt: '2025-01-15T10:00:00.000Z',
  },
  {
    id: 'pdf-2',
    filename: '1234567891-uuid.pdf',
    originalName: 'exam-schedule.pdf',
    category: 'exams',
    uploaderId: 'admin-1',
    uploaderName: 'Admin User',
    createdAt: '2025-01-14T15:30:00.000Z',
  },
];

/**
 * Mock announcements
 */
export const mockAnnouncements = [
  {
    id: 'ann-1',
    title: 'إعلان مهم',
    content: 'هذا إعلان تجريبي',
    createdAt: '2025-01-15T10:00:00.000Z',
  },
  {
    id: 'ann-2',
    title: 'تحديث النظام',
    content: 'سيتم تحديث النظام قريباً',
    createdAt: '2025-01-14T12:00:00.000Z',
  },
];

/**
 * Mock hospital data
 */
export const mockHospitals = [
  {
    id: 'hosp-1',
    name: 'مستشفى القاهرة',
    address: 'القاهرة، مصر',
    phone: '+20 123 456 7890',
  },
];

/**
 * Mock feedback submission
 */
export const mockFeedback = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+20 123 456 7890',
  subject: 'Test Subject',
  message: 'This is a test message with sufficient length for validation.',
  type: 'general' as const,
};
