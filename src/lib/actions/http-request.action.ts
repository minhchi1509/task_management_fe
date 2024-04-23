'use server';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from 'src/app/api/auth/[...nextauth]/route';
import axiosInstance from 'src/lib/configs/axios-config';
import {
  ErrorResponse,
  TErrorResponseData
} from 'src/lib/types/error-response.type';

export const GET = async <T>(
  endPoint: string,
  configs?: AxiosRequestConfig
) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken || '';
    const { data } = await axiosInstance.get<T>(endPoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      ...configs
    });
    return data;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    if (err.response) {
      const errorResponseData = err.response.data;
      const errorMessage = errorResponseData.message;
      throw new ErrorResponse(errorMessage, errorResponseData);
    }
  }
};

export const POST = async <T>(
  endPoint: string,
  data: any,
  configs?: AxiosRequestConfig
) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken || '';
    const { data: responseData } = await axiosInstance.post<T>(endPoint, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      ...configs
    });
    return responseData;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    if (err.response) {
      const errorResponseData = err.response.data;
      const errorMessage = errorResponseData.message;
      throw new ErrorResponse(errorMessage, errorResponseData);
    }
  }
};

export const PUT = async <T>(
  endPoint: string,
  data: any,
  configs?: AxiosRequestConfig
) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken || '';
    const { data: responseData } = await axiosInstance.put<T>(endPoint, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      ...configs
    });
    return responseData;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    if (err.response) {
      const errorResponseData = err.response.data;
      const errorMessage = errorResponseData.message;
      throw new ErrorResponse(errorMessage, errorResponseData);
    }
  }
};

export const DELETE = async <T>(
  endPoint: string,
  configs?: AxiosRequestConfig
) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken || '';
    const { data: responseData } = await axiosInstance.delete<T>(endPoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      ...configs
    });
    return responseData;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    if (err.response) {
      const errorResponseData = err.response.data;
      const errorMessage = errorResponseData.message;
      throw new ErrorResponse(errorMessage, errorResponseData);
    }
  }
};
