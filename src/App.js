// @ts-check 
import React from 'react'
import logo from './logo.svg';
import button from './scripts/button'
import Button from './components/button'
import './App.css';

function App() {

  const handleClick = () => {
    button({
      a: 'one',
      b: 'two',
      c: 2
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={handleClick}>Click</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
