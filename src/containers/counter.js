import React from 'react'
import { connect } from "react-redux";
import { add, subtract, increment, decrement } from '../reducer/action'

const Counter = function (props) {
  console.log('props', props)
  return (
    <div>
      <h1>Counter</h1>
      <h2>{props.counter}</h2>
      <button onClick={() => props.increase()}>Increment</button>
      <button onClick={() => props.decrease()}>Decrement</button>
      <button onClick={() => props.addvalue()}>Add 5</button>
      <button onClick={() => props.subtractvalue()}>Subtract 5</button>
    </div>
  )
}
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