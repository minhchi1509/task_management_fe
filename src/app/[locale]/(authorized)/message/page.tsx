'use client';
// import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { GET } from 'src/actions/http-request.action';
import { ErrorResponse } from 'src/types/error-response.type';

// import ListUsers from 'src/components/features/message/ListUser';
// import { getUsers } from 'src/lib/services/auth.service';
// import getQueryClient from 'src/lib/utils/getQueryClient';

const MessagePage = () => {
  const handleCallAPi = async () => {
    try {
      const data = await GET('/api/v1/task/PJMeU5I');
      console.log(data);
    } catch (error) {
      console.log((error as ErrorResponse).message);
    }
  };
  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ['users'],
  //   queryFn: getUsers
  // });
  // const dehydratedState = dehydrate(queryClient);

  return (
    // <HydrationBoundary state={dehydratedState}>
    //   <ListUsers />
    // </HydrationBoundary>
    <button onClick={handleCallAPi}>CallAPI</button>
  );
};

export default MessagePage;
