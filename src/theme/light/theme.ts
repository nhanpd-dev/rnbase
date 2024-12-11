import {spacing} from '../spacing';
import {typography} from '../typography';
import {colors} from './colors';

export const lightTheme = {
  colors,
  typography,
  spacing,
};

export type Theme = typeof lightTheme;
