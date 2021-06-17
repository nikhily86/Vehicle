import React from 'react'

const vehicleDetail = (props) => {
    let vehicleDetail = props.vehicleDetail
    return (
        <div className = "container" >
         <h1 className="text-center mt-5">Book Now</h1>
         <button className="btn btn-danger" type="button"  onClick={(e)=> props.back(e)}>Go Back</button>
        <div className="card bg-light my-5 p-3 " >
            <div className="row">
                <div className="col-6">
                    <h6>Title: <span>{vehicleDetail.title}</span></h6><hr />
                    <h6>Registration No.: <span>{vehicleDetail.regno}</span></h6><hr />
                    <h6>Branch: <span>{vehicleDetail.branch}</span></h6><hr />
                    <h6>Year of Establishment: <span>{vehicleDetail.yoe}</span></h6><hr />
                    <h6>Owner: <span>{vehicleDetail.owner}</span></h6><hr />
                    <h6>From City: <span>{vehicleDetail.from}</span></h6><hr />
                    <h6>Date: <span>{vehicleDetail.date}</span></h6><hr />
                </div>
                <div className="col-6">
                    <div className="bg-light ">
                        <h6>Name of Agency: <span>{vehicleDetail.noa}</span></h6><hr />
                        <h6>Email ID: <span>{vehicleDetail.email}</span></h6><hr />
                        <h6>Address: <span>{vehicleDetail.address}</span></h6><hr />
                        <h6>Contact: <span>{vehicleDetail.contact}</span></h6><hr />
                        <h6>Owner Email: <span>{vehicleDetail.oemail}</span></h6><hr />
                        <h6>To City: <span>{vehicleDetail.to}</span></h6><hr />
                    </div>
                    <div className="d-flex justify-content-end me-3">
                    <button className="btn btn-info" type="button" onClick={(e) => props.agreementView(vehicleDetail, e)} >Book</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default vehicleDetail
