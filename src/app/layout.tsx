import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import 'src/themes/global.scss';
import poppinsFont from 'src/assets/fonts';
import AppProvider from 'src/components/providers/AppProvider';

export const metadata: Metadata = {
  title: 'My app',
  description: 'Welcome to my Nextjs app'
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className={poppinsFont.className}>
      <body>
        <AntdRegistry>
          <AppProvider>{children}</AppProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
