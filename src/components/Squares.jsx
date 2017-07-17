import React from 'react';
import {HiddenSquare} from './HiddenSquare';
import {VisibleSquare} from './VisibleSquare';

export default function Squares({path}) {
  const blocks = [];
  for(let i = 0; i < 49; i++) {
    blocks.push(i);
  }
  const blockDivs = blocks.map((block) => {
    for(let j = 0; j < path.length; j++) {
      if(block === path[j]) {
        return (
          <HiddenSquare key={block.toString()} />
        );
      }
    }
    return (
      <VisibleSquare delay={1.2 - Math.floor(block / 7) / 5} key={block.toString()} />
    );
  });
  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      flexWrap: 'wrap',
    }}>{blockDivs}</div>
  );
}
