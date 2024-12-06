import {Spacing, spacing} from '../spacing';
import {Typography, typography} from '../typography';
import {Color, colors} from './colors';

export const lightTheme = {
  colors,
  typography,
  spacing,
};

export type Theme = typeof lightTheme;
// export interface Theme {
//   colors: Color;
//   spacing: Spacing;
//   typography: Typography;
// }
