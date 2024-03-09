import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

import 'src/themes/global.scss';
import 'antd/dist/reset.css';
import playpensansFont from 'src/assets/fonts';
import AppProvider from 'src/components/providers';

export const metadata: Metadata = {
  title: 'My app',
  description: 'Welcome to my Nextjs app'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={playpensansFont.className}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
