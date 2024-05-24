type TLoginBody = {
  email: string;
  password: string;
};

export type TLoginRequest = {
  body: TLoginBody;
};

export type TLoginResponse = {
  id: string;
  email: string;
  fullName: string;
  accessToken: string;
};
