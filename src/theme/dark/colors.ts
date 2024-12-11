import { Color } from "../light/colors";
import { palette } from "../palette";

export const colors: Color = {
  primary: palette.black,
  secondary: palette.white,
  line: palette.offWhite,
  text: palette.white,
  background: palette.black,
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  switch: palette.white,
  switchTrack: palette.black,
  ...palette
};
