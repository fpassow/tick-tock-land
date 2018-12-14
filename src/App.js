import React, { Component } from 'react';
import CountersContainer from './CountersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Tick Tock Land</h1>
          <CountersContainer />
      </div>
    );
  }
}

export default App;
