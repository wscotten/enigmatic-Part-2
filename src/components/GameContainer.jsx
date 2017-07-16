import React from 'react';
import Squares from 'containers/Squares';
import UserDot from 'containers/UserDot';

export default function GameContainer() {
  return (
    <div
      style={{
        position: 'relative',
        width: '706px',
        height: '706px',
        backgroundColor: '#606060',
        border: '3px solid #999900',
        margin: 'auto',
      }}
    >
      <Squares />
      <UserDot />
    </div>
  );
}
