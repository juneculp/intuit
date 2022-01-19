import './App.css';
import { useState } from 'react';
// import Increment from './Increment.js'

function App() {
  const [status, setStatus] = useState('');
  const [count, setCount] = useState(+localStorage.getItem('count'));
  const [color, setColor] = useState('black');
  
  
  function incrementCounter () {
    localStorage.setItem('count', count);
    if (count === 10) return count;
    let newCount = count + 1;
    if (newCount === 10) {
      setStatus('Reached max');
      setColor('red');
    }
    return newCount;
  }

  return (
    <div className="App">
      <div>
        <span style={{ color }}>Message: {status}</span>
      </div>
      <span>Counter: {count}</span>
      {/* <Increment count={count} setCount={setCount}/> */}
      <div className="incrementButton">
        <button onClick={() => setCount(incrementCounter())} >Increment</button>
      </div>
    </div>
  );
}

export default App;
