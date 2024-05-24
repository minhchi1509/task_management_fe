import { styled } from '@mui/material';

import {
  HEADER_HEIGHT,
  SIDEBAR_CLOSED_WIDTH,
  SIDEBAR_OPEN_WIDTH
} from 'src/constants/variables';

interface IStylesProps {
  isSidebarOpen: boolean;
}

export const MainContent = styled('main')<IStylesProps>(
  ({ theme, isSidebarOpen }) => ({
    marginTop: `${HEADER_HEIGHT}px`,
    backgroundColor: theme.palette.blueZodiac.main,
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    padding: '20px',
    minHeight: `calc(-${HEADER_HEIGHT}px + 100vh)`,
    marginLeft: isSidebarOpen
      ? `${SIDEBAR_OPEN_WIDTH}px`
      : `${SIDEBAR_CLOSED_WIDTH}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  })
);
