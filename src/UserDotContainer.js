import { connect } from 'react-redux'
import UserDotComponent from './UserDotComponent.jsx'
import { move_left, move_right } from './actions/xPos';
import { move_up, move_down } from './actions/yPos';
import store from './store/store';

document.onkeydown = function(evt) {
  evt.preventDefault()
  switch(evt.keyCode) {
    case 37:
      store.dispatch(move_left());
      break;
    case 38:
      store.dispatch(move_up());
      break;
    case 39:
      store.dispatch(move_right());
      break;
    case 40:
      store.dispatch(move_down());
      break;
    default:
      // do nothing
      break;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    xPos: state.xPos,
    yPos: state.yPos,
  }
}

const UserDotContainer = connect(
  mapStateToProps,
  null,
)(UserDotComponent)

export default UserDotContainer;
