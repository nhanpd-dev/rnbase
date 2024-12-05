import React, {PropsWithChildren} from 'react'
import { ThemeProvider as OiriginThemeProvider } from 'styled-components'
import { themes } from '../theme/themes'

export const ThemeProvider: React.FC<PropsWithChildren> = function ({ children }) {
  return <OiriginThemeProvider theme={themes.light}>{children}</OiriginThemeProvider>
}
