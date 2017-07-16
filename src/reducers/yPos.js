export default function yPosReducer(yPos = 532, {type}) {
  switch (type) {
    case 'MOVE_UP':
      return yPos - 5;
    case 'MOVE_DOWN':
      return yPos + 5;
    default:
      return yPos;
  }
}
