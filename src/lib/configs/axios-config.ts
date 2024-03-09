import axios, { AxiosError } from 'axios';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';

import { authOptions } from 'src/app/api/auth/[...nextauth]/route';
import { clientRedirect } from 'src/lib/actions/common-action';
import {
  ErrorResponse,
  TErrorResponseData
} from 'src/lib/types/api-response.type';

const isServer = typeof window === 'undefined';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = '';
    try {
      const session = isServer
        ? await getServerSession(authOptions)
        : await getSession();
      accessToken = session?.user?.accessToken || '';
    } catch (error) {
      console.log('Get session failed in axios request interceptor!');
    }
    config.headers['Authorization'] = accessToken;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<TErrorResponseData>) => {
    if (error.response?.status === 401) {
      isServer ? redirect('/logout') : clientRedirect('/logout');
    }
    if (error.response) {
      const errorResponseData = error.response.data;
      const errorMessage = errorResponseData.message;
      throw new ErrorResponse(errorMessage, errorResponseData);
    }
  }
);

export default axiosInstance;
