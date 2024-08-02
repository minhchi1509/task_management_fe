import { ThemeConfig } from 'antd';

import poppinsFont from 'src/assets/fonts';
import { HEADER_HEIGHT } from 'src/constants/variables';

const AntdThemes: ThemeConfig = {
  token: {
    fontFamily: poppinsFont.style.fontFamily
  },
  components: {
    Layout: {
      headerHeight: HEADER_HEIGHT,
      siderBg: '#FFFFFF',
      headerBg: '#FFFFFF'
    }
  }
};

export default AntdThemes;
