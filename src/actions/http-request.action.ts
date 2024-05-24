'use server';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from 'src/app/api/auth/[...nextauth]/route';
import {
  ErrorResponse,
  TErrorResponseData
} from 'src/types/error-response.type';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL
});

export const GET = async <T>(
  endPoint: string,
  configs?: AxiosRequestConfig
) => {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken || '';
    const { data } = await axiosInstance.get<T>(endPoint, {
      ...configs,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...configs?.headers
      }
    });
    return data;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    const errorResponseData = err.response?.data;
    const errorMessage = errorResponseData?.message || 'Error from server';
    throw new ErrorResponse(errorMessage, errorResponseData);
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
      ...configs,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...configs?.headers
      }
    });
    return responseData;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    const errorResponseData = err.response?.data;
    const errorMessage = errorResponseData?.message || 'Error from server';
    throw new ErrorResponse(errorMessage, errorResponseData);
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
      ...configs,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...configs?.headers
      }
    });
    return responseData;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    const errorResponseData = err.response?.data;
    const errorMessage = errorResponseData?.message || 'Error from server';
    throw new ErrorResponse(errorMessage, errorResponseData);
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
      ...configs,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...configs?.headers
      }
    });
    return responseData;
  } catch (error) {
    const err = error as AxiosError<TErrorResponseData>;
    if (err.response?.status === 401) {
      return redirect('/logout');
    }
    const errorResponseData = err.response?.data;
    const errorMessage = errorResponseData?.message || 'Error from server';
    throw new ErrorResponse(errorMessage, errorResponseData);
  }
};
