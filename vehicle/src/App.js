import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/signup";
import login from "./Pages/login";
import VehicleList from "./Components/VehicleList";
import Book from "./Components/Book";
// import Agreement from "./Components/Agreement";
import Receipt from "./Components/Receipt";
import Logout from "./Pages/Logout";
import Agreement from './Components/Home/agreement';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/login" component={login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/vehicleList" component={VehicleList} />
          <Route exact path="/Book" component={Book} />
          <Route exact path="/Agreement" component={Agreement} />
          <Route exact path="/Receipt" component={Receipt} />
         
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
