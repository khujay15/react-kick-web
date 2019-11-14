/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import color from '@/theme/color';

export const modalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
  z-index: 3;
`;

export const modal = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 40vh;
  min-width: 250px;
  min-height: 250px;

  border-radius: 10px;
  background-color: white;
  z-index: 3;

  box-shadow: 0px 3px 3px #dbdbdb;
`;

export const modalInside = styled.div`
  margin-left: 12px;
  margin-right: 12px;
`;

export const button = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px 0;
  border-radius: 0 0 10px 10px;
  background-color: ${color.oboon};
  font-size: 13pt;
  color: white;
  border: 0;
  cursor: pointer;
`;
