import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
//import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { UserState, UserErrorType } from './types';
//import { userSaga } from './saga';
export const initialState: UserState = {
  username: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, _: PayloadAction<UserState>) {
      state.isFetching = true;
    },
    signInSuccess(state, action) {
      console.log('Action', action);
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isFetching = false;
      state.isSuccess = true;
    },
    signInError(state, action: PayloadAction<UserErrorType>) {
      //console.log('singin erorr', action);
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload === 5 ? 'Unauthorized' : '';
    },
    clearState(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = '';
    },
  },
});
export const { actions: userActions, reducer } = slice;

export const useUserSlice = () => {
  //useInjectReducer({ key: slice.name, reducer: slice.reducer });
  ////useInjectSaga({ key: slice.name, saga: userSaga });
  return { actions: slice.actions };
};
