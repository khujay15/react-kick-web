import { MODAL_ACTION } from './ModalAction';

export interface ModalReducerState {
  open: boolean;
  modalType: string;
}

const INITIAL_STATE = {
  open: false,
  modalType: 'Point',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ModalReducer(state = INITIAL_STATE, action: MODAL_ACTION): any {
  switch (action.type) {
    case 'MODAL_OPEN':
      return {
        ...state,
        open: true,
        modalType: action.payload.modalType,
      };

    case 'MODAL_CLOSE':
      return {
        ...state,
        open: false,
        modalType: action.payload.modalType,
      };

    default:
      return state;
  }
}
