export const typography = {
  emoji: {
    fontSize: '50px',
    color: 'text',
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
  normal: {
    fontWeight: 'normal',
    fontSize: '14px',
    color: 'text',
    fontFamily: 'Poppins',
  },
  light: {
    fontSize: '16px',
    color: 'text',
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: '28px',
    color: 'text',
    fontFamily: 'Poppins',
  },
  h2: {
    fontSize: '28px',
    color: 'text',
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
  subTitle: {
    fontSize: '14px',
    color: 'text',
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
}

export type Typography = keyof typeof typography
