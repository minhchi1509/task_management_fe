'use client';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar as MuiAppBar,
  IconButton,
  styled,
  Toolbar,
  Typography
} from '@mui/material';

import useAppLayout from 'src/hooks/useAppLayout';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.midNight.main,
  color: theme.palette.midNight.contrastText
}));

const Header = () => {
  const { toggleSidebar } = useAppLayout();
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ paddingY: 2, paddingX: 3 }}>
        <IconButton
          color="inherit"
          onClick={toggleSidebar}
          sx={{
            marginRight: 5
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
