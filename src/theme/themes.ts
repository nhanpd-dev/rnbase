import { darkTheme } from './dark/theme';
import { lightTheme } from './light/theme';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeKeyType = keyof typeof themes;
