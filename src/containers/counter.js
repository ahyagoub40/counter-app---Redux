import { connect } from "react-redux";
import { add, subtract, increment, decrement } from '../reducer/action'

import Counter from '../component/counter'

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increment()),
  decrease: () => dispatch(decrement()),
  subtractvalue: () => dispatch(subtract()),
  addvalue: () => dispatch(add())
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)