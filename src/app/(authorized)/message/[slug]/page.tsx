// 'use client';
import { message } from 'antd';
import React, { FC, useEffect, useState } from 'react';

import { testApi } from 'src/lib/services/auth.service';
import { TURLPageProps } from 'src/lib/types/common.type';
import { getAPIResponse } from 'src/lib/utils/common-util';

const MessageDetailPage = async () => {
  const response: any = await getAPIResponse(testApi);
  return <div>MessageDetailPage</div>;
};

// const MessageDetailPage = () => {
//   const fetchData = async () => {
//     try {
//       const response = await testApi();
//       return response;
//     } catch (error) {
//       message.error((error as ErrorResponse).message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return <div>MessageDetailPage</div>;
// };

export default MessageDetailPage;
