import React from 'react';
import logo from './logo.svg';
import './App.css';
import GettingStarted from './components/gettingStarted';
import Counter from './components/counter';
import DummyData from './components/dummyData';
function App() {
  const names = [
    'Mostafa',
    'Abdallah',
    'Adham',
    'Salma',
    'Seif'
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Save <code>src/App.js</code> and save to reload.
        </p>
        <DummyData />
        <Counter initialValue={5} />
        {names.map( (name, index) => {
          return (<GettingStarted key={index} name={name} />)
        })}
        
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
