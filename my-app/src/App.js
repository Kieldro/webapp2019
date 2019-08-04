import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Webapp 2019 by Ian and Noah
        </p>
        <a
          className="App-link"
          href="https://github.com/Kieldro/webapp2019"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repository
        </a>
      </header>
    </div>
  );
}

export default App;
