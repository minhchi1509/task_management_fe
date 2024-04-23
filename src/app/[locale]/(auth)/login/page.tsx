'use client';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';

import LoginForm from 'src/components/features/login/LoginForm';

const LoginPage = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleSignInWithGoogle = async () => {
    try {
      setIsLogin(true);
      const signInResult = await signIn('google', {
        redirect: false,
        callbackUrl: '/'
      });
      if (signInResult?.ok) {
        push(signInResult.url || '');
      }
    } catch (error) {
    } finally {
      setIsLogin(false);
    }
  };
  return (
    <div>
      <LoginForm />

      <Button onClick={handleSignInWithGoogle} loading={isLogin}>
        Sign in with Google
      </Button>
      <Button
        onClick={() => {
          console.log(session?.user);
        }}
      >
        Get session
      </Button>
      <div className="block"></div>
    </div>
  );
};

export default LoginPage;
