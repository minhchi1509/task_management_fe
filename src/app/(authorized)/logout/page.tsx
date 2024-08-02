'use client';

import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

import { delay } from 'src/utils/common-util';

const LogoutPage = () => {
  const handleLogout = async () => {
    await delay(1.5);
    signOut({
      redirect: true,
      callbackUrl: '/login'
    });
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <div></div>;
};

export default LogoutPage;
