import { CSSObject } from '@emotion/react';
import { Drawer, styled, Theme } from '@mui/material';

import {
  SIDEBAR_CLOSED_WIDTH,
  SIDEBAR_OPEN_WIDTH
} from 'src/constants/variables';

interface IStylesProps {
  isSidebarOpen: boolean;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: SIDEBAR_OPEN_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  width: SIDEBAR_CLOSED_WIDTH
});

export const MuiDrawer = styled(Drawer)<IStylesProps>(
  ({ theme, isSidebarOpen }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.midNight.main,
      borderWidth: 0,
      color: theme.palette.midNight.contrastText,
      overflowX: 'hidden',
      ...(isSidebarOpen && openedMixin(theme)),
      ...(!isSidebarOpen && closedMixin(theme)),
      backgroundImage: 'none',
      '&:hover': { '::-webkit-scrollbar-thumb': { display: 'block' } }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  })
);
