import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import SignIn from "./signin";
import Feedback from "./Feedback";
import BookAFlight from "./BookAFlight";
import SignUp from './SignUp';
import BookAPackage from './BookAPackage';
import WhereWeFly from './WhereWeFly';
import TravelGuide from './TravelGuide';
import Admin from './Admin';
import Otp from './Otp';
import ForgotPassword from './ForgotPassword'
// import SignInPage from './SignInPage';
import './newstyle.css'; // Import custom CSS file for styling
import FindAllFlights from './Admin/FindAllFlights';
import AddNewSeat from './Admin/AddNewSeat';
import ResetPassword from './ResetPassword';
import FlightBooking from './FlightBooking';

function Launcher1() {
    
    return (
        <div className="container">
            <div className="header">
                <Link to="/home" className="logo-link">
                    <img src="airyatri-logo.jpeg" alt="Airyatri Logo" className="logo" />
                </Link>
                <nav className="nav-links">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/signin" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/feedback" className="nav-link">Feedback</Link>
                    <Link to="/BookAFlight" className="nav-link">Book A Flight</Link>
                    <Link to="/bookapackage" className="nav-link">Book a Package</Link>
                    <Link to="/wherewefly" className="nav-link">Where We Fly</Link>
                    <Link to="/travelguide" className="nav-link">Travel Guide</Link>
                    <Link to="/admin" className="nav-link">Admin</Link>
                </nav>
            </div>
            <hr />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/feedback" component={Feedback}></Route>
                <Route exact path="/BookAFlight" component={BookAFlight}></Route>
                <Route exact path='/signup' component={SignUp} />
                <Route exact path="/FlightBooking/:flightId" component={FlightBooking} />
                <Route exact path='/bookapackage' component={BookAPackage} />
                <Route exact path='/wherewefly' component={WhereWeFly} />
                <Route exact path='/travelguide' component={TravelGuide} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/Otp' component={Otp} />
                <Route exact path='/ForgotPassword' component={ForgotPassword} />
                <Route exact path='/Admin/FindAllFlights' component={FindAllFlights} />
                <Route exact path='/Admin/AddNewSeat' component={AddNewSeat} />
                <Route exact path='/ResetPassword' component={ResetPassword} />
                <Route exact path='/addflight' component={AddFlight} />
                {/* <Route exact path='/SignInPage' component={SignInPage} /> */}
                <Route path="**" component={NotFound}></Route>
            </Switch>
            <br />
            <footer className='footer'>
        <p> 2024 @Airyatri. All rights reserved.</p>
      </footer>
        </div>
    );
}

export default Launcher1;
