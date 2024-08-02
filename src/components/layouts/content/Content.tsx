'use client';
import { Layout } from 'antd';
import { PropsWithChildren } from 'react';

import './Content.scss';
import {
  SIDEBAR_CLOSED_WIDTH,
  SIDEBAR_OPEN_WIDTH
} from 'src/constants/variables';
import useAppLayout from 'src/hooks/useAppLayout';

const { Content: AntdContent } = Layout;

const Content = ({ children }: PropsWithChildren) => {
  const { openSidebar } = useAppLayout();
  return (
    <AntdContent
      style={{
        marginLeft: openSidebar ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH + 8,
        transitionProperty: 'all',
        transitionDuration: '0.2s'
      }}
    >
      {children}
    </AntdContent>
  );
};

export default Content;
