import React, { Component } from 'react';
import './App.css';
import FraudList from './components/FraudList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FraudList />
      </div>
    );
  }
}

export default App;
