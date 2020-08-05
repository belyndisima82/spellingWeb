import { request } from "https";

export const types = {
    REQUEST_WORD: 'REQUEST_WORD',
    RECEIVE_WORD: 'RECEIVE_WORD',
    SAVE_RESPONSE: 'SAVE_RESPONSE',
    REQUEST_RESPONSE: 'REQUEST_RESPONSE',
    RECEIVE_RESPONSE: 'RECEIVE_RESPONSE',
    PLAY_AGAIN: 'PLAY_AGAIN',
    RESET_APP: 'RESET_APP'
  };
  
  export const requestWord = (payload) => ({
    type: types.REQUEST_WORD,
    payload,
  });
  export const receiveWord = (payload) => ({
    type: types.RECEIVE_WORD,
    payload,
  });
  export const saveResponse = (payload) => ({
    type: types.SAVE_RESPONSE,
    payload,
  });
  export const requestResponse = (payload) => ({
    type: types.REQUEST_RESPONSE,
    payload,
  });
  export const receiveResponse = (payload) => ({
    type: types.RECEIVE_RESPONSE,
    payload,
  });
  export const playAgain = (payload) => ({
    type: types.PLAY_AGAIN,
    payload,
  });
  export const resetApp = (payload) => ({
    type: types.RESET_APP,
    payload,
  });
  
  export default requestWord;