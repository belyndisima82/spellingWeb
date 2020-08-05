const host = 'http://localhost:3002';

const getHeader = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

module.exports = {
  word: {
    getWord() {
      const url = `${host}/random`;
      return fetch(url, getHeader);
    },
    getSpelling(data) {
      console.log(data)
      const url = `${host}/spelling/?id=${data.id}&speltWord=${data.word}`;
      return fetch(url, getHeader);
    }
  },
};
