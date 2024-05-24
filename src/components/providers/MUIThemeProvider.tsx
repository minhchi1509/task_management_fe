'use client';
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { PropsWithChildren } from 'react';

import useColorMode from 'src/hooks/useColorMode';
import MuiThemes from 'src/themes/mui-themes';

const MUIThemeProvider = ({ children }: PropsWithChildren) => {
  const { mode } = useColorMode();
  const theme = createTheme(mode === 'dark' ? MuiThemes.dark : MuiThemes.light);
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MUIThemeProvider;
