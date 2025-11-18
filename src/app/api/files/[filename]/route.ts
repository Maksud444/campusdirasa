import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

type RouteParams = {
  params: Promise<{
    filename: string;
  }>;
};

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { filename } = await params;
    const decodedFilename = decodeURIComponent(filename);
    
    // Check announcements directory
    const announcementPath = path.join(
      process.cwd(),
      'public',
      'uploads',
      'announcements',
      decodedFilename
    );

    if (existsSync(announcementPath)) {
      const fileBuffer = await readFile(announcementPath);
      const ext = path.extname(decodedFilename).toLowerCase();
      
      let contentType = 'application/octet-stream';
      if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.gif') contentType = 'image/gif';
      else if (ext === '.webp') contentType = 'image/webp';

      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    }

    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  } catch (err) {
    console.error('File serve error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}








