/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit'

import { InjectedReducersType } from './injector-typings'
import { loadingReducer } from '@/slices/loading';
import { metadataReducer } from '../slices/metadata';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    metadata: metadataReducer,
    loading: loadingReducer,
    ...injectedReducers,
  });
}