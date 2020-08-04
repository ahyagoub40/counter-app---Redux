const initialState = {
  counter: 0
}
const counter = function (state = initialState, action) {
  const add = (num) => ({ counter: state.counter + num })
  const subtract = (num) => ({ counter: state.counter - num })
  const increment = () => ({ counter: state.counter++ })
  const decrement = () => ({ counter: state.counter-- })

  const options = {
    ADD: add,
    SUBTRACT: subtract,
    INCREMENT: increment,
    DECREMENT: decrement,
    default: () => state
  }
  return (options[action.type] || options.default)()
}

export default counter