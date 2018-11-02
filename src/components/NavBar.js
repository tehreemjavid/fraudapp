import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div className="row navbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button className="btn btn-default">
            <i className="fa fa-square-o"></i>
          </button>

          <button className="btn btn-default" disabled="disabled">
            Mark As Read
          </button>

          <button className="btn btn-default" disabled="disabled">
            Mark As Unread
          </button>

          <select className="form-control label-select" disabled="disabled">
            <option>Apply label</option>
            <option value="">Rating</option>
          </select>

          

          <button className="btn btn-default" disabled="disabled">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default NavBar