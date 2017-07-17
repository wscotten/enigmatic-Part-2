import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const VisibleSquare = styled.div`
  width: 100px;
  height: 100px;
  background-color: #FFFF66;
  border: 3px solid #999900;
  opacity: 0;
  animation: ${fadeIn} .3s ease ${props => props.delay}s forwards;
`;
