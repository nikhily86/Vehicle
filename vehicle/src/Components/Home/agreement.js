import React from 'react'

const Agreement = (props) => {
    let vehicleDetail = (props.location.state && props.location.state.agreementData) ? props.location.state.agreementData : {}
    return (
        <div>
            <div className="container ">
                <h1 className="text-center my-5">Condition Agree</h1>
                <div className="card shadow-lg p-5">
                    <h6 className="font-weight-bold">Title: <span className="font-weight-normal">{vehicleDetail.title}</span></h6><hr />
                    <h6 className="font-weight-bold">Name of Agency: <span className="font-weight-normal">{vehicleDetail.noa}</span></h6><hr />
                    <h6 className="font-weight-bold">Registration No.: <span className="font-weight-normal">{vehicleDetail.regno}</span></h6><hr />
                    <h6 className="font-weight-bold">Email ID: <span className="font-weight-normal">{vehicleDetail.email}</span></h6><hr />
                    <h6 className="font-weight-bold">Branch: <span className="font-weight-normal">{vehicleDetail.branch}</span></h6><hr />
                    <h6 className="font-weight-bold">Address: <span className="font-weight-normal">{vehicleDetail.address}</span></h6><hr />
                    <h6 className="font-weight-bold">Year of Establishment: <span className="font-weight-normal">{vehicleDetail.yoe}</span></h6><hr />
                    <h6 className="font-weight-bold">Contact: <span className="font-weight-normal">{vehicleDetail.contact}</span></h6><hr />
                    <h6 className="font-weight-bold">Owner Email: <span className="font-weight-normal">{vehicleDetail.oemail}</span></h6><hr />
                    <h6 className="font-weight-bold">Owner: <span className="font-weight-normal">{vehicleDetail.owner}</span></h6><hr />
                    <h6 className="font-weight-bold">From City: <span className="font-weight-normal">{vehicleDetail.from}</span></h6><hr />
                    <h6 className="font-weight-bold">To City: <span className="font-weight-normal">{vehicleDetail.to}</span></h6><hr />
                    <h6 className="font-weight-bold">Date: <span className="font-weight-normal">{vehicleDetail.date}</span></h6><hr />
                    <h6 className="font-weight-bold">Terms And Condition :-</h6>
                    <h6>1.) You Have to pay half amount on booking</h6>
                    <h6>2.) Any Loss Happens is not our guarentee</h6>
                    <h6>3.) We're not responsible for your security</h6>
                    <div className="row mt-3">
                        <div className="col-6">
                            <div className="d-flex justify-content-start me-3">
                                <button className="btn btn-danger" type="button"
                                    onClick={(e) => {
                                        props.history.push({
                                            pathname: '/vehicleDetail',
                                            state: { vehicle: vehicleDetail }
                                        });
                                    }}>Go Back</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end me-3">
                                <button className="btn btn-warning" type="button" onClick={(e) => {
                                    props.history.push({
                                        pathname: '/Receipt',
                                        state: { receiptData: vehicleDetail }
                                    });
                                }} >I Agree</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Agreement
