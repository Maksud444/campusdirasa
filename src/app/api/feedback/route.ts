import { NextRequest, NextResponse } from 'next/server';
import { feedbackSchema, validateData } from '@/lib/validations';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const FEEDBACK_FILE = path.join(process.cwd(), 'src', 'data', 'feedback.json');

export async function GET(request: NextRequest) {
  try {
    if (!existsSync(FEEDBACK_FILE)) {
      return NextResponse.json([]);
    }

    const content = await readFile(FEEDBACK_FILE, 'utf-8');
    const data = JSON.parse(content || '[]');
    return NextResponse.json(data);
  } catch (error) {
    console.error('Get feedback error:', error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input data
    const validation = validateData(feedbackSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'بيانات غير صحيحة', details: validation.errors },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    const dataDir = path.dirname(FEEDBACK_FILE);
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Read existing feedback
    let feedback = [];
    try {
      if (existsSync(FEEDBACK_FILE)) {
        const content = await readFile(FEEDBACK_FILE, 'utf-8');
        feedback = JSON.parse(content || '[]');
      }
    } catch (e) {
      feedback = [];
    }

    // Add new feedback
    const newFeedback = {
      id: uuidv4(),
      ...validation.data,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    feedback.unshift(newFeedback);

    // Save to file
    await writeFile(FEEDBACK_FILE, JSON.stringify(feedback, null, 2), 'utf-8');

    return NextResponse.json(newFeedback, { status: 201 });
  } catch (error) {
    console.error('Submit feedback error:', error);
    return NextResponse.json(
      { error: 'خطأ في الخادم' },
      { status: 500 }
    );
  }
}
