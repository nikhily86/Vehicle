import React, { Component } from 'react';
import '../App.css';

export default class VehicleList extends Component {
    constructor()
    {
        super();
        this.state={
            list:null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/vehicle").then((response) => {
            response.json().then((result)=>{
                this.setState({list: result})
            })
        })
    }
    render() {
       
        return (
            <div>
                {
                    this.state.list?
                    <div>
                        {
                            this.state.list.map((item,i) => 
                                <div className="card bg-light my-2 p-3">
                                    <h3>Title: <span>{item.title}</span></h3>
                                    <h4>From: <span>{item.from}</span></h4>
                                    <h4>To: <span>{item.to}</span></h4>
                                    <h4>Date: <span>{item.date}</span></h4>
                                   
                                    <span className="ml-auto">{<button className="btn btn-primary">View More</button>}</span>
                                </div>
                            )
                        }
                    </div>
                    :<p>Please Wait...</p>
                }
            </div>
        );
    }
}

// export default vehicleList;
