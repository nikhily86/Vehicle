import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="Container">
                <h1 className="text-center my-3">Search The Vehicle  </h1>

                <div className="container py-3">
                    <div className="row">
                        <div className="col-3">
                            <Select
                                value={this.props.selectedFromCity}
                                onChange={(e) => this.props.handleChange(e, "fromCity")}
                                options={this.props.cities}
                                name="fromCity"
                            />
                        </div>
                        <div className="col-3">
                            <Select
                                value={this.props.selectedToCity}
                                onChange={(e) => this.props.handleChange(e, "toCity")}
                                options={this.props.cities}
                                name="toCity"
                            />
                        </div>
                        <div className="col-3 ">
                            <DatePicker
                                selected={this.props.selectedDate}
                                onChange={(e) => this.props.handleChange(e, "date")} 
                                minDate={new Date()} isClearable="true"
                                name="date"
                            />
                        </div>
                        <div className="col-3">
                            <Select
                                value={this.props.selectedVehicleType}
                                onChange={(e) => this.props.handleChange(e, "type")}
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
