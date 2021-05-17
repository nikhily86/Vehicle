import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Book = () => {

    

    const [book, bdata] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/vehicle",
            {
                method: 'GET'
            }).then(resp => resp.json()).then(resp => bdata(resp))
    })

    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
        loggedIn = false;
    }
    else {
        loggedIn = true;
    }


    if (loggedIn === false) {
        return <Redirect to="/login" />
    }

    return (
        <div>


            <div className="container">
            <Link to="/logout" className="logout">Logout</Link>
                <h1 className="text-center">Book Now</h1>


                {
                    book.map(result => {
                        return (
                            <>

                                <div className="card bg-light my-5 p-3 ">
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>Title: <span>{result.title}</span></h6><hr />
                                            <h6>Registration No.: <span>{result.regno}</span></h6><hr />
                                            <h6>Branch: <span>{result.branch}</span></h6><hr />
                                            <h6>Year of Establishment: <span>{result.yoe}</span></h6><hr />
                                            <h6>Owner: <span>{result.owner}</span></h6><hr />
                                            <h6>From City: <span>{result.from}</span></h6><hr />
                                            <h6>Date: <span>{result.date}</span></h6><hr />
                                        </div>
                                        <div className="col-6">
                                            <div className="bg-light ">
                                                <h6>Name of Agency: <span>{result.noa}</span></h6><hr />
                                                <h6>Email ID: <span>{result.email}</span></h6><hr />
                                                <h6>Address: <span>{result.address}</span></h6><hr />
                                                <h6>Contact: <span>{result.contact}</span></h6><hr />
                                                <h6>Owner Email: <span>{result.oemail}</span></h6><hr />
                                                <h6>To City: <span>{result.to}</span></h6><hr />
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <Link className="btn btn-danger" id={result.id} to="/Agreement">Book</Link>
                                                {/* <button className="btn btn-danger">Book</button> */}
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </>
                        )

                    })
                }



            </div>





        </div>
    )
}

export default Book
