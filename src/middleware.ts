import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token; // or await getToken({ req });

    const isAuthenticated = !!token;

    const pathname = req.nextUrl.pathname;
    const authPageRegex = /^(\/login|\/register)/g;
    const apiPageRegex = /^(\/api)/g;
    const isAuthPage = authPageRegex.test(pathname);
    const isApiPage = apiPageRegex.test(pathname);

    if (isApiPage) {
      const requestHeaders = new Headers(req.headers);
      // requestHeaders.set("x-hello-from-middleware1", "hello");
      const response = NextResponse.next({
        request: {
          headers: requestHeaders
        }
      });
      return response;
    }

    if (isAuthPage) {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/', req.url));
      }
      return null;
    }

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  },
  {
    callbacks: {
      authorized() {
        return true;
      }
    }
  }
);
