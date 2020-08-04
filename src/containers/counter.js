import { connect } from "react-redux";
import { add, subtract, increment, decrement } from '../reducer/action'
import Counter from '../components/counter'

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  subtract: () => dispatch(subtract()),
  add: () => dispatch(add())
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)