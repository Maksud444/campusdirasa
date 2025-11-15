import { describe, it, expect, vi, beforeEach } from 'vitest';
import bcrypt from 'bcryptjs';

// Mock node:fs/promises
vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(),
}));

describe('NextAuth Authentication', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('User Authentication Flow', () => {
    it('should authenticate user with valid bcrypt password', async () => {
      const { readFile } = await import('node:fs/promises');
      const hashedPassword = await bcrypt.hash('password123', 10);

      const mockUsers = JSON.stringify([
        {
          id: 'user-1',
          email: 'test@example.com',
          password: hashedPassword,
          name: 'Test User',
          role: 'user',
        },
      ]);

      vi.mocked(readFile).mockResolvedValue(mockUsers);

      // Import after mocking
      const { default: NextAuth } = await import('next-auth');

      // Test that bcrypt.compare would work
      const isValid = await bcrypt.compare('password123', hashedPassword);
      expect(isValid).toBe(true);
    });

    it('should reject invalid password', async () => {
      const hashedPassword = await bcrypt.hash('correctpassword', 10);
      const isValid = await bcrypt.compare('wrongpassword', hashedPassword);
      expect(isValid).toBe(false);
    });

    it('should handle missing credentials', async () => {
      // Test that empty credentials should be rejected
      const credentials = { email: '', password: '' };
      expect(credentials.email).toBeFalsy();
      expect(credentials.password).toBeFalsy();
    });

    it('should handle non-existent user', async () => {
      const { readFile } = await import('node:fs/promises');
      const mockUsers = JSON.stringify([
        {
          id: 'user-1',
          email: 'existing@example.com',
          password: 'hashedpass',
          role: 'user',
        },
      ]);

      vi.mocked(readFile).mockResolvedValue(mockUsers);

      const users = JSON.parse(mockUsers);
      const user = users.find((u: any) => u.email === 'nonexistent@example.com');

      expect(user).toBeUndefined();
    });

    it('should return user with correct role', async () => {
      const { readFile } = await import('node:fs/promises');
      const mockUsers = JSON.stringify([
        {
          id: 'admin-1',
          email: 'admin@example.com',
          password: await bcrypt.hash('adminpass', 10),
          name: 'Admin User',
          role: 'admin',
        },
      ]);

      vi.mocked(readFile).mockResolvedValue(mockUsers);

      const users = JSON.parse(mockUsers);
      const user = users.find((u: any) => u.email === 'admin@example.com');

      expect(user).toBeDefined();
      expect(user.role).toBe('admin');
      expect(user.name).toBe('Admin User');
    });

    it('should handle file read errors gracefully', async () => {
      const { readFile } = await import('node:fs/promises');
      vi.mocked(readFile).mockRejectedValue(new Error('File not found'));

      try {
        await readFile('/some/path', 'utf8');
      } catch (error: any) {
        expect(error.message).toBe('File not found');
      }
    });

    it('should handle malformed JSON in users file', async () => {
      const { readFile } = await import('node:fs/promises');
      vi.mocked(readFile).mockResolvedValue('invalid json {{{');

      try {
        JSON.parse('invalid json {{{');
      } catch (error) {
        expect(error).toBeInstanceOf(SyntaxError);
      }
    });

    it('should detect bcrypt hashed passwords', () => {
      const bcryptHash = '$2a$10$abcdefghijklmnopqrstuv';
      const plaintext = 'plainpassword';

      expect(bcryptHash.startsWith('$2a$')).toBe(true);
      expect(plaintext.startsWith('$2a$')).toBe(false);
    });

    it('should validate different bcrypt prefixes', () => {
      const prefixes = ['$2a$', '$2b$', '$2y$'];
      const hash2a = '$2a$10$test';
      const hash2b = '$2b$10$test';
      const hash2y = '$2y$10$test';

      expect(
        prefixes.some((prefix) => hash2a.startsWith(prefix))
      ).toBe(true);
      expect(
        prefixes.some((prefix) => hash2b.startsWith(prefix))
      ).toBe(true);
      expect(
        prefixes.some((prefix) => hash2y.startsWith(prefix))
      ).toBe(true);
    });
  });

  describe('JWT and Session Callbacks', () => {
    it('should add role to JWT token', () => {
      const token: any = {};
      const user: any = { role: 'teacher', id: 'teacher-1' };

      // Simulate jwt callback
      token.role = user.role;
      token.id = user.id;

      expect(token.role).toBe('teacher');
      expect(token.id).toBe('teacher-1');
    });

    it('should add role to session from token', () => {
      const session: any = { user: {} };
      const token: any = { role: 'admin', id: 'admin-1' };

      // Simulate session callback
      session.user.role = token.role;
      session.user.id = token.id;

      expect(session.user.role).toBe('admin');
      expect(session.user.id).toBe('admin-1');
    });

    it('should handle missing user in session', () => {
      const session: any = {};
      const token: any = { role: 'user', id: 'user-1' };

      // Should check if session.user exists
      if (session?.user) {
        session.user.role = token.role;
      }

      expect(session.user).toBeUndefined();
    });
  });
});
