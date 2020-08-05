import { fork, all } from 'redux-saga/effects';
import word from './word';

function * startAppSagas() {
  yield all([
    ...word,
  ]);
}

export default function * () {
  yield fork(startAppSagas);
}