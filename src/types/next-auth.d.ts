import { Account, Profile } from 'next-auth';

interface ICredentialsUser {
  id: string;
  fullName: string;
  email: string;
  accessToken: string;
  // accessTokenExpiry: number;
  // authenticationType: string;
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

  interface Profile {
    picture?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
