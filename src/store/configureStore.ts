import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';

export const configureAppStore = () => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const enhancers = createInjectorsEnhancer({
    createReducer,
    runSaga,
  }) as StoreEnhancer;

  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(enhancers),
  });

  return store;
};
