import React from 'react';

export default function UserDot({xPos, yPos}){
  return (
    <div
      style={{
        position: 'absolute',
        left: xPos + 'px',
        top: yPos + 'px',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'red',
      }}
    >
    </div>
  );
}
