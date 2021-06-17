import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

export default class Search extends Component {
constructor(props){
    super(props)
    this.state = {

    }
}

render() {
    return (
        <div className="Container">
            <h1 className="text-center">Search The Vehicle  </h1>
           
                <div className="container py-3">
                    <div className="row">
                        <div className="col-3">
                        {/* <div className="input-group mb-3">
                            <input type="text" list="data1" placeholder="From City" />
                            <datalist id="data1">
                                {
                                    this.props.cities.map(result => {
                                        return (
                                            <option>{result.from}</option>
                                        )
                                    })
                                }
                            </datalist>
                        </div> */}
                        <Select
                            value={this.props.selectedFromCity}
                            onChange={(e)=> this.props.handleChange(e, "fromCity")}
                            options={this.props.cities}
                            name="fromCity"
                        />
                        </div>
                        <div className="col-3">
                            {/* <div className="input-group mb-3">
                                <input type="text" list="data2" placeholder="To City" />
                                <datalist id="data2">
                                    {
                                        this.props.cities.map(res => {
                                            return (
                                                <option>{res.from}</option>
                                            )
                                        })
                                    }
                                </datalist>
                            </div> */}
                            <Select
                            value={this.props.selectedToCity}
                            onChange={(e)=> this.props.handleChange(e, "toCity")}
                            options={this.props.cities}
                            name="toCity"
                        />
                        </div>
                        <div className="col-3 ">
                            <div className="input-group mb-3 w-100">
                                {/* <DatePicker selected={selectedDate} placeholderText="mm/dd/yyyy" onChange={date => setSelectedDate(date)} minDate={new Date()} isClearable="true" /> */}
                            </div>
                        </div>
                        <div className="col-3">
                            {/* <div className="input-group mb-3">
                                <input type="text" list="data3" placeholder="Select Type" />
                                <datalist id="data3">
                                    {
                                        this.props.vehicleType.map(result => {
                                            return (
                                                <option>{result.type}</option>
                                            )
                                        })
                                    }
                                </datalist>
                            </div>
                        </div> */}
                        <Select 
                            value={this.props.selectedVehicleType}
                            onChange={(e)=> this.props.handleChange(e, "type")}
                            options={this.props.vehicleType}
                            name="type"
                            />
                    </div>
                    <div className="text-center mt-5">
                        <button className="btn btn-primary" type="button" onClick={(e) => this.props.searchVehicle(e)}>Search</button>
                    </div>
                </div>
                </div>
                </div>
         
        
    )
}
}
