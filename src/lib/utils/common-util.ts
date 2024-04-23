import { ErrorResponse, IApiResponse } from 'src/lib/types/error-response.type';

export const delay = (seconds: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, seconds * 1000);
  });

export const getAPIResponse = async <T>(
  cb: () => Promise<T>
): Promise<IApiResponse<T>> => {
  try {
    const data = await cb();
    return { data, error: undefined };
  } catch (error) {
    const err = error as ErrorResponse;
    return { data: undefined, error: err };
  }
};
