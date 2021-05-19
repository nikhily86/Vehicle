import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Nav from "../Components/Nav";


const Agreement = () => {

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
            <h1 className="text-center">Condition Agree</h1>

                {
                    book.map(result => {
                        if(result.id===1){
                        return (
                            <>
                                <div>
                                    <h6>Title: <span>{result.title}</span></h6><hr />
                                    <h6>Name of Agency: <span>{result.noa}</span></h6><hr />
                                    <h6>Registration No.: <span>{result.regno}</span></h6><hr />
                                    <h6>Email ID: <span>{result.email}</span></h6><hr />
                                    <h6>Branch: <span>{result.branch}</span></h6><hr />
                                    <h6>Address: <span>{result.address}</span></h6><hr />
                                    <h6>Year of Establishment: <span>{result.yoe}</span></h6><hr />
                                    <h6>Contact: <span>{result.contact}</span></h6><hr />
                                    <h6>Owner Email: <span>{result.oemail}</span></h6><hr />
                                    <h6>Owner: <span>{result.owner}</span></h6><hr />
                                    <h6>From City: <span>{result.from}</span></h6><hr />
                                    <h6>To City: <span>{result.to}</span></h6><hr />
                                    <h6>Date: <span>{result.date}</span></h6><hr />
                                </div>
                            </>
                        )
                        }

                    })
                }
                <h6 >Condition of Payment:</h6><li >If you want to book this you have to pay half payment</li> <li className="mb-3">If you Agree Press Book Button Otherwise Cancel</li>
                <Link className="btn btn-success mx-3"  to="/Receipt">Yes i am Agree</Link>
                <Link className="btn btn-danger"  to="/">Cancel</Link>
               

            </div>


        </div>
    )
}

export default Agreement
