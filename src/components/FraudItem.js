import React, { Component } from 'react'

class FraudItem extends Component {

    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { object_id, name, fraud_label, fraud_probability } = this.props;
        return (
            // Grey-out to indicate the data is read before
            <div className="row message">
                <div className="col-xs-2">
                    <div className="row">
                        {/* ### selection box ### */}
                        <div className="col-xs-1">
                            <input type="checkbox" />
                        </div>
                        {/* ### filter icon ### */}
                        <div className="col-xs-1">
                            <i
                                onClick={this.handleToggle}
                                className={`star fa fa-exclamation${this.state.open ? '' : '-circle'}`}></i>
                        </div>
                        <div className="col-xs-2">
                            <span className="label label-warning"> {fraud_label} </span>
                            <div>
                                <small>
                                    {fraud_probability * 100}%
                            </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-7">
                    {/* Data of name title shows here! */}
                    {name} <br />
                    <small> #{object_id} </small>
                </div>
            </div>
        )
    }
}

export default FraudItem
