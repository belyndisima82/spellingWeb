import { types } from '../actions/word';
import {
  Map as ImmutableMap,
  fromJS,
} from 'immutable';
  
  export default (state = ImmutableMap(), action) => {
    switch (action.type) {
      case types.RECEIVE_WORD:
      return state.set('randomWord', fromJS(action.payload));
      case types.RECEIVE_RESPONSE:
      return state.set('response', fromJS(action.payload));
      case types.RESET_APP:
      return ImmutableMap();
      default:
        return state;
    }
  };