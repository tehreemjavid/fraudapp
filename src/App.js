import React, { Component } from 'react';
import './App.css';
import FraudList from './components/FraudList';
import NavBar from './components/NavBar';
import axios from 'axios'

class App extends Component {
  state = {
    // dummy data
    data: [
      {
        "object_id": 23,
        "name": "Developers Meeting",
        "fraud_label": 'low',
        "fraud_probability": 0.2345
      },
      {
        "object_id": 124,
        "name": "Happy Party",
        "fraud_label": 'medium',
        "fraud_probability": 0.657
      },
      {
        "object_id": 243,
        "name": "College Drink Party",
        "fraud_label": 'high',
        "fraud_probability": 0.835
      },
      {
        "object_id": 654,
        "name": "Wine Tasting",
        "fraud_label": 'low',
        "fraud_probability": 0.355
      }
    ]
  }
  getData = () => {
    axios.get()
    .then(events => {this.setState({events})} );

  }


  render() {
    return (
      <div className="App">

      <NavBar />
      <FraudList 
        data = { this.state.data }
      />
      </div>
    );
  }
}

export default App;
