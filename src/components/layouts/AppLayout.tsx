'use client';
import { Box, useTheme } from '@mui/material';
import { createContext, PropsWithChildren, useState } from 'react';

import Content from 'src/components/layouts/content/Content';
import Header from 'src/components/layouts/Header';
import Sidebar from 'src/components/layouts/sidebar/Sidebar';

interface IAppLayoutContext {
  openSidebar: boolean;
  toggleSidebar: () => void;
}

export const AppLayoutContext = createContext<IAppLayoutContext | null>(null);

const AppLayout = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <AppLayoutContext.Provider value={{ openSidebar, toggleSidebar }}>
      <Box sx={{ backgroundColor: theme.palette.midNight.main }}>
        <Header />
        <Sidebar />
        <Content>{children}</Content>
      </Box>
    </AppLayoutContext.Provider>
  );
};

export default AppLayout;
