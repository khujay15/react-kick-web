/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: white;
  width: 100%;
  height: 7vh;
  color: white;
  z-index: 10;
  box-shadow: 0px 5px 5px #dbdbdb;
  min-height: 40px;
`;
//Hamburger Styled Below
export const Line = styled.div`
  height: 2px;
  width: 20px;
  background: ${props => (props.color ? props.color : 'black')};
  transition: all 0.2s ease;
`;

export const LineContainer = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
