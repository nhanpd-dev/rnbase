import React, {PropsWithChildren} from 'react'
import { ThemeProvider as OiriginThemeProvider } from 'styled-components/native'
import { themes } from './themes'
import { useThemeSlice } from '@/slices/theme'

export const ThemeProvider: React.FC<PropsWithChildren> = function ({ children }) {
  const {themeKey} = useThemeSlice();
  const theme = themes[themeKey];
  return <OiriginThemeProvider theme={theme}>{children}</OiriginThemeProvider>
}
