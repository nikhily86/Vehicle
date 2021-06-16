import React, { Component } from 'react';
import {share} from "../../Actions";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


export default class VehicleList extends Component {
    render() {
        return (
            <div className="container my-4">
			{
                this.props.vehicleList.map(item => {
                    return (
                        <div className="card bg-light my-2 p-3">
                            <h3>Title: <span>{item.title}</span></h3>
                            <h4>From: <span>{item.from}</span></h4>
                            <h4>To: <span>{item.to}</span></h4>
                            <h4>Date: <span>{item.date}</span></h4>
                            <span className="ml-auto">{<Link className="btn btn-primary"  onClick={(e)=>{
                                   
                                    let id = item.regno;
                                    let input2 = item.title;
                                    // this.props.dispatch(share(id ,input2));
                               
                                }} to="/Book">View More</Link>}</span>
                        </div>
                        
                    )
                })
            }
			</div>
        )
    }
}
