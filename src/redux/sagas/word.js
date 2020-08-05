import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { receiveWord, types, receiveResponse, resetApp } from '../actions/word';
import { fetchWord, fetchSpelling } from '../../data/word';
import { openModal } from '../actions/session';


function* handleRequestWord() {
  const { response, error } = yield call(fetchWord);
    if (response && !error) {
      localStorage.setItem('word', JSON.stringify(response))
      return yield put(receiveWord(response));
    } else {
      console.log('sagas', error)
    }
  return undefined;
}

function * handleRequestResponse(action) {
  let answer = action.payload;
  const { response, error } = yield call(fetchSpelling, answer);
  if (response) {
    yield put(receiveResponse(response));
    return yield put(openModal('resultModal'));
  }
  return undefined;
}

function * handlePlayAgain(action) {
  yield put(resetApp())
  yield put(receiveWord(action.payload));
}

function * watchWordsActions() {
  yield takeEvery(
    types.REQUEST_WORD,
    handleRequestWord,
  );
  yield takeEvery(
    types.REQUEST_RESPONSE,
    handleRequestResponse,
  );
  yield takeEvery(
    types.PLAY_AGAIN,
    handlePlayAgain,
  );
}

export default [
  fork(watchWordsActions),
];
