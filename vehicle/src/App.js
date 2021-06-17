import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Pages/signup";
import login from "./Pages/login";
import Logout from "./Pages/Logout";
import Agreement from './Components/Home/agreement';
import vehicleDetail from "./Components/Home/vehicleDetail";
import Receipt from './Components/Home/receipt';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/login" component={login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/Agreement" component={Agreement} />
          <Route exact path="/vehicleDetail" component={vehicleDetail} />
          <Route exact path="/Agreement" component={Agreement} />
          <Route exact path="/Receipt" component={Receipt} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
