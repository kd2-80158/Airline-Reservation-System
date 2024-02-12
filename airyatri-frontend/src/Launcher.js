import Home from "./Home";
import About from "./About";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from 'react-router-dom';
import NotFound from "./NotFound";
import SignIn from "./signin";
import Otp from "./Otp";
import Feedback from "./Feedback";
function Launcher() {
    return (
        <div className="container">
            <hr />
            <Link to="/home">Home</Link>{" | "}
            <Link to="/signin">Login</Link>{" | "}
            <Link to="/about">About</Link>{" | "}
            <Link to="/feedback">Feedback</Link>{" | "}
            <Link to="/Otp">OTP</Link>
            <hr />
            <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/otp" component={Otp}></Route>
                <Route exact path="/feedback" component={Feedback}></Route>
                <Route path="**" component={NotFound}></Route>
            </Switch>
        </div>
    );
}

export default Launcher;