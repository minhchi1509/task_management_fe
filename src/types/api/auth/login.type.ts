import { TUserResponse } from 'src/types/api/entity-response.type';

type TLoginBody = {
  email: string;
  password: string;
};

export type TLoginRequest = {
  body: TLoginBody;
};

export type TLoginResponse = {
  user: TUserResponse;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};
