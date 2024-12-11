/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createSlice } from '@/store/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '@/store/redux-injectors';

import { saga } from './saga';
import { AuthState } from './types';
import { initialStates } from '../initialStates';
import { useSelectorData } from '../selectors';

const name = 'auth';
const initialState: AuthState = initialStates[name];
const slice = createSlice({
  name,
  initialState,
  reducers: {
    doLogin: (state, action: PayloadAction<{ email: string; password: string }>) => {},
    doLoginSuccess: (state, action: PayloadAction<AuthState>) => {
      state.authenticated = action.payload.authenticated;
    },
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    doLogout: (state, action: PayloadAction) => {},
  },
});

export const { actions, reducer } = slice;

export const useAuth = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();

  const doLogin = (payload: { email: string; password: string }) => dispatch(actions.doLogin(payload));
  const state = useSelectorData(name) as AuthState;
  const setAuthentication = (payload: boolean) => dispatch(actions.setAuthentication(payload));
  const doLogout = () => dispatch(actions.doLogout());
  return {
    doLogin,
    setAuthentication,
    doLogout,
    ...state,
  };
};
