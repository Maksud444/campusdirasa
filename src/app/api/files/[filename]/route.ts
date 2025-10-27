import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export async function GET(req: Request, { params }: { params: Promise<{ filename: string }> }) {
  try {
    const { filename } = await params;
    const filePath = path.join(UPLOAD_DIR, filename);
    if (!fs.existsSync(filePath)) return NextResponse.json({ error: 'not_found' }, { status: 404 });

    const download = new URL(req.url).searchParams.get('download');

    const file = fs.readFileSync(filePath);
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    if (download) {
      headers.set('Content-Disposition', `attachment; filename="${filename}"`);
    }

    return new NextResponse(file, { status: 200, headers });
  } catch (err) {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}