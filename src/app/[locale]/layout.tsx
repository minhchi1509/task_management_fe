import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { FC } from 'react';

import playpensansFont from 'src/assets/fonts';
import AppLayout from 'src/components/layouts/AppLayout';
import AppProvider from 'src/components/providers';
import styles from 'src/themes/_global.module.scss';

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
    <html
      lang={locale}
      className={playpensansFont.className}
      suppressHydrationWarning
    >
      <body>
        <div className={styles.GlobalCSS}>
          <NextIntlClientProvider messages={messages}>
            <AppProvider>
              <AppLayout>{children}</AppLayout>
            </AppProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
