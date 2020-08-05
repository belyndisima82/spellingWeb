export const types = {
    CLOSE_MODAL: 'CLOSE_MODAL',
    OPEN_MODAL: 'OPEN_MODAL',
  };


export const closeModal = (payload) => ({
    type: types.CLOSE_MODAL,
    payload,
  });
  
  export const openModal = (payload) => ({
    type: types.OPEN_MODAL,
    payload,
  });