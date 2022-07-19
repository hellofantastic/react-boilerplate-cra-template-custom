/* --- STATE --- */

export interface UserState {
  username: string;
  email: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum UserErrorType {
  RESPONSE_ERROR = 1,
  SIGN_IN_GATEWAY_NOT_FOUND = 2,
  USER_NOT_FOUND = 3,
  USERNAME_EMPTY = 4,
  UNAUTHORIZED = 5,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = UserState;
