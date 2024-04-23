'use server';
import { POST } from 'src/lib/actions/http-request.action';
import { TLoginResponse } from 'src/lib/types/auth.types';

export const login = async (username: string, password: string) => {
  const res = await POST<TLoginResponse>('/api/v1/auth/login', {
    email: username,
    password
  });
  return res;
};
