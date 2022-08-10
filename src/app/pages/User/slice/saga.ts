import { call, put, takeLatest } from 'redux-saga/effects';
//import { request } from 'utils/request';
import request from 'superagent';

//App
import { userActions as actions } from '.';
import { UserErrorType } from './types';

//API
async function signInApi(url, payload) {
  const apiRequest = request
    .post(url)
    .query({ username: payload.username })
    .query({ password: payload.password });
  return await apiRequest;
}

//Generator
export function* signInUser(action) {
  const hostUrl = process.env.REACT_APP_HOST_URL;
  const requestURL = `${hostUrl}/cb/perform_login`;

  try {
    // Call request helper (see 'utils/request')
    const response = yield call(signInApi, requestURL, action.payload);

    console.log('response', response);

    if (response.body && response.body.token) {
      //response.body.token
      sessionStorage.setItem('your-token', response.body.token);

      yield put(
        actions.signInSuccess({
          username: response.body.fullName,
          email: response.body.email,
        }),
      );
    }
  } catch (err: any) {
    console.log('LOGIN ERROR', err);
    if (err.response?.status === 404) {
      yield put(actions.signInError(UserErrorType.SIGN_IN_GATEWAY_NOT_FOUND));
    } else if (err.response?.status === 401) {
      yield put(actions.signInError(UserErrorType.UNAUTHORIZED));
    } else {
      yield put(actions.signInError(UserErrorType.RESPONSE_ERROR));
    }
  }
}

export function* userSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.signIn.type, signInUser);
}
