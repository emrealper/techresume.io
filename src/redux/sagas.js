import { all } from 'redux-saga/effects';



import resume from './resume/sagas';


export default function* rootSaga(getState) {
  yield all([
resume()

  ]);
}
