import React from 'react';
import Squares from './Squares.jsx';
import UserDot from 'containers/UserDot';

const GameContainer = (props) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '706px',
        height: '706px',
        backgroundColor: '#999900',
        border: '3px solid #999900',
        margin: 'auto',
      }}
    >
      <Squares />
      <UserDot />
    </div>
  );
}

export default GameContainer;
