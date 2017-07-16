const pathReducer = (path = [40], action) => {
  if(action.type === 'MOVE_LEFT' ||
      action.type === 'MOVE_RIGHT' ||
      action.type === 'MOVE_UP' ||
      action.type === 'MOVE_DOWN') {
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
        const xCoord = Math.floor((action.xPos + coord.xPos) / 100 % 7);
        const yCoord = Math.floor((action.yPos + coord.yPos) / 100 % 7);
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

export default pathReducer;
