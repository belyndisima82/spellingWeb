import { Map as ImmutableMap } from 'immutable';

export const showWord = (state) => state.word.get('randomWord', ImmutableMap());
export const showResponse = (state) => state.word.get('response', ImmutableMap());
export const playAgain = (state) => state.word.get('repeat');


export default showWord;
