import React from 'react'
import CounterControl from '../components/counterControl'
import CounterOutput from '../components/counterOutput'
const Counter = function (props) {
  console.log('props: ', props)
  return (
    <div>
      <CounterOutput value={props.counter} />
      <CounterControl label="Add 5" onClick={() => props.add} />
      <CounterControl label="Subtract 5" onClick={() => props.subtract} />
      <CounterControl label="Increment" onClick={() => props.increment} />
      <CounterControl label="Decrement" onClick={() => props.decrement} />
    </div>
  )
}

export default Counter