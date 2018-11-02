import React, { Component } from 'react';
import './App.css';
import FraudList from './components/FraudList';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <FraudList />
      </div>
    );
  }
}

export default App;
