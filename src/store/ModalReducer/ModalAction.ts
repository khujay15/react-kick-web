interface ModalOpen {
  type: 'MODAL_OPEN';
  payload: {
    modalType: string;
  };
}

interface ModalClose {
  type: 'MODAL_CLOSE';
  payload: {
    modalType: string;
  };
}

export const ModalOpenAction = (): ModalOpen => {
  return {
    type: 'MODAL_OPEN',
    payload: {
      modalType: 'Point',
    },
  };
};

export const ModalCloseAction = (): ModalClose => {
  return {
    type: 'MODAL_CLOSE',
    payload: {
      modalType: 'Point',
    },
  };
};

export type MODAL_ACTION = ModalOpen | ModalClose;
