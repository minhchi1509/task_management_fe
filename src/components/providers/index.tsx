'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { PropsWithChildren } from 'react';

import NextAuthSessionProviders from './SessionProvider';
import TanstackQueryProvider from './TanstackQueryProvider';
import ColorModeProvider from 'src/components/providers/ColorModeProvider';
import MUIThemeProvider from 'src/components/providers/MUIThemeProvider';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ProgressBar
        options={{ showSpinner: false }}
        shallowRouting
        style={`#nprogress .bar {
            position: fixed;
            z-index: 9999 !important;
            top: 0;
            left: 0;
            width: 100%;
            background: #29d;
            height: 5px;
          }
          `}
      />
      <TanstackQueryProvider>
        <NextAuthSessionProviders>
          <ColorModeProvider>
            <MUIThemeProvider>{children}</MUIThemeProvider>
          </ColorModeProvider>
        </NextAuthSessionProviders>
      </TanstackQueryProvider>
    </>
  );
};

export default AppProvider;
