import { all } from 'redux-saga/effects';
import { userSaga } from '../app/pages/User/slice/saga';

export default function* rootSaga() {
  yield all([
    userSaga(),
  ]);
}