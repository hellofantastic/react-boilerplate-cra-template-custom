import { all } from 'redux-saga/effects';
import { userSaga } from '../app/pages/User/slice/saga';
// [IMPORT NEW SAGA GENERATOR ABOVE] < Needed for generating sagas seamlessly
export default function* rootSaga() {
  yield all([
    userSaga(),
    // [INSERT NEW SAGA GENERATOR ABOVE] < Needed for generating sagas seamlessly
  ]);
}
