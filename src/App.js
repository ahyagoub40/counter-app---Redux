import React from 'react';
import './App.css';
import Counter from './containers/counter'
import reducer from './reducer/counter'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
const App = () => {
  const store = createStore(reducer, composeWithDevTools());

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
