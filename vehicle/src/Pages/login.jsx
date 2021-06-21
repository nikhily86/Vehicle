// import React from 'react';
import React, { useState } from 'react';
import Nav from "../Components/Nav";
import { Link } from 'react-router-dom';
import {
    useHistory
} from 'react-router-dom';


export const Login = () => {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Fields Can't be empty");
        }
        else {
            let initUser = JSON.parse(localStorage.getItem("user"));
            let newUser = []
            if (initUser && Array.isArray(initUser)) {
                newUser = initUser.filter((user) => {
                    if (user.email === email && user.password === password) {

                        localStorage.setItem("token", "Nikhil");
                        history.push('/Book');
                        return user;
                    }
                    else {
                        console.log("Username or password invalid");
                    }
                });

            }

            console.log(newUser);
            console.log(initUser);
        }

    };

    return (
        <div>
            <Nav name={"Vehicle"} namelink={""} link={'/'} pre={'/'} />


            <div className="my-5">
                <h1 className="text-center">Login</h1>
                {/* <Link className="btn btn-primary" to="/">Home</Link> */}
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form className="card p-5 bg-light">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput3" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                            </div>
                            <div className="col-12 d-flex justify-content-center">

                                <button type="submit" className="btn btn-primary w-100" onClick={formSubmit}>Login</button>
                                <Link to="/signup" className="ml-3">Registeration</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login;