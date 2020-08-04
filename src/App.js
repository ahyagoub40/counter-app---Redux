import React from 'react';
import './App.css';
import CounterControl from './components/counterControl'
import CounterOutput from './components/counterOutput'

function App() {
  return (
    <div>
      <div>
        < CounterOutput />
      </div>
      <div>
        <CounterControl />
      </div>
    </div>
  );
}

export default App;
