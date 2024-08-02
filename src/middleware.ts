import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

const authMiddleware = withAuth({
  callbacks: {
    authorized: ({ token }) => token !== null
  }
});

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  // Page mà khi đăng nhập rồi sẽ không thể truy cập
  const unAuthenticatedPathnameRegex = /^(\/register|\/login)+\/?$/i;

  // Page mà cả khi đăng nhập và không đăng nhập đều có thể truy cập
  const publicPathnameRegex = /^(\/public)+\/?$/i;

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  const isUnAuthenticatedPage = unAuthenticatedPathnameRegex.test(
    req.nextUrl.pathname
  );

  if (isPublicPage) {
    return null;
  }

  if (isUnAuthenticatedPage) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return null;
  }
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
