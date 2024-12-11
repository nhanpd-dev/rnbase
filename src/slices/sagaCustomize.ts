import { put } from 'redux-saga/effects';
import { loadingActions } from './loading';

type Callback = () => void;
export function* sagaCustomize(callbackAction: Callback, key: string) {
  try {
    yield put(loadingActions.addLoading(key));
    if (callbackAction) {
      yield callbackAction();
    }
  } catch (error) {
    // handle Error
  } finally {
    yield put(loadingActions.removeLoading(key));
  }
}
