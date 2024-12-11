import { saveString, STORAGE, loadString } from '@/utils/storage'
import { ThemeKeyType } from './themes'

export function saveTheme(theme: ThemeKeyType) {
  saveString(STORAGE.SELECTED_THEME, theme || 'light');
}

export function getThemeFromStorage(): ThemeKeyType {
  const theme = loadString(STORAGE.SELECTED_THEME)
  return theme ? (theme as ThemeKeyType) : 'light'
}
