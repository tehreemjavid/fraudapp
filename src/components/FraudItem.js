import React from 'react'

const FraudItem = ({ object_id, name, fraud_label, fraud_probability }) => {
    return(
        // Grey-out to indicate the data is read before
        <div className="row message unread">
            <div className="col-xs-2">
                <div className="row">
                        {/* ### selection box ### */}
                    <div className="col-xs-1">
                        <input type="checkbox" />
                    </div>
                        {/* ### filter icon ### */}
                    <div className="col-xs-1">
                        <i className="star fa fa-star-o"></i>
                    </div>
                    <div className="col-xs-2">
                        <span className="label label-warning"> { fraud_label } </span>
                        <div>
                            <small>
                                { fraud_probability * 100 }%
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-7">
                {/* Data of name title shows here! */}
                    { name } <br />
                    <small> #{object_id} </small>
            </div>
        </div>
    )
}




export default FraudItem
