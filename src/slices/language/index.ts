import { PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createSlice } from '@/store/@reduxjs/toolkit';
import { useInjectReducer } from '@/store/redux-injectors';
import { initialStates } from '../initialStates';
import { LanguageState } from './types';
import { useSelectorData } from '../selectors';
import { Languages, saveLanguage } from '@/localization/resources';

const name = 'language';
const slice = createSlice({
  name,
  initialState: initialStates[name],
  reducers: {
    changeLanguage(state: LanguageState, action: PayloadAction<Languages>) {
      saveLanguage(action.payload);
      state.language = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useLanguageSlice = () => {
  useInjectReducer({ key: slice.name, reducer });
  const { actions } = slice;
  const dispatch = useDispatch();
  const { language } = useSelectorData(name) as LanguageState;
  const changeLanguage = (payload: Languages) => dispatch(actions.changeLanguage(payload));

  return { changeLanguage, language };
};
