import { Account, DefaultUser, Profile } from 'next-auth';

interface ICredentialsUser {
  id: string;
  fullName: string;
  email: string;
  role: string;
  avatar?: string;
  accessToken: string;
  accessTokenExpiry: number;
  authenticationType: string;
}

interface IOAuthProfile extends Account, Profile {}

interface IUser extends ICredentialsUser {
  oAuthProfile?: IOAuthProfile;
}

declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user?: IUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
