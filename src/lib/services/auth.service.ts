import axiosInstance from 'src/lib/configs/axios-config';

// export const login = async (username: string, password: string) => {
//   const res = await POST<TLoginResponse>('/api/v1/auth/login', {
//     username,
//     password
//   });
//   return res;
// };

export const getUsers = async () => {
  const response = await axiosInstance.get(
    'https://65030100a0f2c1f3faeb44f7.mockapi.io/api/v1/users'
  );
  return response.data;
};

export const addUser = async (body: any) => {
  const response = await axiosInstance.post(
    'https://65030100a0f2c1f3faeb44f7.mockapi.io/api/v1/users',
    body
  );
  return response.data;
};
