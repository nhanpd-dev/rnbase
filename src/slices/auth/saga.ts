import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put } from 'redux-saga/effects';

import { sagaCustomize } from '../sagaCustomize';

import { actions } from '.';
import { deleteToken, persistToken } from '@/utils/storage';
import { login, LoginResponse } from '@/services';

export function* loginSaga({ payload, type }: PayloadAction<{ email: string; password: string }>) {
  yield sagaCustomize(function* () {
    const { tokens }: LoginResponse = yield call(login, payload);
    persistToken(tokens.accessToken || '');
    yield put(actions.setAuthentication(true));
  }, type);
}

export function* logoutSaga({ type }: PayloadAction) {
  yield sagaCustomize(function* () {
    deleteToken();
    yield put(actions.setAuthentication(false));
  }, type);
}

export function* saga() {
  yield takeLatest(actions.doLogin.type, loginSaga);
  yield takeLatest(actions.doLogout.type, logoutSaga);
}
