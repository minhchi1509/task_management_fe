import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // console.log(
  //   "Header client authorization: ",
  //   request.headers.get("Authorization")
  // );

  return NextResponse.json(
    { message: 'Free ice-cream!', errorType: 'Hehehe' },
    { status: 404 }
  );
}
