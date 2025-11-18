import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'announcements');
const META_FILE = path.join(process.cwd(), 'src', 'data', 'announcements.json');

async function ensureDirs() {
  if (!existsSync(UPLOAD_DIR)) {
    await mkdir(UPLOAD_DIR, { recursive: true });
  }
  if (!existsSync(path.dirname(META_FILE))) {
    await mkdir(path.dirname(META_FILE), { recursive: true });
  }
}

export async function POST(req: NextRequest) {
  try {
    // Check admin auth
    const cookies = req.cookies;
    const adminSession = cookies.get('admin-session');
    
    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    await ensureDirs();

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'لم يتم اختيار ملف' }, { status: 400 });
    }

    // Validate image
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'الملف يجب أن يكون صورة' }, { status: 400 });
    }

    const id = uuidv4();
    const ext = path.extname(file.name) || '.jpg';
    const filename = `announcement-${Date.now()}-${id}${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const filepath = path.join(UPLOAD_DIR, filename);

    await writeFile(filepath, buffer);

    // Update metadata
    let metadata = [];
    try {
      const metaContent = await readFile(META_FILE, 'utf-8');
      metadata = JSON.parse(metaContent || '[]');
    } catch (e) {
      metadata = [];
    }

    const newMeta = {
      id,
      filename,
      originalName: file.name,
      createdAt: new Date().toISOString(),
    };

    metadata.unshift(newMeta);
    await writeFile(META_FILE, JSON.stringify(metadata, null, 2), 'utf-8');

    return NextResponse.json(newMeta, { status: 201 });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'خطأ في الخادم' }, { status: 500 });
  }
}








