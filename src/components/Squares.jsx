import React from 'react';

export default function Squares({path}) {
  const blocks = [];
  for(let i = 1; i < 50; i++) {
    blocks.push(i);
  }
  const blockDivs = blocks.map((block, i) => {
    for(let j = 0; j < path.length; j++) {
      if(i === path[j]) {
        return <div
          key={block.toString()}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#606060',
            border: '3px solid #999900',
          }}
        >
        </div>
      }
    }
    return <div
      key={block.toString()}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#FFFF66',
        border: '3px solid #999900',
      }}
    >
    </div>
  });
  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      flexWrap: 'wrap',
    }}>{blockDivs}</div>
  );
}
