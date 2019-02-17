import React, { Component } from 'react';
import './App.css';
import {players} from './players.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: players
    }
  }

  render() {
    //let raptors = filter here

    return (
      <div className="App">
        <header className="App-header">
          <h1>Fun with React App</h1>
        </header>
        <div className="body">
        {/* Map Here */}
        </div>
      </div>
    );
  }
}

export default App;
