import React from 'react';
import {HiddenSquare} from './HiddenSquare';
import {VisibleSquare} from './VisibleSquare';

const solutionPaths = [
  [40, 33, 26, 19, 18, 17, 16, 15, 8],
  [40, 39, 38, 37, 36, 29, 22, 23, 24, 25, 26, 19, 12, 11, 10, 9, 8],
  [40, 39, 38, 31, 24, 25, 18, 11, 10, 9, 8],
  [40, 33, 26, 19, 12, 11, 10, 17, 24, 23, 22, 15, 8],
  [40, 33, 26, 25, 24, 31, 38, 37, 36, 29, 22, 15, 8, 9, 10, 11, 12],
  [40, 39, 32, 31, 24, 23, 16, 9, 8],
  [40, 39, 38, 37, 36, 29, 22, 15, 8, 9, 10, 11, 12],
  [40, 33, 26, 19, 12, 11, 10, 17, 24, 31, 30, 29, 22, 15, 8],
  [40, 39, 32, 31, 24, 17, 18, 11, 12],
  [40, 39, 38, 37, 36, 29, 22, 23, 24, 17, 10, 9, 8],
  [40, 39, 32, 25, 24, 23, 22, 15, 8, 9, 10, 11, 12],
  [40, 39, 38, 37, 36, 29, 22, 23, 24, 17, 10, 11, 12],
  [40, 39, 38, 37, 36, 29, 22, 23, 24, 25, 26, 19, 12],
];

const solutionPath = solutionPaths[Math.floor(Math.random() * (13))];

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
    const startingSolutionDelay = solutionPath.indexOf(block);
    if(startingSolutionDelay >= 0) {
      return (
        <VisibleSquare
          delay={startingSolutionDelay / 5}
          key={block.toString()}
        />
      );
    } else {
      return (
        <VisibleSquare
          delay={(1.2 - Math.floor(block / 7) / 5) + solutionPath.length / 5}
          key={block.toString()}
        />
      );
    }
  });
  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      flexWrap: 'wrap',
    }}>{blockDivs}</div>
  );
}
