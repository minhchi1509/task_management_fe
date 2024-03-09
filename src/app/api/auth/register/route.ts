import * as bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

import prismaClient from 'src/lib/prisma';

interface RequestBody {
  email: string;
  name: string;
  password: string;
}
export async function POST(request: NextRequest) {
  const { name, email, password }: RequestBody = await request.json();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });
    return NextResponse.json(
      { message: 'Register successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Server internal error' },
      { status: 500 }
    );
  }
}
