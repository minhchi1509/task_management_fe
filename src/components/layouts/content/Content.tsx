'use client';
import { PropsWithChildren } from 'react';

import { MainContent } from 'src/components/layouts/content/styles';
import useAppLayout from 'src/hooks/useAppLayout';

const Content = ({ children }: PropsWithChildren) => {
  const { openSidebar } = useAppLayout();
  return <MainContent isSidebarOpen={openSidebar}>{children}</MainContent>;
};

export default Content;
