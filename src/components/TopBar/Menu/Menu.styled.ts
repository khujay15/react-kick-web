/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { color } from '@/theme';

export const MenuContainer = styled.div<{ open: string | number | boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => (props.open ? '100%' : 0)};
  height: 100vh;

  background: white;

  /* transition: width 0.2s ease-in-out; */
  z-index: 5;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 5px 5px #dbdbdb;
`;

export const MenuTabView = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 11vh;
`;

export const PurpleText = styled.span`
  color: ${color.oboon};
  font-size: 20;
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vh;
`;
export const ButtonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonImage = styled.img`
  height: 10vh;
  max-height: 100px;
  cursor: pointer;
  alt: 'buttonImg';
`;

export const ArrowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
