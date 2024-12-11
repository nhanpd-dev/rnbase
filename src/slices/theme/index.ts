import { PayloadAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { createSlice } from '@/store/@reduxjs/toolkit'
import { useInjectReducer } from '@/store/redux-injectors'
import { ThemeKeyType } from '@/theme/themes'
import { initialStates } from '../initialStates'
import { ThemeState } from './types'
import { useSelectorData } from '../selectors'
import { saveTheme } from '@/theme/utils'

const name = 'theme';
const slice = createSlice({
  name,
  initialState: initialStates[name],
  reducers: {
    changeTheme(state: { selected: ThemeKeyType }, action: PayloadAction<ThemeKeyType>) {
      saveTheme(action.payload);
      state.selected = action.payload;
    },
  },
})

export const { actions: themeActions, reducer } = slice

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  const { actions } = slice
  const dispatch = useDispatch()
  const state = useSelectorData(name) as ThemeState;
  const themeKey: ThemeKeyType = state.selected;
  const isDarkMode = themeKey === 'dark'; 
  const changeTheme = (payload: ThemeKeyType) => dispatch(actions.changeTheme(payload))
  return { changeTheme, themeKey, isDarkMode }
}
