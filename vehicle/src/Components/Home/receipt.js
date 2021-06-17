import React from 'react'

const Receipt = (props) => {
    let vehicleDetail = (props.location.state && props.location.state.receiptData) ? props.location.state.receiptData : {}
    return (
        <div>
            <div className="container">
                <div className="p-5">
                    <h1 className="text-center">Receipt</h1>
                    <h6>Title: <span>{vehicleDetail.title}</span></h6><hr />
                    <h6>Name of Agency: <span>{vehicleDetail.noa}</span></h6><hr />

                    <h6>Email ID: <span>{vehicleDetail.email}</span></h6><hr />

                    <h6>Address: <span>{vehicleDetail.address}</span></h6><hr />

                    <h6>Contact: <span>{vehicleDetail.contact}</span></h6><hr />

                    <h6>From City: <span>{vehicleDetail.from}</span></h6><hr />
                    <h6>To City: <span>{vehicleDetail.to}</span></h6><hr />
                    <h6>Date: <span>{vehicleDetail.date}</span></h6><hr />
                </div>
                <div className="d-flex justify-content-start me-3">
                    <button className="btn btn-danger" type="button"  onClick={(e)=> props.history.push('/')}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default Receipt
