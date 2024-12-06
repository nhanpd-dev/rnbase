import 'styled-components/native'
import { Theme } from '@/theme'

/* This is the suggested way of declaring theme types */
declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
