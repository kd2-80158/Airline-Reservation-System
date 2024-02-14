import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import SignIn from "./signin";
import Feedback from "./Feedback";
import BookAFlight from "./BookAFlight";
import ManageBookings from './ManageBookings';
import SignUp from './SignUp';
import BookAPackage from './BookAPackage';
import WhereWeFly from './WhereWeFly';
import TravelGuide from './TravelGuide';

function Launcher() {
    return (
        <div className="container">
            <div id="logo">
                <Link to="/home">
                    <img src="airyatri-logo.jpeg" alt="Airyatri Logo" />
                </Link>
            </div>
            <hr />
            <Link to="/home">Home</Link>{" | "}
            <Link to="/signin">Login</Link>{" | "}
            <Link to="/managebookings">Manage Bookings</Link> {" | "}
            <Link to="/signup">Sign Up</Link> {" | "}
            <Link to="/about">About</Link>{" | "}
            <Link to="/feedback">Feedback</Link>{" | "}
            <Link to="/BookAFlight">Book A Flight</Link> {" | "}
            <Link to="/bookapackage">Book a Package</Link> {" | "}
            <Link to="/wherewefly">Where We Fly</Link> {" | "}
            <Link to="/travelguide">Travel Guide</Link> {" | "}
            <hr />
            <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/feedback" component={Feedback}></Route>
                <Route exact path="/BookAFlight" component={BookAFlight}></Route>
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/managebookings' component={ManageBookings} />
                <Route exact path='/bookapackage' component={BookAPackage} />
                <Route exact path='/wherewefly' component={WhereWeFly} />
                <Route exact path='/travelguide' component={TravelGuide} />
                <Route path="**" component={NotFound}></Route>
            </Switch>
            <br />
        </div>
    );
}

export default Launcher;
