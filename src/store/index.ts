/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  combineReducers,
  createStore,
  Store,
  applyMiddleware,
  compose,
} from 'redux';
import { LoginReducerState, LoginReducer } from './LoginReducer/LoginReducer';
import { ModalReducerState, ModalReducer } from './ModalReducer/ModalReducer';
import thunk from 'redux-thunk';

export interface StoreState {
  LoginReducer: LoginReducerState;
  ModalReducer: ModalReducerState;
}
const rootReducer = combineReducers({
  LoginReducer,
  ModalReducer,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});

const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Rstore = (): Store<StoreState> =>
  createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default Rstore;
