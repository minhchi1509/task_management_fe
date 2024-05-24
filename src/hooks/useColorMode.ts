import { useContext } from 'react';

import { ColorModeContext } from 'src/components/providers/ColorModeProvider';

const useColorMode = () => {
  const colorModeValue = useContext(ColorModeContext);

  if (!colorModeValue) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return {
    ...colorModeValue
  };
};

export default useColorMode;
