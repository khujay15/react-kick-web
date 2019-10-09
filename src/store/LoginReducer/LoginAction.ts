import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { LoginReducerState } from './LoginReducer';

interface LoginAccessI {
  type: 'LOGIN_ACCESS';
}

interface LoginSuccessI {
  type: 'LOGIN_SUCCESS';
  payload: number;
}

interface LoginFailI {
  type: 'LOGIN_FAIL';
}

interface LoginTestI {
  type: 'LOGIN_TEST';
  payload: {
    name: string;
    email: string;
    point: number;
    loginSuccess: boolean;
  };
}

export const LoginTest = (): LoginTestI => {
  return {
    type: 'LOGIN_TEST',
    payload: {
      name: 'TEST',
      email: 'example@naver.com',
      point: 777,
      loginSuccess: true,
    },
  };
};

export const LoginSuccessFunc = (num: number): LoginSuccessI => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: num,
  };
};

export const LoginSuccessAsync = (num: number) => (
  dispatch: ThunkDispatch<LoginReducerState, undefined, AnyAction>,
): void => {
  // 1초 뒤 액션 디스패치
  console.log('ASYNCC');
  setTimeout(() => {
    dispatch(LoginSuccessFunc(num));
  }, 5000);
};

export type LOGIN_ACTION = LoginSuccessI | LoginAccessI | LoginTestI;
