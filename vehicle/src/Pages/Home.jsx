import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
// import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import VehicleList from "../Components/VehicleList";
import Nav from "../Components/Nav";
import axios from "axios";





const Home = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const [fcity, fdata] = useState([]);
    const [tcity, tdata] = useState([]);
    const [vtype, vdata] = useState([]);
    const [fval, setFval] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`http://localhost:3000/vehicle/${fval}`)
        }
    })



    useEffect(() => {
        fetch("http://localhost:3000/fromcity",
            {
                method: 'GET'
            }).then(resp => resp.json()).then(resp => fdata(resp))
    })

    useEffect(() => {
        fetch("http://localhost:3000/tocity",
            {
                method: 'GET'
            }).then(resp => resp.json()).then(resp => tdata(resp))
    })

    useEffect(() => {
        fetch("http://localhost:3000/type",
            {
                method: 'GET'
            }).then(resp => resp.json()).then(resp => vdata(resp))
    })



    const search = (e) => {
        e.preventDefault();
    }

    return (
        
        <div>
           
           
           <Nav name={"Vehicle"}  namelink={"login"} link={'/Book'} pre={'/'}/>
           

            <div className="Container">
           
                <h1 className="text-center">Search The Vehicle {fval} </h1>
                <form>
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-3">
                                <div className="input-group mb-3">
                                    <input type="text" list="data1" placeholder="From City" />
                                    <datalist id="data1">
                                        {
                                            fcity.map(result => {
                                                return (
                                                    <option>{result.from}</option>
                                                )
                                            })
                                        }
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-3"> 
                                <div className="input-group mb-3">
                                    <input type="text" list="data2" placeholder="To City" />
                                    <datalist id="data2">
                                        {
                                            tcity.map(res => {
                                                return (
                                                    <option>{res.to}</option>
                                                )
                                            })
                                        }
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="input-group mb-3 w-100">
                                    <DatePicker selected={selectedDate} placeholderText="mm/dd/yyyy" onChange={date => setSelectedDate(date)} minDate={new Date()} isClearable="true" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group mb-3">
                                    <input type="text" list="data3" placeholder="Select Type" />
                                    <datalist id="data3">
                                        {
                                            vtype.map(result=> {
                                                return (
                                                    <option>{result.type}</option>
                                                )
                                            })
                                        }
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" onClick={search} className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container my-4">
                <VehicleList />
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({
    id: state.shareId.data,
})

export default Home;
