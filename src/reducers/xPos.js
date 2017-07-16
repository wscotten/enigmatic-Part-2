export default function xPosReducer(xPos = 532, {type}) {
  switch (type) {
    case 'MOVE_LEFT':
      return xPos - 5;
    case 'MOVE_RIGHT':
      return xPos + 5;
    default:
      return xPos;
  }
}
