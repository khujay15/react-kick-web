import { LOGIN_ACTION } from './LoginAction';

export interface LoginReducerState {
  point?: number;
  name?: string;
  email?: string;
  loginSuccess: boolean;
}

const INITIAL_STATE = {
  point: 0,
  name: '로그인이 필요합니다!',
  email: 'example@google.com',
  loginSuccess: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LoginReducer(state = INITIAL_STATE, action: LOGIN_ACTION): any {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        point: action.payload,
      };
    case 'LOGIN_TEST':
      return {
        ...state,
        point: action.payload.point,
        name: action.payload.name,
        email: action.payload.email,
        loginSuccess: action.payload.loginSuccess,
      };

    default:
      return state;
  }
}
