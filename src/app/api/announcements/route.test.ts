import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from './route';

// Mock fs/promises module
vi.mock('fs/promises', () => ({
  readFile: vi.fn(),
}));

vi.mock('fs', () => ({
  existsSync: vi.fn(),
}));

describe('GET /api/announcements', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return empty array when file does not exist', async () => {
    const { existsSync } = await import('fs');
    vi.mocked(existsSync).mockReturnValue(false);

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it('should return announcements when file exists', async () => {
    const { existsSync } = await import('fs');
    const { readFile } = await import('fs/promises');

    const mockAnnouncements = [
      {
        id: 'ann-1',
        title: 'إعلان مهم',
        content: 'هذا إعلان تجريبي',
        createdAt: '2025-01-15T10:00:00.000Z',
      },
    ];

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFile).mockResolvedValue(JSON.stringify(mockAnnouncements));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockAnnouncements);
    expect(data).toHaveLength(1);
    expect(data[0].title).toBe('إعلان مهم');
  });

  it('should handle empty announcements file', async () => {
    const { existsSync } = await import('fs');
    const { readFile } = await import('fs/promises');

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFile).mockResolvedValue('[]');

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it('should handle file read errors gracefully', async () => {
    const { existsSync } = await import('fs');
    const { readFile } = await import('fs/promises');

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFile).mockRejectedValue(new Error('Read error'));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it('should handle empty string in file', async () => {
    const { existsSync } = await import('fs');
    const { readFile } = await import('fs/promises');

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFile).mockResolvedValue('');

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it('should return multiple announcements', async () => {
    const { existsSync } = await import('fs');
    const { readFile } = await import('fs/promises');

    const mockAnnouncements = [
      {
        id: 'ann-1',
        title: 'إعلان 1',
        content: 'محتوى 1',
        createdAt: '2025-01-15T10:00:00.000Z',
      },
      {
        id: 'ann-2',
        title: 'إعلان 2',
        content: 'محتوى 2',
        createdAt: '2025-01-14T10:00:00.000Z',
      },
    ];

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFile).mockResolvedValue(JSON.stringify(mockAnnouncements));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveLength(2);
    expect(data[0].id).toBe('ann-1');
    expect(data[1].id).toBe('ann-2');
  });
});
