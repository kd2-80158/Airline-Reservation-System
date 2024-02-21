import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import SignIn from "./signin";
import Feedback from "./Feedback";
import BookAFlight from "./BookAFlight";
import SignUp from './SignUp';
import WhereWeFly from './WhereWeFly';
import TravelGuide from './TravelGuide';
import Admin from './Admin';
import Otp from './Otp';
import ForgotPassword from './ForgotPassword';
import FindAllFlights from './Admin/FindAllFlights';
import AddNewSeat from './Admin/AddNewSeat';
import AddFlight from './Admin/AddFlight';
import ResetPassword from './ResetPassword';
import FlightBooking from './FlightBooking';
import Address from './Address';
import Payment from './Payment';
import Ticket from './ticket';
import Contact from './ContactUs';
import ModifyFlight from './Admin/ModifyFlight';
import CustomerProfile from './CustomerProfile';
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
                    <Link to="/wherewefly" className="nav-link">Where We Fly</Link>
                    <Link to="/travelguide" className="nav-link">Travel Guide</Link>
                    <Link to="/ContactUs" className="nav-link">ContactUs</Link>
                    <SignoutDropdown />
                </nav>
            </div>
            <hr />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/bookaflight" component={BookAFlight} />
                <Route exact path="/signup" component={SignUp} />
                <Route path="/flightbooking/:flightId" component={FlightBooking} />
                <Route exact path="/wherewefly" component={WhereWeFly} />
                <Route exact path="/travelguide" component={TravelGuide} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/otp" component={Otp} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route exact path="/admin/findallflights" component={FindAllFlights} />
                <Route exact path="/admin/addflight" component={AddFlight} />
                <Route exact path="/admin/modifyflight" component={ModifyFlight} />
                <Route exact path="/admin/addnewseat" component={AddNewSeat} />
                <Route exact path="/resetpassword" component={ResetPassword} />
                <Route exact path="/address" component={Address} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/ticket" component={Ticket} />
                <Route exact path="/ContactUs" component={Contact} />
                <Route exact path="/CustomerProfile" component={CustomerProfile} />
                <Route path="**" component={NotFound} />
            </Switch>
            <br />
            <footer className="footer">
                <p>2024 @Airyatri. All rights reserved.</p>
            </footer>
        </div>
    );
}

function SignoutDropdown() {
    const [error, setError] = useState('');
    const history = useHistory();
    
    const handleLogout = () => {
        const url = 'http://localhost:8080/customer/logout';
        axios.post(url)
            .then((result) => {
                console.log('inside logout: ', result.data);
                if (result.status === 200) {
                    // Remove userId from sessionStorage
                    sessionStorage.removeItem('userId');
                    sessionStorage.removeItem('flightId');
                    sessionStorage.removeItem('seatClass');
                    sessionStorage.removeItem('passenger');
                    sessionStorage.removeItem('reservationDate');
                    sessionStorage.removeItem('paymentStatus');
                    sessionStorage.removeItem('state');
                    sessionStorage.removeItem('city');
                    sessionStorage.removeItem('pincode');
                    sessionStorage.removeItem('country');
                    sessionStorage.removeItem('amount');
                    sessionStorage.removeItem('userID');
                    // Redirect user to the home page
                    history.push('/Home');
                } else {
                    // Set an error message if no session found
                    setError('No session found. Please login.');
                }
            })
            .catch((error) => {
                // Log and display error message if an error occurred during logout
                console.error('Error occurred during logout:', error);
                setError('An error occurred during logout. Please try again.');
            });
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FontAwesomeIcon icon={faUser} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>
                    <FontAwesomeIcon icon={faUser} /> Logout
                </Dropdown.Item>
                <Dropdown.Item href="/signin">
                    <FontAwesomeIcon icon={faUser} /> Login
                </Dropdown.Item>
                <Dropdown.Item href="/CustomerProfile">
                    <FontAwesomeIcon icon={faUser} /> My Profile
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Launcher1;
