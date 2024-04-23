'use client';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface FieldType {
  username: string;
  password: string;
}

const LoginForm = () => {
  const t = useTranslations('Login');
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
        push(signInResult?.url || '');
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
        label={t('userNameInputLabel')}
        name="username"
        rules={[{ required: true, message: t('userNameRequired') }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('passwordInputLabel')}
        name="password"
        rules={[{ required: true, message: t('passwordRequired') }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLogin}>
          {t('loginButton')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
