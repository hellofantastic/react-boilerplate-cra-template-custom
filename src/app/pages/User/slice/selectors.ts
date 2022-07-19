import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.user || initialState;

export const selectUser = (state: RootState) => state.user || initialState;
export const selectFetching = createSelector(
  [selectDomain],
  userState => userState.isFetching,
);
