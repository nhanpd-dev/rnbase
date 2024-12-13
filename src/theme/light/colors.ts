import { palette } from '../palette';

export const colors = {
  primary: '#376CFB',
  secondary: palette.black,
  line: palette.offWhite,
  text: palette.black,
  background: palette.white,
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  switch: palette.black,
  switchTrack: palette.white,
  ...palette,
};

export type Color = typeof colors;
export type ColorName = keyof typeof colors;
