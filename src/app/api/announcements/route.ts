import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const META_FILE = path.join(process.cwd(), 'src', 'data', 'announcements.json');

export async function GET() {
  try {
    if (!existsSync(META_FILE)) {
      return NextResponse.json([]);
    }

    const content = await readFile(META_FILE, 'utf-8');
    const data = JSON.parse(content || '[]');
    
    return NextResponse.json(data);
  } catch (err) {
    console.error('Get announcements error:', err);
    return NextResponse.json([]);
  }
}








