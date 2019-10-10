import React from 'react';
import * as s from './Info.styled';
import ArrowBox from '@/components/module/ArrowBox';

interface InfoProps {
  open: boolean;
  color?: string;
}

const InfoTab: React.FC<InfoProps> = (props: InfoProps): JSX.Element => {
  const menuItems = (
    <s.InfoTabView>
      <div style={{ fontSize: 25, marginBottom: '20px' }}> 고객지원</div>
      <ArrowBox Text="고장신고" />
      <div style={{ marginBottom: '20px' }} />
      <ArrowBox Text="자주 묻는 질문" />
      <div style={{ marginBottom: '20px' }} />
      <ArrowBox Text="카카오톡으로 문의하기" />
    </s.InfoTabView>
  );

  return (
    <s.InfoContainer open={props.open}>
      {props.open ? menuItems : null}
    </s.InfoContainer>
  );
};

export default InfoTab;
