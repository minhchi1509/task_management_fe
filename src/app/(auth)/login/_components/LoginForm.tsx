'use client';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

type FieldType = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const onFinish = async (values: FieldType) => {
    try {
      setIsLogin(true);
      const signInResult = await signIn('credentials', {
        redirect: false,
        callbackUrl: '/',
        ...values
      });
      if (signInResult?.ok) {
        push(signInResult.url!);
      } else {
        message.error(signInResult?.error);
      }
    } catch (error) {
    } finally {
      setIsLogin(false);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, marginTop: '50px' }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLogin}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
