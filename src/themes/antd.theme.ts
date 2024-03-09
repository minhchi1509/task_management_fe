import { ThemeConfig } from 'antd';

import playpensansFont from 'src/assets/fonts';

const antdCustomTheme: ThemeConfig = {
  token: {
    fontFamily: playpensansFont.style.fontFamily
  }
};

export default antdCustomTheme;
