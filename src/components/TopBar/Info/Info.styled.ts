/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const InfoContainer = styled.div<{ open: string | number | boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => (props.open ? '100%' : 0)};
  height: 100vh;

  background: white;

  /* transition: width 0.2s ease-in-out; */
  z-index: 5;
`;

export const InfoTabView = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 11vh;
`;
