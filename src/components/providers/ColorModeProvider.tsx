/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { PaletteMode } from '@mui/material';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { EStorageKey, EThemeMode } from 'src/constants/enum';

interface IColorModeContext {
  mode: PaletteMode;
  setColorMode: (mode: PaletteMode) => void;
}

export const ColorModeContext = createContext<IColorModeContext | null>(null);

const ColorModeProvider = ({ children }: PropsWithChildren) => {
  const currentThemeMode = localStorage.getItem(
    EStorageKey.THEME_MODE
  ) as PaletteMode;
  const [mode, setMode] = useState<PaletteMode>(
    currentThemeMode || EThemeMode.LIGHT
  );

  useEffect(() => {
    if (!currentThemeMode) {
      localStorage.setItem(EStorageKey.THEME_MODE, EThemeMode.LIGHT);
    }
  }, []);

  const setColorMode = (mode: PaletteMode) => {
    localStorage.setItem(EStorageKey.THEME_MODE, mode);
    setMode(mode);
  };

  return (
    <ColorModeContext.Provider value={{ mode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
