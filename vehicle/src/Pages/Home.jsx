import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import VehicleList from "../Components/VehicleList";

const Home = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const search = () => {
        
    }

    return (
        <div>

            <div className="Container">
                <h1 className="text-center">Search The Vehicle</h1>
                <form onSubmit={search()}>
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-3">
                                <div className="input-group mb-3">
                                    <select className="form-select" defaultValue={'DEFAULT'} id="inputGroupSelect01">
                                        <option value="DEFAULT">From City</option>
                                        <option value="1">Indore</option>
                                        <option value="2">Bhopal</option>
                                        <option value="3">Gwalior</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group mb-3">
                                    <select className="form-select" defaultValue={'DEFAULT'} id="inputGroupSelect01">
                                        <option value="DEFAULT">To City</option>
                                        <option value="1">Indore</option>
                                        <option value="2">Bhopal</option>
                                        <option value="3">Gwalior</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="input-group mb-3 w-100">
                                    <DatePicker selected={selectedDate} placeholderText="mm/dd/yyyy" onChange={date => setSelectedDate(date)} minDate={new Date()} isClearable="true" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group mb-3">
                                    <select className="form-select" defaultValue={'DEFAULT'} id="inputGroupSelect01">
                                        <option value="DEFAULT">Select Type</option>
                                        <option value="1">Car</option>
                                        <option value="2">Jeep</option>
                                        <option value="3">Truck</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="btn btn-primary">Search</button>
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

export default Home;
