import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from '../redux/slices/auth';
import RootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

let sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    auth: AuthSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({thunk: false}),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(RootSaga);
