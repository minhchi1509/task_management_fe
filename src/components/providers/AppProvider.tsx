'use client';
import { ConfigProvider as AntdProvider } from 'antd';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import NextAuthSessionProviders from './SessionProvider';
import TanstackQueryProvider from './TanstackQueryProvider';
import AntdThemes from 'src/themes/antd.theme';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ToastContainer theme="colored" />
      <ProgressBar
        options={{ showSpinner: false }}
        shallowRouting
        style={`#nprogress .bar {
              position: fixed;
              z-index: 9999;
              top: 0;
              left: 0;
              width: 100%;
              background: #29d;
              height: 5px;
            }
            `}
      />
      <AntdProvider theme={AntdThemes}>
        <TanstackQueryProvider>
          <NextAuthSessionProviders>{children}</NextAuthSessionProviders>
        </TanstackQueryProvider>
      </AntdProvider>
    </>
  );
};

export default AppProvider;
