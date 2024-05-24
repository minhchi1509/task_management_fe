'use server';

import { POST } from 'src/actions/http-request.action';
import { TLoginRequest, TLoginResponse } from 'src/types/api/auth/login.type';

export const login = async (req: TLoginRequest) => {
  const res = await POST<TLoginResponse>('/api/v1/auth/login', req.body);
  return res;
};
