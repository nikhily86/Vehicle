import React from 'react';
import { useState, useEffect } from "react";
 import { Link } from 'react-router-dom';

export const Signup = ({ props }) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    let initUser;
    if (localStorage.getItem("user") === null) {
        initUser = [];
    }
    else {
        initUser = JSON.parse(localStorage.getItem("user"));
    }

    const addUser = (fullname, email, password, address, phone ) => {

        console.log("Adding User ", fullname, email, password, address, phone);
        const newUser = {
            fullname: fullname,
            email: email,
            password: password,
            address: address,
            phone: phone
        }
        setUser([...user, newUser]);
        console.log(newUser);
        initUser.push(newUser);
        console.log(initUser);
    }


    const formSubmit = (e) => {
        e.preventDefault();
        if (!fullname || !email || !password || !address || !phone) {
            alert("Fields Can't be empty");
        }
        else {
            addUser(fullname, email, password, address, phone);

            setFullname("");
            setEmail("");
            setPassword("");
            setAddress("");
            setPhone("");
           

        }

    };

    const [user, setUser] = useState(initUser);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user])


    return (
        <div>

            <div className="my-5">
                <h1 className="text-center">Register Now</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form className="card p-3" onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={fullname} onChange={(e) => { setFullname(e.target.value) }} placeholder="Name" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                                <input type="text" className="form-control" id="exampleFormControlInput11" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" />
                                <label htmlFor="ss" className="form-label">Select State</label>
                                <select className="form-select" defaultValue={'DEFAULT'} id="ss">
                                    <option value="DEFAULT">Select State</option>
                                    <option value="india">Rajasthan</option>
                                    <option value="usa">Madhya Pradesh</option>
                                    <option value="japan">Gujrat</option>
                                </select>
                                <label htmlFor="sc"  className="form-label">Select City</label>
                                <select className="form-select" defaultValue={'DEFAULT'} id="sc">
                                    <option value="DEFAULT">Select City</option>
                                    <option value="india">Jaipur</option>
                                    <option value="usa">Indore</option>
                                    <option value="japan">Ahemdabad</option>
                                </select>
                                <label htmlFor="mobile" className="form-label">Contact No</label>
                                <input type="number" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Contact No." />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email@example.com" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput3" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Re-Enter Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput33" name="password1" value={password1} onChange={(e) => { setPassword1(e.target.value) }} placeholder="ReEnter Password" />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary w-100">Register Me</button>
                                <Link to="/login" className="ml-3">Login</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signup;
