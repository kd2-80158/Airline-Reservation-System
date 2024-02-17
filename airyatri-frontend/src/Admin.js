import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";

function Admin() {
    const url = "http://localhost:8080/customer/logout";
    const url2 = "http://localhost:8080/customer/flight"
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    const signOut = () => {
        axios.post(url)
            .then((result) => {
                console.log("inside logout: ", result.data);
                if (result.data.message === "admin") {
                    setRedirect(true);
                } else {
                    setError("No session found. Please login.");
                }
            })
            .catch((error) => {
                console.error("Error occurred during logout:", error);
                setError("An error occurred during logout. Please try again.");
            });
    };

    const handleAddFlight = () => {
        // Add logic to navigate to the add flight page or perform related actions
        history.push('/addflight')
    };

    const handleModifyFlight = () => {
        // Add logic to navigate to the modify flight page or perform related actions

    };

    const handleAddNewSeat = () => {
        // Add logic to navigate to the add new seat page or perform related actions
    };

    const handleDeleteFlight = () => {
        // Add logic to delete a flight or perform related actions
    };

    const handleFindAllFlight = () => {
        // Add logic to find all flights or perform related actions
    };

    if (redirect) {
        return <Redirect to="/Home" />;
    }

    return ( 
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <h1 className="text-center mb-4">Welcome, Admin!</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Flight Management</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <button className="btn btn-success btn-block" onClick={handleAddFlight}>Add Flight</button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-warning btn-block" onClick={handleModifyFlight}>Modify Flight</button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-success btn-block" onClick={handleAddNewSeat}>Add New Seat</button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-success btn-block" onClick={handleDeleteFlight}>Delete Flight</button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-success btn-block" onClick={handleFindAllFlight}>Find All Flight</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-danger" onClick={signOut}>Logout</button>
                    </div>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default Admin;
