import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from './route';
import { NextRequest } from 'next/server';

// Mock modules
vi.mock('fs/promises', () => ({
  writeFile: vi.fn(),
  mkdir: vi.fn(),
  readFile: vi.fn(),
}));

vi.mock('fs', () => ({
  existsSync: vi.fn(),
}));

vi.mock('next-auth/jwt', () => ({
  getToken: vi.fn(),
}));

describe('POST /api/upload', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should reject unauthenticated users', async () => {
    const { getToken } = await import('next-auth/jwt');
    vi.mocked(getToken).mockResolvedValue(null);

    const formData = new FormData();
    const request = {
      formData: async () => formData,
    } as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('غير مصرح');
  });

  it('should reject regular users (non-teacher/admin)', async () => {
    const { getToken } = await import('next-auth/jwt');
    vi.mocked(getToken).mockResolvedValue({
      role: 'user',
      sub: 'user-1',
      name: 'Regular User',
    } as any);

    const formData = new FormData();
    const request = {
      formData: async () => formData,
    } as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe('غير مصرح');
  });

  it('should accept uploads from teachers', async () => {
    const { getToken } = await import('next-auth/jwt');
    const { existsSync } = await import('fs');
    const { writeFile, mkdir, readFile } = await import('fs/promises');

    vi.mocked(getToken).mockResolvedValue({
      role: 'teacher',
      sub: 'teacher-1',
      name: 'Teacher User',
    } as any);

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(writeFile).mockResolvedValue(undefined);
    vi.mocked(mkdir).mockResolvedValue(undefined as any);
    vi.mocked(readFile).mockResolvedValue('[]');

    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', 'iqama');

    const request = {
      formData: async () => formData,
    } as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('filename');
    expect(data.category).toBe('iqama');
    expect(data.uploaderName).toBe('Teacher User');
  });

  it('should accept uploads from admins', async () => {
    const { getToken } = await import('next-auth/jwt');
    const { existsSync } = await import('fs');
    const { writeFile, mkdir, readFile } = await import('fs/promises');

    vi.mocked(getToken).mockResolvedValue({
      role: 'admin',
      sub: 'admin-1',
      name: 'Admin User',
    } as any);

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(writeFile).mockResolvedValue(undefined);
    vi.mocked(mkdir).mockResolvedValue(undefined as any);
    vi.mocked(readFile).mockResolvedValue('[]');

    const file = new File(['content'], 'exam.pdf', { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', 'exams');

    const request = {
      formData: async () => formData,
    } as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.category).toBe('exams');
    expect(data.uploaderName).toBe('Admin User');
  });

  it('should reject request without file', async () => {
    const { getToken } = await import('next-auth/jwt');

    vi.mocked(getToken).mockResolvedValue({
      role: 'teacher',
      sub: 'teacher-1',
      name: 'Teacher User',
    } as any);

    const formData = new FormData();
    formData.append('category', 'iqama');
    // No file

    const request = {
      formData: async () => formData,
    } as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('بيانات غير مكتملة');
  });

  it('should reject request without category', async () => {
    const { getToken } = await import('next-auth/jwt');

    vi.mocked(getToken).mockResolvedValue({
      role: 'teacher',
      sub: 'teacher-1',
      name: 'Teacher User',
    } as any);

    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', file);
    // No category

    const request = {
      formData: async () => formData,
    } as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('بيانات غير مكتملة');
  });

  it('should handle server errors gracefully', async () => {
    const { getToken } = await import('next-auth/jwt');
    const { existsSync } = await import('fs');
    const { writeFile } = await import('fs/promises');

    vi.mocked(getToken).mockResolvedValue({
      role: 'teacher',
      sub: 'teacher-1',
      name: 'Teacher User',
    } as any);

    vi.mocked(existsSync).mockReturnValue(false);
    vi.mocked(writeFile).mockRejectedValue(new Error('Disk full'));

    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', 'iqama');

    const request = {
      formData: async () => formData,
    } as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('خطأ في الخادم');
  });
});
