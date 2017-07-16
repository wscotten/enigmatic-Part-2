import { connect } from 'react-redux'
import Squares from 'components/Squares.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.path,
  }
}

const SquaresContainer = connect(
  mapStateToProps,
  null,
)(Squares)

export default SquaresContainer;
