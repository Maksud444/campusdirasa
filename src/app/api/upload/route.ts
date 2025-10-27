import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { getToken } from 'next-auth/jwt';

const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
const META_FILE = path.join(process.cwd(), 'src', 'lib', 'pdfs.json');

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
    // Check auth
    const token = await getToken({ req });
    if (!token || (token.role !== 'teacher' && token.role !== 'admin')) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    await ensureDirs();

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;

    if (!file || !category) {
      return NextResponse.json({ error: 'بيانات غير مكتملة' }, { status: 400 });
    }

    const id = uuidv4();
    const ext = path.extname(file.name) || '.pdf';
    const filename = `${Date.now()}-${id}${ext}`;
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
      category,
      uploaderId: token.sub,
      uploaderName: token.name,
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

export const config = {
  api: {
    bodyParser: false,
  },
};
