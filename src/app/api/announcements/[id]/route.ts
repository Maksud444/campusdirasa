import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const META_FILE = path.join(process.cwd(), 'src', 'data', 'announcements.json');
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'announcements');

type RouteParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    // Check admin auth
    const cookies = req.cookies;
    const adminSession = cookies.get('admin-session');
    
    if (!adminSession || adminSession.value !== 'authenticated') {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    const { id } = await params;

    if (!existsSync(META_FILE)) {
      return NextResponse.json({ error: 'لا توجد بيانات' }, { status: 404 });
    }

    // Read metadata
    const content = await readFile(META_FILE, 'utf-8');
    let metadata = JSON.parse(content || '[]');

    // Find image
    const image = metadata.find((img: any) => img.id === id);
    
    if (!image) {
      return NextResponse.json({ error: 'الصورة غير موجودة' }, { status: 404 });
    }

    // Delete file
    const filepath = path.join(UPLOAD_DIR, image.filename);
    if (existsSync(filepath)) {
      await unlink(filepath);
    }

    // Update metadata
    metadata = metadata.filter((img: any) => img.id !== id);
    await writeFile(META_FILE, JSON.stringify(metadata, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Delete error:', err);
    return NextResponse.json({ error: 'خطأ في الخادم' }, { status: 500 });
  }
}