import { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'en'
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null
    }
  }
);

export default async function middleware(req: NextRequest) {
  return intlMiddleware(req);
  // const token = await getToken({ req });
  // const isAuthenticated = !!token;
  // // Page mà khi đăng nhập rồi sẽ không thể truy cập
  // const unAuthenticatedPathnameRegex =
  //   /^(\/(en|vi))?(\/register|\/login)+\/?$/i;

  // // Page mà cả khi đăng nhập và không đăng nhập đều có thể truy cập
  // const publicPathnameRegex = /^(\/(en|vi))?(\/public)+\/?$/i;

  // const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  // const isUnAuthenticatedPage = unAuthenticatedPathnameRegex.test(
  //   req.nextUrl.pathname
  // );

  // if (isPublicPage) {
  //   return intlMiddleware(req);
  // }

  // if (isUnAuthenticatedPage) {
  //   if (isAuthenticated) {
  //     return NextResponse.redirect(new URL('/', req.url));
  //   }
  //   return intlMiddleware(req);
  // }
  // return (authMiddleware as any)(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
