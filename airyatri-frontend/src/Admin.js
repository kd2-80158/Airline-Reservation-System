import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCog, faUserPlus, faTrashAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

function Admin() {
    const url = "http://localhost:8080/customer/logout";
    const urlf = "http://localhost:8080/flight";
    const urls = "http://localhost:8080/seat";
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');
    const [seat, setSeat] = useState('');
    const history = useHistory();

    const signOut = () => {
        axios.post(url)
            .then((result) => {
                console.log("inside logout: ", result.data);
                if (result.data==="customer" || result.data==="admin") {
                    history.push('/Home');
                }
                else {
                    setError("No session found. Please login.");
                }
            })
            .catch((error) => {
                console.error("Error occurred during logout:", error);
                setError("An error occurred during logout. Please try again.");
            });
    };

    const handleAddFlight = () => {
        // Add logic to handle adding a flight
    };

    const handleModifyFlight = () => {
        // Add logic to handle modifying a flight
    };

    const handleAddNewSeat = () => {
        
        history.push('/Admin/AddNewSeat');
    };

    const handleDeleteFlight = () => {
        // Add logic to handle deleting a flight
    };

    const handleFindAllFlight = () => {
       
    
        axios.get(urlf)
            .then((result) => {
                if (result.status === 200) {
                    history.push('/Admin/FindAllFlights');
                }
            })
            .catch((error) => {
                console.error("Error occurred while fetching all flights:", error);
                // Handle error appropriately (e.g., show error message)
            });
    };
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
                                    <button className="btn btn-link" onClick={handleAddFlight}>
                                        <FontAwesomeIcon icon={faPlane} /> Add Flight
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-link" onClick={handleModifyFlight}>
                                        <FontAwesomeIcon icon={faCog} /> Modify Flight
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-link" onClick={handleAddNewSeat}>
                                        <FontAwesomeIcon icon={faUserPlus} /> Add New Seat
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-link" onClick={handleDeleteFlight}>
                                        <FontAwesomeIcon icon={faTrashAlt} /> Delete Flight
                                    </button>
                                </li>
                                <li className="list-group-item">
                                    <button className="btn btn-link" onClick={handleFindAllFlight}>
                                        <FontAwesomeIcon icon={faSearch} /> Find All Flight
                                    </button>
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
