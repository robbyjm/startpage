import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form className="Search-bar" action="https://duckduckgo.com/?q=" method="GET">
            <input type="search" name="q" placeholder=" welcome back" autoFocus></input>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
