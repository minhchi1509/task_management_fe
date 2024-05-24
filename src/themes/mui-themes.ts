import { ThemeOptions } from '@mui/material';

import playpensansFont from 'src/assets/fonts';
import { createColor } from 'src/utils/common-util';

type TMuiThemes = {
  dark: ThemeOptions;
  light: ThemeOptions;
};

const MuiThemes: TMuiThemes = {
  dark: {
    typography: {
      fontFamily: playpensansFont.style.fontFamily
    },
    palette: {
      mode: 'dark',
      midNight: createColor('#111936', '#d7dcec'),
      blueZodiac: createColor('#1A223F')
    }
  },
  light: {
    typography: {
      fontFamily: playpensansFont.style.fontFamily
    },
    palette: {
      mode: 'light',
      midNight: createColor('#FFFFFF', '#121926'),
      blueZodiac: createColor('#EEF2F6')
    }
  }
};

export default MuiThemes;
