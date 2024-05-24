import { PaletteColor } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    midNight: PaletteColor;
    blueZodiac: PaletteColor;
  }
  interface Palette {
    midNight: PaletteColor;
    blueZodiac: PaletteColor;
  }
}
