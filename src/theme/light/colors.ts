import { palette } from "../palette";

export const colors = {
  primary: palette.white,
  secondary: palette.black,
  line: palette.offWhite,
  text: palette.black,
  background: palette.white,
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  switch: palette.black,
  switchTrack: palette.white,
  ...palette
};

export type Color = typeof colors;
export type ColorName = keyof typeof colors;
