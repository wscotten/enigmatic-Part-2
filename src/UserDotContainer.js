import { connect } from 'react-redux'
import UserDotComponent from './UserDotComponent.jsx'

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
