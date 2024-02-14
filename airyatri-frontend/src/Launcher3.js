import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import ManageBookings from './ManageBookings';
import SignUp from './SignUp';
import SignIn from "./signin";
import BookAPackage from './BookAPackage';
import WhereWeFly from './WhereWeFly';
import TravelGuide from './TravelGuide';
import Feedback from './Feedback';
import NotFound from './NotFound';
import Otp from "./Otp";
import EditProfile from './EditProfile';
import ForgotPassword from './ForgotPassword';
import CustomerProfile from './CustomerProfile';
import ResetPassword from './ResetPassword';
function Launcher() {
    return (<div className='container'>
            <Link to='/home'>Home</Link> {" | "}
            <Link to="/managebookings">Manage Bookings</Link> {" | "}
            <Link to="/signup">Sign Up</Link> {" | "}
            <Link to="/signin">Login</Link>{" | "}
            <br></br>
            <Link to="/bookapackage">Book a Package</Link> {" | "}
            <Link to="/wherewefly">Where We Fly</Link> {" | "}
            <Link to="/travelguide">Travel Guide</Link> {" | "}
           
            <Link to="/about">About</Link>{" | "}
            <Link to="/feedback">Feedback</Link>{" | "}
            <Link to="/Otp">OTP</Link>{" | "}
            <Link to="/CustomerProfile">Profile</Link>{" | "}
            <Link to='/ResetPassword'>Reset Password</Link>
            <hr></hr>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path='/managebookings' component={ManageBookings} />
                <Route exact path='/bookapackage' component={BookAPackage} />
                <Route exact path='/wherewefly' component={WhereWeFly} />
                <Route exact path='/travelguide' component={TravelGuide} />
                <Route exact path='/feedback' component={Feedback} />
                <Route exact path='/Otp' component={Otp} />
                <Route exact path="/ForgotPassword" component={ForgotPassword} />
                <Route exact path="/CustomerProfile" component={CustomerProfile} />
                <Route exact path="/EditProfile" component={EditProfile}/>
                <Route exact path="/ResetPassword" component={ResetPassword}/>
                <Route path="**" component={NotFound} />
            </Switch>
    </div>);
}

export default Launcher;