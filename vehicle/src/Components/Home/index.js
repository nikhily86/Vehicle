import React from "react";
import Search from './search';
import VehicleList from './vehicleList';
import Nav from "../Nav";
import 'react-datepicker/dist/react-datepicker.css';
import VehicleDetail from './vehicleDetail'
import Agreement from "./agreement";
import Receipt from "./receipt";




class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cities: [],
			vehicleList: [],
			vehicleData: [],
			vehicleType: [],
			selectedFromCity: { value: "Select City", label: "Select City" },
			selectedToCity: { value: "Select City", label: "Select City" },
			selectedVehicleType: { value: "Select Vehicle", label: "Select Vehicle" },
			selectedDate: null,
			vehicleDetail: null,
			showLayout: null,
			searchQuery: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.searchVehicle = this.searchVehicle.bind(this);
		this.viewMoreHandle = this.viewMoreHandle.bind(this);
		this.back = this.back.bind(this);
		this.agreementView = this.agreementView.bind(this);
		this.receiptView = this.receiptView.bind(this);
		this.selectedDate = this.selectedDate.bind(this);
	}

	selectedDate(date) {
		debugger
		this.setState({
			selectedDate: date
		})
	}

	receiptView(vehicleDetail) {

		this.setState({
			vehicleDetail,
			showLayout: "Receipt"
		})
	}

	agreementView(vehicleDetail) {
		this.setState({
			vehicleDetail,
			showLayout: "Agreement",
		});
	}

	back() {
		this.setState({
			vehicleDetail: null,
			showLayout: null
		})
	}

	viewMoreHandle(vehicle) {
		this.setState({
			vehicleDetail: vehicle,
			showLayout: "Detail"
		});
		this.props.history.push({
			pathname: '/vehicleDetail',
			state: { vehicle: vehicle }
		});
	}

	handleChange(e, name) {
		debugger
		let searchQuery = {}
		if (this.state.searchQuery) {
			searchQuery = this.state.searchQuery
		}
		
		if (e.value === "Select City" || e.value === "Select Vehicle" || e.value === null) {
			this.setState({
				vehicleList: this.state.vehicleData,
			});
		}
		if (name === "fromCity") {
			if (e.value === "Select City") {
				delete searchQuery.from
			} else {
				searchQuery["from"] = e.value
			}
			this.setState({ selectedFromCity: e });
		}
		debugger
		if (name === "date") {
			searchQuery["date"] = e.getTime();
			this.setState({ selectedDate: e });
			debugger
		}
		if (name === "toCity") {
			if (this.state.selectedFromCity && this.state.selectedFromCity.value) {
				if (this.state.selectedFromCity.value !== e.value) {
					if (e.value === "Select City") {
						delete searchQuery.to
					} else {
						searchQuery["to"] = e.value
					}
					this.setState({ selectedToCity: e });
				}
			} else {
				if (e.value === "Select City") {
					delete searchQuery.to
				} else {
					searchQuery["to"] = e.value
				}
				this.setState({ selectedToCity: e });
			}

		}
		if (name === "type") {
			if (e.value === "Select Vehicle") {
				delete searchQuery.type
			} else {
				searchQuery["type"] = e.value
			}
			this.setState({ selectedVehicleType: e });
		}
		this.setState({ searchQuery });
	}

	searchVehicle() {

		let searchQuery = this.state.searchQuery;
		let vehicleList = this.state.vehicleData.filter((vehicle) => {
			let find_results = Object.keys(searchQuery).map((key) => {
				if(key == "date"){
					let day = vehicle.date.split("/")[0]
					let month = vehicle.date.split("/")[1]
					let year = vehicle.date.split("/")[2]
					let vehicleDate =  new Date(month+"/"+day+"/"+year).getTime();
					return vehicleDate == searchQuery[key]
				}else{
					return vehicle[key] === searchQuery[key]
				}
			})
			if (!find_results.includes(false)) {
				return vehicle
			}
		})
		this.setState({ vehicleList });

	}

	componentDidMount() {

		fetch("http://localhost:3000/fromcity", {
			method: 'GET'
		}).then(resp => resp.json()).then((resp) => {
			let cityList = resp.map((city) => {
				return { value: city.from, label: city.from }
			})

			cityList.unshift({ value: "Select City", label: "Select City" })
			this.setState({
				cities: cityList
			})
		})

		fetch("http://localhost:3000/vehicle", {
			method: 'GET'
		}).then(resp => resp.json()).then(resp => this.setState({ vehicleList: resp, vehicleData: resp }))

		fetch("http://localhost:3000/type", {
			method: 'GET'
		}).then(resp => resp.json()).then((resp) => {
			let vehicleType = resp.map((vtype) => {
				return { value: vtype.type, label: vtype.type }
			})

			vehicleType.unshift({ value: "Select Vehicle", label: "Select Vehicle" })
			this.setState({
				vehicleType: vehicleType
			})
		})

	}

	render() {
		return (
			<>
				<Nav name={"Vehicle"} namelink={"login"} link={'/Book'} pre={'/'} />
				{
					this.state.showLayout === null &&
					<>
						<Search
							cities={this.state.cities}
							vehicleType={this.state.vehicleType}
							selectedFromCity={this.state.selectedFromCity}
							selectedDate={this.state.selectedDate}
							selectedToCity={this.state.selectedToCity}
							selectedVehicleType={this.state.selectedVehicleType}
							handleChange={this.handleChange}
							searchVehicle={this.searchVehicle}
						/>
						<VehicleList vehicleList={this.state.vehicleList} viewMoreHandle={this.viewMoreHandle} />
					</>
				}
				{
					this.state.showLayout === "Detail" &&
					<VehicleDetail vehicleDetail={this.state.vehicleDetail} back={this.back} agreementView={this.agreementView} />
				}
				{
					this.state.showLayout === "Agreement" &&
					<Agreement vehicleDetail={this.state.vehicleDetail} back={this.back} receiptView={this.receiptView} />
				}
				{
					this.state.showLayout === "Receipt" &&
					<Receipt vehicleDetail={this.state.vehicleDetail} back={this.back} />
				}


			</>
		);
	}
}

export default Home;
