import React from 'react';
import {connect} from 'react-redux'

const UserDotComponent = ({xPos, yPos}) => {
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

export default UserDotComponent;
