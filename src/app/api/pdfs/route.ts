import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const META_FILE = path.join(process.cwd(), 'src', 'lib', 'pdfs.json');

export async function GET(req: Request) {
  try {
    if (!fs.existsSync(META_FILE)) return NextResponse.json([], { status: 200 });
    const raw = fs.readFileSync(META_FILE, 'utf8') || '[]';
    const list = JSON.parse(raw);
    return NextResponse.json(list, { status: 200 });
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
}