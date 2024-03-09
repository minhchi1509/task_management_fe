import * as bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

import { signJwtAccessToken } from 'src/lib/jwt';
import prismaClient from 'src/lib/prisma';

interface RequestBody {
  username: string;
  password: string;
}
export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json();

  const user = await prismaClient.user.findFirst({
    where: {
      email: body.username
    }
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const tokenInfor = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      ...tokenInfor
    };
    return NextResponse.json(result, { status: 200 });
  }

  return NextResponse.json(
    { message: 'Inavlid username or password' },
    { status: 401 }
  );
}
