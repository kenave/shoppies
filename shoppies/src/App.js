import React from 'react';
import './App.css';
require('dotenv').config();

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
