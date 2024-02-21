import React, { useState } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function AddFlight({ onClose }) {
    const [flightId, setFlightId] = useState('');
    const [departureLocationId, setDepartureLocationId] = useState('');
    const [arrivalLocationId, setArrivalLocationId] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [noOfSeats, setNoOfSeats] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFlight = {
            flightId,
            departureLocationId,
            arrivalLocationId,
            departureTime,
            arrivalTime,
            departureDate,
            noOfSeats
        };

        const url = "http://127.0.0.1:8080/flight";
        axios.post(url, newFlight)
            .then((response) => {
                console.log('Flight added successfully:', response.data);
                onClose();
            })
            .catch((error) => {
                console.error('Error adding flight:', error);
                setError('An error occurred while adding the flight. Please try again.');
            });
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add New Flight</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Flight Number:</label>
                        <input type="text" className="form-control" value={flightId} onChange={(e) => setFlightId(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Airport:</label>
                        <input type="text" className="form-control" value={departureLocationId} onChange={(e) => setDepartureLocationId(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Arrival Airport:</label>
                        <input type="text" className="form-control" value={arrivalLocationId} onChange={(e) => setArrivalLocationId(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Date:</label>
                        <input type="date" className="form-control" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Time:</label>
                        <input type="datetime-local" className="form-control" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Arrival Time:</label>
                        <input type="datetime-local" className="form-control" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Seats</label>
                        <input type="number" className="form-control" value={noOfSeats} onChange={(e) => setNoOfSeats(e.target.value)} min={1} required />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Add Flight</button> {" "}
                    <button type="button" className="btn btn-warning" onClick={onClose}>Cancel</button>
                </form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
        </div>
    );
}

export default AddFlight;
