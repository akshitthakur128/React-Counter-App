import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  function decreaser (){
    setNumber(number-1);
  }
  function increaser (){
    setNumber(number+1);
  }
  function resetter(){
    setNumber(0);
  }
  return (
    <div className="App">
      <div>
        <button onClick={decreaser}>
          -
        </button>
        <div>
            {number}
        </div>
        <button onClick={increaser}>
          +
        </button>
      </div>
      <div>
        <button onClick={resetter}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
