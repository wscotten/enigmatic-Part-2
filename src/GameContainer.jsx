import React from 'react';
import Squares from './Squares.jsx';
import UserDotContainer from './UserDotContainer';

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
      <UserDotContainer />
    </div>
  );
}

export default GameContainer;
