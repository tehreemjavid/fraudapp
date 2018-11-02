import React, { Component } from 'react'
import FraudItem from './FraudItem'

class FraudList extends Component {
  render() {
    let fraudList = this.props.data.map( ( { object_id, name, fraud_label, fraud_probability } ) => {
      return (
        <FraudItem 
          object_id = { object_id }
          name = { name }
          fraud_label = { fraud_label }
          fraud_probability = { fraud_probability }
        />
      )
    })
    return (
      <div>
        { fraudList }
      </div>
    )
  }
}

export default FraudList