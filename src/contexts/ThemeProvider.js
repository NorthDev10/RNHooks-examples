import React, {useState, createContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {THEME_NAMES} from '../constants';

const themes = {
  [THEME_NAMES.LIGHT]: StyleSheet.create({
    button: {
      color: '#000000',
      backgroundColor: '#eeeeee',
    },
  }),
  [THEME_NAMES.DARK]: StyleSheet.create({
    button: {
      color: '#ffffff',
      backgroundColor: '#222222',
    },
  }),
};

const ThemeContext = createContext(themes.light);

const ThemeProvider = ({children}) => {
  const [themeName, setThemeName] = useState(THEME_NAMES.LIGHT);
  const selectedTheme = themes[themeName] || themes[THEME_NAMES.LIGHT];

  const theme = useMemo(
    () => ({
      theme: selectedTheme,
      themeName,
      setThemeName,
    }),
    [selectedTheme, themeName],
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
