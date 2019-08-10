// import React from 'react';
import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react';

class App extends Component {
  
  state = {
    message: 'hi'
  }


  componentDidMount() {
    fetch('http://127.0.0.1:8080/greeting?name=keo')
    // .then(res => res.text())          // convert to plain text
    // .then(text => console.log(text)) 
      .then(res => res.json())
      .then((data) => {
        this.setState({ message: data.content})
      })
      .catch(console.log)
  }

  // function App() {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Webapp 2019 by Ian and Noah
        </p><p>
            Message: {this.state.message}
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
}
export default App;
