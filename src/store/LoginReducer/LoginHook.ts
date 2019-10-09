/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../index';
import { LoginTest } from './LoginAction';
import { useCallback } from 'react';
import { LoginReducerState } from './LoginReducer';

interface LoginHook {
  UserInfo: LoginReducerState;
  Test: (...args: any[]) => any;
}

export default function useLogin(): LoginHook {
  const UserInfo = useSelector((state: StoreState) => state.LoginReducer);
  const dispatch = useDispatch();

  const Test = useCallback((num: number) => dispatch(LoginTest()), [dispatch]);

  return { UserInfo, Test };
}
