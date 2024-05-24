import { createTheme } from '@mui/material';

export const delay = (seconds: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, seconds * 1000);
  });

const { palette } = createTheme();
export const createColor = (main: string, contrastText?: string) => {
  return palette.augmentColor({
    color: { main, contrastText }
  });
};
