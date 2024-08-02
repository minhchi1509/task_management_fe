import { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { login } from 'src/actions/auth.actions';
import { TLoginRequest } from 'src/types/api/auth/login.type';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' }
      },
      async authorize(credentials) {
        const loginRequest: TLoginRequest = {
          body: {
            email: credentials?.email || '',
            password: credentials?.password || ''
          }
        };
        const { user, ...tokenInfor } = await login(loginRequest);
        const responseUser: User = { ...user, ...tokenInfor };
        return responseUser;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    })
  ],
  callbacks: {
    //"user" chính là giá trị trả về từ hàm "authorize" ở bên trên, "account", "profile" là thông tin trả về từ xác thực oauth như google, github, facebook,...
    async signIn({ user, account, profile }) {
      //account.provider chính là cái "id" ta đặt bên trên
      if (account?.provider !== 'credentials') {
        user.oAuthProfile = { ...profile, ...account } as any;
      }
      user.fullName = profile?.name || user.fullName || '';
      return true;
    },
    async jwt({ token, user }) {
      //Hàm if dưới đây chỉ chạy 1 lần duy nhất khi user sign in
      //"user" là giá trị trả về từ hàm "signIn" ở bên trên
      if (user) {
        token = { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    }
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export { authOptions };
