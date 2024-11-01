import { useContext } from 'react';

import { SocketContext } from 'src/components/providers/SockerProvider';

const useSocket = () => {
  const socket = useContext(SocketContext);

  return { socket };
};

export default useSocket;
