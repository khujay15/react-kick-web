import React, { useState } from 'react';
import DefaultPage from '@/components/DefaultPage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { color } from '@/theme';

import { RouteComponentProps } from 'react-router-dom';
import ArrowBox from '@/components/module/ArrowBox';
import BoxToggle from '@/components/module/BoxToggle';
import useLogin from '@/store/LoginReducer';
import IAMPORT from '@/api/IAMPORT';
import ScrollLock from 'react-scrolllock';

const MyPoint: React.FC<RouteComponentProps> = (
  props: RouteComponentProps,
): JSX.Element => {
  const [Selected, setSelect] = useState(0);
  const { UserInfo } = useLogin();

  return (
    <DefaultPage
      themeText="내 포인트"
      history={props.history}
      BottomButtonText="충전하기"
      BottomOnClick={(): void => IAMPORT(Selected)}
    >
      <ScrollLock />
      <div style={{ marginBottom: '5vh' }}>
        <p style={{ color: color.grey }}>현재 보유 포인트</p>
        <span style={{ color: color.oboon, fontSize: 20 }}>
          {UserInfo.point}P
        </span>
      </div>

      <div
        style={{
          backgroundColor: color.grey,
          width: '100%',
          height: '1px',
          marginBottom: '5vh',
        }}
      />

      <ArrowBox>
        <div
          style={BoxToggle(Selected, 1000)}
          onClick={(): void => setSelect(1000)}
        >
          <div>1000P 충전</div>
          <div style={{ color: color.oboon }}>1000원</div>
        </div>
      </ArrowBox>

      <div style={{ marginBottom: '5vh' }} />

      <ArrowBox>
        <div
          style={BoxToggle(Selected, 3000)}
          onClick={(): void => setSelect(3000)}
        >
          <div>3000P 충전</div>
          <div style={{ color: color.oboon }}>3000원</div>
        </div>
      </ArrowBox>
      <div style={{ marginBottom: '5vh' }} />

      <ArrowBox>
        <div
          style={BoxToggle(Selected, 5000)}
          onClick={(): void => setSelect(5000)}
        >
          <div>5000P 충전</div>
          <div style={{ color: color.oboon }}>5000원</div>
        </div>
      </ArrowBox>
    </DefaultPage>
  );
};

export default MyPoint;
