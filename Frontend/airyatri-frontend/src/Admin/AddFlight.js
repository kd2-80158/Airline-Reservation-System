import React, { useState } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
function AddFlight({ onClose }) {
    const history = useHistory();
    const [flightData, setFlightData] = useState({
        flightId: '',
        departureLocationId: '',
        arrivalLocationId: '',
        departureTime: '',
        arrivalTime: '',
        departureDate: '',
        noOfSeats: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFlightData({ ...flightData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            const response = await axios.post('http://localhost:8080/flight', flightData);
            console.log('Flight added successfully:', response.data);
            history.push('/Admin');
    };

    return (
        <div className="card">
            <div className="card-body">
            <h1 className="text-center" style={{ color: 'brown', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', backgroundColor: '#f0f0f0', padding: '10px', margin: '0' }}>Add Flight</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Flight Name:</label>
                        <input type="text" className="form-control" name="flightId" value={flightData.flightId} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Airport:</label>
                        <input type="text" className="form-control" name="departureLocationId" value={flightData.departureLocationId} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Arrival Airport:</label>
                        <input type="text" className="form-control" name="arrivalLocationId" value={flightData.arrivalLocationId} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Date:</label>
                        <input type="datetime-local" className="form-control" name="departureDate" value={flightData.departureDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Time:</label>
                        <input type="datetime-local" className="form-control" name="departureTime" value={flightData.departureTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Arrival Time:</label>
                        <input type="datetime-local" className="form-control" name="arrivalTime" value={flightData.arrivalTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Return Date:</label>
                        <input type="date" className="form-control" name="returnDate" value={flightData.returnDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Seats</label>
                        <input type="number" className="form-control" name="noOfSeats" value={flightData.noOfSeats} onChange={handleChange} min={1} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Add Flight</button>{" "}
                    <button type="button" className="btn btn-warning" onClick={onClose}>Cancel</button>
                </form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
        </div>
    );
}

export default AddFlight;
