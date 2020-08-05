import React from 'react'
const Counter = function ({ increase, decrease, addvalue, subtractvalue, counter }) {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={addvalue}>Add 5</button>
      <button onClick={subtractvalue}>Subtract 5</button>
    </div>
  )
}

export default Counter