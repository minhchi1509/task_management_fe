'use client';

import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

import { ErrorIcon } from 'src/assets/icons';
import { delay } from 'src/lib/utils/common-util';

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

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <ErrorIcon width={100} height={100} />
      <p className="text-lg text-red-400">
        Phiên đăng nhập hết hạn. Bạn sẽ quay trở về trang đăng nhập sau vài
        giây...
      </p>
    </div>
  );
};

export default LogoutPage;
