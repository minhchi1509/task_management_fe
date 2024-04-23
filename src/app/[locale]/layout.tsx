import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { FC } from 'react';

import 'src/themes/global.scss';
import 'antd/dist/reset.css';
import playpensansFont from 'src/assets/fonts';
import AppProvider from 'src/components/providers';

export const metadata: Metadata = {
  title: 'My app',
  description: 'Welcome to my Nextjs app'
};

interface IRootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout: FC<IRootLayoutProps> = ({ children, params: { locale } }) => {
  const messages = useMessages();
  return (
    <html lang={locale} className={playpensansFont.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
