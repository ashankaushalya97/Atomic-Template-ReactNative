import {call, takeEvery, put} from 'redux-saga/effects';
import {getUser, getUserFailed} from '../../slices';
import {GET_USER} from '../../sagaActions';

export function* fetchDataSaga() {
  try {
    // let result = yield call(() =>{});
    yield put(getUser([{name: 'Rootcode', email: 'rootcode@abc.com'}]));
  } catch (e) {
    yield put(getUserFailed());
  }
}

export default function* authSaga() {
  yield takeEvery(GET_USER, fetchDataSaga);
}
