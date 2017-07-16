const yPosReducer = (yPos = 500, action) => {
  switch (action.type) {
    case 'MOVE_UP':
      return yPos - 5;
    case 'MOVE_DOWN':
      return yPos + 5;
    default:
      return yPos;
  }
}

export default yPosReducer;
