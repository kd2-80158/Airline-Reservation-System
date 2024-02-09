import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import ManageBookings from './ManageBookings';
import SignUp from './SignUp';
import BookAPackage from './BookAPackage';
import WhereWeFly from './WhereWeFly';
import TravelGuide from './TravelGuide';
import Feedback from './Feedback';
import NotFound from './NotFound';
function Launcher1() {
    return (<div className='container'>
            <Link to='/home'>Home</Link> {" | "}
            <Link to="/managebookings">Manage Bookings</Link> {" | "}
            <Link to="/signup">Sign Up</Link> {" | "}
            <Link to="/login">Login</Link> {" | "}
            <br></br>
            <Link to="/bookapackage">Book a Package</Link> {" | "}
            <Link to="/wherewefly">Where We Fly</Link> {" | "}
            <Link to="/travelguide">Travel Guide</Link> {" | "}
            <Link to="/feedback">Feedback</Link>
            <hr></hr>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/managebookings' component={ManageBookings} />
                <Route exact path='/bookapackage' component={BookAPackage} />
                <Route exact path='/wherewefly' component={WhereWeFly} />
                <Route exact path='/travelguide' component={TravelGuide} />
                <Route exact path='/feedback' component={Feedback} />
                <Route path="**" component={NotFound} />
            </Switch>
    </div>);
}

export default Launcher1;