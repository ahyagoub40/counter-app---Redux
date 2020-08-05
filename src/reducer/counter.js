const initialState = {
  counter: 0
};

const counter = function (state = initialState, action) {
  const add = () => ({ counter: state.counter + action.num })
  const subtract = () => ({ counter: state.counter - action.num })
  const increment = () => ({ counter: state.counter + 1 })
  const decrement = () => ({ counter: state.counter - 1 })

  const options = {
    ADD: add,
    SUBTRACT: subtract,
    INCREMENT: increment,
    DECREMENT: decrement,
    default: () => state
  }

  return (options[action.type] || options.default)()
}

export default counter;