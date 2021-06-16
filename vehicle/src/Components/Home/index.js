import React from "react";
import Search from './search' ;
import VehicleList from './vehicleList';
import Nav from "../Nav";
import axios from "axios";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';


class Home extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		cities: [],
		vehicleList: [],
		vehicleData: [],
		vehicleType: [],
		selectedFromCity: {value: "Select City", label: "Select City"},
		selectedToCity: null,
		selectedVehicleType: null
	};

	// this.setCitiesList = this.setCitiesList.bind(this);
	// this.setVehicleList = this.setVehicleList.bind(this);
	// this.setVehicleType = this.setVehicleType.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.searchVehicle = this.searchVehicle.bind(this);
}


handleChange(e, name){
	if(e.value == "Select City"){
		this.setState({vehicleList: this.state.vehicleData});
	}
	if(name == "fromCity"){
		this.setState({selectedFromCity: e});
	}
	if(name == "toCity"){
		this.setState({selectedToCity: e});
	}
}

searchVehicle(){
	debugger
	let selectedFromCity =  this.state.selectedFromCity && this.state.selectedFromCity.value
	if(selectedFromCity && selectedFromCity != "Select City" ){
		let vehicleList = this.state.vehicleData.filter((vehicle)=> {
			if(vehicle.from == selectedFromCity){
				return vehicle
			}
		})
		this.setState({vehicleList});
	}
	
}

componentDidMount(){
	
	fetch("http://localhost:3000/fromcity", {
		method: 'GET'
	}).then(resp => resp.json()).then((resp)=>{
		let cityList = resp.map((city)=>{
			return { value: city.from, label: city.from } 
		})

		cityList.unshift({value: "Select City", label: "Select City"})
		this.setState({
			cities: cityList
		})
	})

	fetch("http://localhost:3000/vehicle",{
		method: 'GET'
	}).then(resp => resp.json()).then(resp =>  this.setState({vehicleList: resp, vehicleData: resp}))

	fetch("http://localhost:3000/type", {
		method: 'GET'
	}).then(resp => resp.json()).then(resp => this.setState({vehicleType: resp}))

}

render() {
	return (
		<>
			<Nav name={"Vehicle"} namelink={"login"} link={'/Book'} pre={'/'} />
			<Search
				cities = {this.state.cities}
				vehicleType={this.state.vehicleType}
				selectedFromCity = {this.state.selectedFromCity}
				selectedToCity = {this.state.selectedToCity}
				selectedVehicleType = {this.state.selectedVehicleType}
				handleChange = {this.handleChange}
				searchVehicle = {this.searchVehicle}
			/>
			<VehicleList vehicleList={this.state.vehicleList}/>
		
		</>
	);
}
}

export default Home;
