import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React from 'react';

import ListUsers from './_component/ListUser';
import { getUsers } from 'src/lib/services/auth.service';
import getQueryClient from 'src/lib/utils/getQueryClient';

const MessagePage = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ListUsers />
    </HydrationBoundary>
  );
};

export default MessagePage;
