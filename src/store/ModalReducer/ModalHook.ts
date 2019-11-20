import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../index';

import { useCallback } from 'react';

import { ModalReducerState } from './ModalReducer';
import { ModalOpenAction, ModalCloseAction } from './ModalAction';

interface ModalHook {
  ModalInfo: ModalReducerState;
  ModalOpen: () => void;
  ModalClose: () => void;
}

export default function useLogin(): ModalHook {
  const ModalInfo = useSelector((state: StoreState) => state.ModalReducer);
  const dispatch = useDispatch();

  const ModalOpen = useCallback(() => dispatch(ModalOpenAction()), [dispatch]);
  const ModalClose = useCallback(() => dispatch(ModalCloseAction()), [
    dispatch,
  ]);

  return { ModalInfo, ModalOpen, ModalClose };
}
