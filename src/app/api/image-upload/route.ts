import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_DIR = path.join(process.cwd(), 'uploads', 'images');
const META_FILE = path.join(process.cwd(), 'src', 'lib', 'uploaded-images.json');

// আপলোড ডিরেক্টরি নিশ্চিত করা
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
    await ensureDirs();

    const formData = await req.formData();
    const file = formData.get('image') as File;
    const uploaderName = formData.get('uploaderName') as string;
    const uploaderPhone = formData.get('uploaderPhone') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string; // 'passport' or 'missing-student'

    // ভ্যালিডেশন
    if (!file || !uploaderName || !category) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة (الصورة، الاسم، النوع)' },
        { status: 400 }
      );
    }

    // শুধুমাত্র ছবি গ্রহণযোগ্য
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'يجب أن يكون الملف صورة فقط' },
        { status: 400 }
      );
    }

    // ফাইলের সাইজ চেক (সর্বোচ্চ 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'حجم الصورة يجب أن يكون أقل من 5 ميجابايت' },
        { status: 400 }
      );
    }

    const id = uuidv4();
    const ext = path.extname(file.name) || '.jpg';
    const filename = `${Date.now()}-${id}${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const filepath = path.join(UPLOAD_DIR, filename);

    await writeFile(filepath, buffer);

    // মেটাডাটা সংরক্ষণ
    const fs = require('fs').promises;
    let metadata = [];
    try {
      const metaContent = await fs.readFile(META_FILE, 'utf-8');
      metadata = JSON.parse(metaContent || '[]');
    } catch (e) {
      metadata = [];
    }

    const newMeta = {
      id,
      filename,
      originalName: file.name,
      category,
      uploaderName,
      uploaderPhone: uploaderPhone || '',
      description: description || '',
      createdAt: new Date().toISOString(),
    };

    metadata.unshift(newMeta);
    await fs.writeFile(META_FILE, JSON.stringify(metadata, null, 2), 'utf-8');

    return NextResponse.json(
      { success: true, message: 'تم رفع الصورة بنجاح', data: newMeta },
      { status: 201 }
    );
  } catch (err) {
    console.error('Image upload error:', err);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء رفع الصورة' },
      { status: 500 }
    );
  }
}

// সব আপলোড করা ছবির তালিকা পেতে
export async function GET(req: NextRequest) {
  try {
    const fs = require('fs').promises;
    
    if (!existsSync(META_FILE)) {
      return NextResponse.json([], { status: 200 });
    }

    const metaContent = await fs.readFile(META_FILE, 'utf-8');
    const metadata = JSON.parse(metaContent || '[]');
    
    return NextResponse.json(metadata, { status: 200 });
  } catch (err) {
    console.error('Error fetching images:', err);
    return NextResponse.json([], { status: 500 });
  }
}

