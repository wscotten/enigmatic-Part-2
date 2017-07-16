const xPosReducer = (xPos = 500, action) => {
  switch (action.type) {
    case 'MOVE_LEFT':
      return xPos - 5;
    case 'MOVE_RIGHT':
      return xPos + 5;
    default:
      return xPos;
  }
}

export default xPosReducer;
