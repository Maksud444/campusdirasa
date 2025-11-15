import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from './route';
import { NextResponse } from 'next/server';

// Mock fs module
vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(),
    readFileSync: vi.fn(),
  },
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
}));

describe('GET /api/pdfs', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return empty array when file does not exist', async () => {
    const fs = await import('fs');
    vi.mocked(fs.existsSync).mockReturnValue(false);

    const response = await GET({} as Request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it('should return list of PDFs when file exists', async () => {
    const fs = await import('fs');
    const mockPdfs = [
      {
        id: 'pdf-1',
        filename: 'test.pdf',
        originalName: 'test-document.pdf',
        category: 'iqama',
        uploaderId: 'user-1',
        uploaderName: 'Test User',
        createdAt: '2025-01-15T10:00:00.000Z',
      },
    ];

    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(mockPdfs));

    const response = await GET({} as Request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockPdfs);
    expect(data).toHaveLength(1);
    expect(data[0].filename).toBe('test.pdf');
  });

  it('should handle empty JSON file', async () => {
    const fs = await import('fs');
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue('[]');

    const response = await GET({} as Request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it('should return 500 on file read error', async () => {
    const fs = await import('fs');
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error('File read error');
    });

    const response = await GET({} as Request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual([]);
  });

  it('should handle malformed JSON gracefully', async () => {
    const fs = await import('fs');
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue('invalid json {{{');

    const response = await GET({} as Request);

    // Should return 500 due to JSON parse error
    expect(response.status).toBe(500);
  });
});
