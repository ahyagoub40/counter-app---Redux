import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, increment, decrement } from '../reducer/action'

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}> Decrement</button>
      <button onClick={() => dispatch(add())}> Add 5</button>
      <button onClick={() => dispatch(subtract())}> Subtract 5</button >
    </div >
  )
}

export default Counter;
