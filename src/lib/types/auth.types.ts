export type TLoginResponse = {
  user: {
    id: string;
    fullName: string;
    email: string;
  };
  accessToken: string;
};
