import React, { FC } from 'react';

import { TURLPageProps } from 'src/lib/types/common.type';

const Test: FC<TURLPageProps> = ({ params, searchParams }) => {
  console.log('Params: ', params);
  console.log('Search params: ', searchParams);

  return <div>Test</div>;
};

export default Test;
