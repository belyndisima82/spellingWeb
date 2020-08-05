import {
    Map as ImmutableMap,
  } from 'immutable';
  
  import { types } from '../actions/session';
  
  export default (state = ImmutableMap(), action) => {
    switch (action.type) {
        case types.CLOSE_MODAL: {
            return state.set(`${action.payload}Visible`, false);
          }
        case types.OPEN_MODAL: {
            return state.set(`${action.payload}Visible`, true);
          }
        default:
        return state;
    }
  };