'use client';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'react-toastify';

type TLoginField = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { push } = useRouter();

  const handleLogin = async (loginField: TLoginField) => {
    const signInResponse = await signIn('credentials', {
      ...loginField,
      redirect: false
    });
    return signInResponse;
  };

  const { isPending, mutate: login } = useMutation({
    mutationFn: handleLogin,
    onSuccess: (response) => {
      if (response?.ok) {
        push('/');
        return;
      }
      toast(response?.error, { type: 'error' });
    }
  });

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, marginTop: '50px' }}
      onFinish={(values) => login(values)}
      autoComplete="off"
    >
      <Form.Item<TLoginField>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<TLoginField>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isPending}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
