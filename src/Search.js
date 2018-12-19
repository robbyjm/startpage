import React, { Component } from 'react';
import './css/Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <header className="App-header">
          <form className="Search-bar" action="https://duckduckgo.com/?q=" method="GET">
            <input type="search" name="q" placeholder=" welcome back" autoFocus></input>
          </form>
        </header>
      </div>
    );
  }
}

export default Search;
