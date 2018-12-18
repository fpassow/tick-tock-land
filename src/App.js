import React, { Component } from 'react';
import CountersContainer from './CountersContainer'
import AddCounterContainer from './AddCounterContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Tick Tock Land</h1>
          <CountersContainer />
          <br /><br />
          <AddCounterContainer />
      </div>
    );
  }
}

export default App;
