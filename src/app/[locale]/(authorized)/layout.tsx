import { FC, PropsWithChildren } from 'react';

import SocketProvider from 'src/components/providers/SockerProvider';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <SocketProvider>{children}</SocketProvider>;
};

export default AuthLayout;
