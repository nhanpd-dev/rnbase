import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store/RootState';
import { RootStateKeyType } from '../store/injector-typings';
import { initialStates } from './initialStates';

export const selectDomain = (state: RootState) => state;

export const useSelectorData = (
  key: RootStateKeyType,
): RootState[RootStateKeyType] => {
  const selectState = createSelector(
    selectDomain,
    (state) => state[key] || initialStates[key],
  );
  const state = useSelector(selectState);

  return state;
};

// export const selectThemeKey = createSelector(
//   selectDomain,
//   ({ theme = initialStates.theme }) => theme.selected || 'light',
// );
