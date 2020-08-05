import api from '../api';

export const fetchWord = () => (
    api.word.getWord()
      .then((response) => response.json())
      .then((rjson) => ({ response: rjson }))
      .catch((error) => ({ error }))
);

export const fetchSpelling = (data) => (
  api.word.getSpelling(data)
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson }))
    .catch((error) => ({ error }))
);

export default fetchWord;