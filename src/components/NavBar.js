import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div className="row navbar">
        <div className="col-md-12">
          

          <button className="btn btn-default">
            <i className="fa fa-square-o"></i>
          </button>

<button className="btn btn-default" disabled="disabled">
            Show all
          </button>

          <button className="btn btn-default" disabled="disabled">
            Low Risk
          </button>

          <button className="btn btn-default" disabled="disabled">
            Medium Risk
          </button>

        <button className="btn btn-default" disabled="disabled">
            High Risk
          </button>

          <select className="form-control label-select" disabled="disabled">
            <option>Apply label</option>
            <option value="">Rating</option>
          </select>

          

          
        </div>
      </div>
    )
  }
}

export default NavBar