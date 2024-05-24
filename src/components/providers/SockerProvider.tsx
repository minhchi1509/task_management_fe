/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useSession } from 'next-auth/react';
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import { io, Socket } from 'socket.io-client';

const SocketContext = createContext<Socket | null>(null);

const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const [socket, setSocket] = useState<Socket | null>(null);
  const url = process.env.NEXT_PUBLIC_API_URL || '';
  const accessToken = session.data?.user?.accessToken;

  useEffect(() => {
    if (accessToken && !socket) {
      const socketConnection = io(url, {
        extraHeaders: { Authorization: `Bearer ${accessToken}` }
      });
      setSocket(socketConnection);
    }
    return () => {
      socket?.disconnect();
    };
  }, [accessToken]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext };
export default SocketProvider;
