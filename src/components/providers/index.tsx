'use client';

import { ConfigProvider as AntdProvider } from 'antd';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { PropsWithChildren } from 'react';

import NextAuthSessionProviders from './SessionProvider';
import TanstackQueryProvider from './TanstackQueryProvider';
import StyledComponentsRegistry from 'src/components/providers/AntdRegistry';
import antdCustomTheme from 'src/themes/antd.theme';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <AntdProvider theme={antdCustomTheme}>
        <TanstackQueryProvider>
          <NextAuthSessionProviders>{children}</NextAuthSessionProviders>
        </TanstackQueryProvider>
      </AntdProvider>
    </StyledComponentsRegistry>
  );
};

export default AppProvider;
