import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);

  const printNumbers = () => {
    const numArray = [];
    for (let i = 1; i <= 100; i++) {
      numArray.push(i);
    }
    setNumbers(numArray);
  };

  return (
    <div className="App">
      <h1>Numbers from 1 to 100</h1>
      <button onClick={printNumbers}>Print Numbers</button>
      <div>
        {numbers.map((number, index) => (
          <p key={index}>{number}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
