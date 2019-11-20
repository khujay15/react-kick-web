import React from 'react';
import DefaultPage from '@/components/DefaultPage';
import ArrowBox from '@/components/module/ArrowBox';

import { RouteComponentProps } from 'react-router-dom';

const LoginPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps,
): JSX.Element => {
  return (
    <DefaultPage
      themeText="로그인"
      history={props.history}
      BottomButtonText="로그인하기"
      BottomOnClick={(): void => console.log('TESTLOGIN')}
    >
      <ArrowBox>
        <input
          type="text"
          name="Login_ID"
          placeholder="이메일을 입력해주세요"
          style={{
            height: '3vh',
            minHeight: '30px',
            width: '99%',
            paddingLeft: '5px',
            borderWidth: '0',
            fontSize: '15px',
          }}
        />
      </ArrowBox>

      <div style={{ marginBottom: '2vh' }} />

      <ArrowBox>
        <input
          type="text"
          name="Login_PASSWORD"
          placeholder="비밀번호를 입력해주세요"
          style={{
            height: '3vh',
            minHeight: '30px',
            width: '99%',
            paddingLeft: '5px',
            borderWidth: '0',
            fontSize: '15px',
          }}
        />
      </ArrowBox>
      <div style={{ marginBottom: '2vh' }} />
    </DefaultPage>
  );
};

export default LoginPage;
