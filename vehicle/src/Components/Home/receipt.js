import React from 'react'

const Receipt = (props) => {
    let vehicleDetail = (props.location.state && props.location.state.receiptData) ? props.location.state.receiptData : {}
    return (
        <div>
            <div className="container">
                <h1 className="text-center my-5">Receipt</h1>
                <div className="card p-5 bg-light shadow-lg ">

                    <h6 className="font-weight-bold">Title: <span className="font-weight-normal">{vehicleDetail.title}</span></h6><hr />
                    <h6 className="font-weight-bold">Name of Agency: <span className="font-weight-normal">{vehicleDetail.noa}</span></h6><hr />
                    <h6 className="font-weight-bold">Email ID: <span className="font-weight-normal">{vehicleDetail.email}</span></h6><hr />
                    <h6 className="font-weight-bold">Address: <span className="font-weight-normal">{vehicleDetail.address}</span></h6><hr />
                    <h6 className="font-weight-bold">Contact: <span className="font-weight-normal">{vehicleDetail.contact}</span></h6><hr />
                    <h6 className="font-weight-bold">From City: <span className="font-weight-normal">{vehicleDetail.from}</span></h6><hr />
                    <h6 className="font-weight-bold">To City: <span className="font-weight-normal">{vehicleDetail.to}</span></h6><hr />
                    <h6 className="font-weight-bold">Date: <span className="font-weight-normal">{vehicleDetail.date}</span></h6><hr />
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex justify-content-start me-3">
                                <button className="btn btn-danger" type="button"
                                    onClick={(e) => {
                                        props.history.push({
                                            pathname: '/Agreement',
                                            state: { agreementData: vehicleDetail }
                                        });
                                    }}>Go Back</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-success" onClick={(e) => props.history.push('/')}>Go Home</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Receipt



