import React, { Component } from 'react';


export default class VehicleList extends Component {
    render() {
        return (
            <div className="container my-4">
                {
                    (this.props.vehicleList && this.props.vehicleList.length > 0) ?
                        <div>
                            {
                                this.props.vehicleList.map((item, index) => {
                                    return (
                                        <div className="card bg-light my-2 p-3 shadow" key={index}>
                                            <h3>Title: <span>{item.title}</span></h3>
                                            <h4>From: <span>{item.from}</span></h4>
                                            <h4>To: <span>{item.to}</span></h4>
                                            <h4>Date: <span>{item.date}</span></h4>
                                            <button className="ml-auto btn btn-primary" type="button" onClick={(e) => this.props.viewMoreHandle(item, e)}>View More</button>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        :
                        <div>
                            <center><h3>Vehicles Not Found..!</h3></center>
                        </div>
                }

            </div>
        )
    }
}
