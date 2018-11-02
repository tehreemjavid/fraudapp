import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div className="row navbar">
        <div className="col-md-12">
          

<button className="btn btn-default" disabled="">
            Show all
          </button>

          <button className="btn btn-default" disabled="">
            Low Risk
          </button>

          <button className="btn btn-default" disabled="">
            Medium Risk
          </button>

        <button className="btn btn-default" disabled="">
            High Risk
          </button>

          
          

          
        </div>
      </div>
    )
  }
}

export default NavBar