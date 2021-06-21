import React from 'react'


const vehicleDetail = (props) => {

    let vehicleDetail = (props.location.state && props.location.state.vehicle) ? props.location.state.vehicle : {}
    return (
        <div className="container" >
            <h1 className="text-center mt-5">Book Now</h1>

            <div className="card bg-light my-5 p-5 shadow-lg" >
                <div className="row">
                    <div className="col-6">
                        <h6>Title: <span className="font-weight-normal">{vehicleDetail.title}</span></h6><hr />
                        <h6>Registration No.: <span className="font-weight-normal">{vehicleDetail.regno}</span></h6><hr />
                        <h6>Branch: <span className="font-weight-normal">{vehicleDetail.branch}</span></h6><hr />
                        <h6>Year of Establishment: <span className="font-weight-normal">{vehicleDetail.yoe}</span></h6><hr />
                        <h6>Owner: <span className="font-weight-normal">{vehicleDetail.owner}</span></h6><hr />
                        <h6>From City: <span className="font-weight-normal">{vehicleDetail.from}</span></h6><hr />
                        <h6>Date: <span className="font-weight-normal">{vehicleDetail.date}</span></h6><hr />
                    </div>
                    <div className="col-6">
                        <div className="bg-light ">
                            <h6>Name of Agency: <span className="font-weight-normal">{vehicleDetail.noa}</span></h6><hr />
                            <h6>Email ID: <span className="font-weight-normal">{vehicleDetail.email}</span></h6><hr />
                            <h6>Address: <span className="font-weight-normal">{vehicleDetail.address}</span></h6><hr />
                            <h6>Contact: <span className="font-weight-normal">{vehicleDetail.contact}</span></h6><hr />
                            <h6>Owner Email: <span className="font-weight-normal">{vehicleDetail.oemail}</span></h6><hr />
                            <h6>To City: <span className="font-weight-normal">{vehicleDetail.to}</span></h6><hr />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex justify-content-start me-3">
                            <button className="btn btn-danger " type="button" onClick={(e) => props.history.push('/')}>Go Back</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end me-3">
                            <button className="btn btn-info" type="button" onClick={(e) => {
                                props.history.push({
                                    pathname: '/Agreement',
                                    state: { agreementData: vehicleDetail }
                                });
                            }} >Book</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default vehicleDetail
