import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Book from "./Book"

const VehicleList = () => {

    const [vehicle, vdata] = useState([]);
    const [book, bdata] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/vehicle",
            {
                method: 'GET'
            }).then(resp => resp.json()).then(resp => vdata(resp))
    })

    function shareId(id)
    {
        fetch("http://localhost:3000/vehicle/"+id,{
            method:'GET'
        }).then(resp => resp.json()).then(resp => bdata(resp))
    }


    return (
        <>
            {
                vehicle.map(item => {
                    return (
                        <div className="card bg-light my-2 p-3">
                            <h3>Title: <span>{item.title}</span></h3>
                            <h4>From: <span>{item.from}</span></h4>
                            <h4>To: <span>{item.to}</span></h4>
                            <h4>Date: <span>{item.date}</span></h4>
                            <span className="ml-auto">{<Link className="btn btn-primary" onClick={()=>{shareId(item.id)}} to="/Book">View More</Link>}</span>
                        </div>
                        
                    )
                })

                
            }

        </>
    )
}

export default VehicleList










// import React, { Component } from 'react';
// import '../App.css';
// import { Link} from 'react-router-dom';

// export default class VehicleList extends Component {
//     constructor()
//     {

//         super();
//         this.state={
//             list:null,

//         }
//     }
//     componentDidMount(){
//         fetch("http://localhost:3000/vehicle").then((response) => {
//             response.json().then((result)=>{
//                 this.setState({list: result})
//             })
//         })
//     }
//     render() {

//         return (
//             <div>
//                 {
//                     this.state.list?
//                     <div>
//                         {
//                             this.state.list.map((item,i) => 
//                                <div className="card bg-light my-2 p-3">
//                                     <h3>Title: <span>{item.title}</span></h3>
//                                     <h4>From: <span>{item.from}</span></h4>
//                                     <h4>To: <span>{item.to}</span></h4>
//                                     <h4>Date: <span>{item.date}</span></h4>

//                                     <span className="ml-auto">{<Link className="btn btn-primary" to="/Book">View More</Link>}</span>
//                                 </div>
//                             )
//                         }
//                     </div>
//                     :<p>Please Wait...</p>
//                 }
//             </div>
//         );
//     }
// }

// export default vehicleList;
