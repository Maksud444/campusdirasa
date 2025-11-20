import { writeFile } from 'node:fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';

type UserRecord = {
  id: string;
  email: string;
  password: string;
  name: string;
  phone?: string;
  role: 'user' | 'teacher' | 'admin';
};

const USERS_FILE = path.join(process.cwd(), 'src', 'lib', 'users.json');

async function readUsers(): Promise<UserRecord[]> {
  try {
    const { readFile } = await import('node:fs/promises');
    const raw = await readFile(USERS_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, password, phone } = await request.json();

    // Validation
    if (!email || !password || !name) {
      return Response.json(
        { error: 'البريد الإلكتروني والاسم وكلمة المرور مطلوبة' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { error: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' },
        { status: 400 }
      );
    }

    const users = await readUsers();

    // Check if email already exists
    if (users.some(u => u.email === email)) {
      return Response.json(
        { error: 'البريد الإلكتروني مستخدم بالفعل' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser: UserRecord = {
      id: String(users.length + 1),
      email,
      name,
      password: hashedPassword,
      phone: phone || '',
      role: 'user',
    };

    users.push(newUser);

    // Write to file
    await writeFile(USERS_FILE, JSON.stringify(users, null, 2));

    return Response.json(
      { 
        message: 'تم إنشاء الحساب بنجاح',
        user: { id: newUser.id, email: newUser.email, name: newUser.name }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return Response.json(
      { error: 'حدث خطأ أثناء التسجيل' },
      { status: 500 }
    );
  }
}
