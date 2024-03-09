import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { login } from 'src/lib/services/auth.service';
import { ErrorResponse } from 'src/lib/types/api-response.type';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const user = await login(
            credentials?.username,
            credentials?.password
          );
          return user;
        } catch (error) {
          throw new Error((error as ErrorResponse).message);
        }
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
        user.oAuthProfile = { ...profile, ...account, ...user } as any;
      }
      user.avatar = (user.oAuthProfile?.picture || user.avatar) as string;
      user.fullName = (user.oAuthProfile?.name || user.name) as string;
      return true;
    },
    async jwt({ token, user }) {
      //Đoạn if dưới đây chỉ chạy 1 lần duy nhất khi user sign in
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
