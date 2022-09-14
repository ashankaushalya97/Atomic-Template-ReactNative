import {fork, all} from 'redux-saga/effects';

import AuthSaga from '../redux/sagas/auth';

const rootSaga = function* root() {
  yield all([fork(AuthSaga)]);
};

export default rootSaga;
