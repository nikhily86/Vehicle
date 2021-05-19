import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Nav from "../Components/Nav";

const Receipt = () => {

    const [book, bdata] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/vehicle",
            {
                method: 'GET'
            }).then(resp => resp.json()).then(resp => bdata(resp))
    })

    return (
        <div>

<Nav name={"Vehicle"}  namelink={"logout"} link={'/logout'} pre={'/'}/>

            <div className="container">
            <div className="d-flex justify-content-end my-3">
                <Link to="/logout" className="logout btn btn-info ">Logout</Link>
                </div>
                <div className="card bg-light">
                    <h1 className="text-center mt-5">Your Booking Receipt</h1>
                {
                    book.map(result => {
                        if(result.id===1){
                        return (
                            <>
                                <div className="p-5">
                                    <h6>Title: <span>{result.title}</span></h6><hr />
                                    <h6>Name of Agency: <span>{result.noa}</span></h6><hr />
                                    
                                    <h6>Email ID: <span>{result.email}</span></h6><hr />
                                   
                                    <h6>Address: <span>{result.address}</span></h6><hr />
                                    
                                    <h6>Contact: <span>{result.contact}</span></h6><hr />
                                   
                                    <h6>From City: <span>{result.from}</span></h6><hr />
                                    <h6>To City: <span>{result.to}</span></h6><hr />
                                    <h6>Date: <span>{result.date}</span></h6><hr />
                                </div>
                            </>
                        )
                        }

                    })
                }

                </div>
            </div>            



        </div>
    )
}

export default Receipt
