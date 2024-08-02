import { FC, PropsWithChildren } from 'react';

import AuthLayoutProvider from 'src/components/providers/AuthLayoutProvider';
import SocketProvider from 'src/components/providers/SockerProvider';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthLayoutProvider>
      <SocketProvider>{children}</SocketProvider>
    </AuthLayoutProvider>
  );
};

export default AuthLayout;
