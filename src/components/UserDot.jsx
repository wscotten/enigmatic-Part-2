import styled from 'styled-components';

export const UserDot = styled.div`
  position: absolute;
  left: ${props => props.xPos}px;
  top: ${props => props.yPos}px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: red;
`;
