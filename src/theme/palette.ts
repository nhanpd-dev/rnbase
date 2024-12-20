type PaletteName =
  | 'black'
  | 'white'
  | 'offWhite'
  | 'orange'
  | 'orangeDarker'
  | 'lightGrey'
  | 'lighterGrey'
  | 'angry'
  | 'deepPurple'
  | 'blue'
  | 'black05'
  | 'transparent'
  | 'disabled';

export const palette: { [key in PaletteName]: string } = {
  black: '#252525',
  white: '#ffffff',
  offWhite: '#e6e6e6',
  orange: '#FBA928',
  orangeDarker: '#EB9918',
  lightGrey: '#939AA4',
  lighterGrey: '#CDD4DA',
  angry: '#DB4444',
  deepPurple: '#5D2555',
  blue: 'blue',
  black05: 'rgba(0,0,0,0.5)',
  transparent: 'transparent',
  disabled: '#CCCCCC',
};
