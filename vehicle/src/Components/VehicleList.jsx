import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Book from "./Book"
import {connect} from 'react-redux';
import {share} from "../Actions"

const VehicleList = (props) => {

    // function shareId(id)
    // {
    //     // props.dispatch(share(id));
    //    // console.log(id);
    //     // let input = item.id;
    //     // let input2 = item.title;
    //     // props.dispatch(vehicle(input ,input2));
    //     // console.log(input);
    // }




    return (
        <>
            {
                props.vehicleData.map(item => {
                    return (
                        <div className="card bg-light my-2 p-3">
                            <h3>Title: <span>{item.title}</span></h3>
                            <h4>From: <span>{item.from}</span></h4>
                            <h4>To: <span>{item.to}</span></h4>
                            <h4>Date: <span>{item.date}</span></h4>
                            <span className="ml-auto">{<Link className="btn btn-primary"  onClick={(e)=>{
                                   
                                    let id = item.regno;
                                    let input2 = item.title;
                                    props.dispatch(share(id ,input2));
                                    // alert(id)
                               
                                }} to="/Book">View More</Link>}</span>
                        </div>
                        
                    )
                })

                
            }

        </>
    )
}


const mapStateToProps = (state) => ({
    id: state.shareId.data,
})



export default connect(mapStateToProps)(VehicleList);










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
