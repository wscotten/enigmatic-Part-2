export default function pathReducer(path = [40], {type, xPos, yPos}) {
  if(type === 'MOVE_LEFT' || type === 'MOVE_RIGHT' || type === 'MOVE_UP' ||
      type === 'MOVE_DOWN') {
    const userDotCoords = [
      {
        xPos: 0,
        yPos: 0,
      },
      {
        xPos: 36,
        yPos: 0,
      },
      {
        xPos: 0,
        yPos: 36,
      },
      {
        xPos: 36,
        yPos: 36,
      },
    ];
    const newPaths = userDotCoords
      .map((coord) => {
        const xCoord = Math.floor((xPos + coord.xPos) / 100 % 7);
        const yCoord = Math.floor((yPos + coord.yPos) / 100 % 7);
        const squareInside = 7 * yCoord + xCoord;
        if(!path.includes(squareInside)) {
          return squareInside;
        }
      })
      .filter((path) => path !== undefined);
    return path.concat(newPaths);
  }
  return path;
}
