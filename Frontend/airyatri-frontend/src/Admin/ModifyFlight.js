import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

function ModifyFlight({ flightData }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        flightId: '',
        departureLocationId: '',
        arrivalLocationId: '',
        departureTime: '',
        arrivalTime: '',
        departureDate: '',
        noOfSeats: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (flightData) {
            // Set form data with fetched flight data
            setFormData({
                flightId: flightData.flightId,
                departureLocationId: flightData.departureLocationId,
                arrivalLocationId: flightData.arrivalLocationId,
                departureTime: flightData.departureTime,
                arrivalTime: flightData.arrivalTime,
                departureDate: flightData.departureDate,
                noOfSeats: flightData.noOfSeats
            });
        }
    }, [flightData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onClose = () =>
    {

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/flight/${flightData.flightId}`, formData);
            console.log('Flight modified successfully:', response.data);
            history.push('/Admin'); // Redirect to Admin page after modification
        } catch (error) {
            console.error('Error modifying flight:', error);
            setError('An error occurred while modifying the flight. Please try again.');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
            <h1 className="text-center" style={{ color: 'brown', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', backgroundColor: '#f0f0f0', padding: '10px', margin: '0' }}>Modify Flight Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Flight Name:</label>
                        <input type="text" className="form-control" name="flightId" value={formData.flightId} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Airport:</label>
                        <input type="text" className="form-control" name="departureLocationId" value={formData.departureLocationId} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Arrival Airport:</label>
                        <input type="text" className="form-control" name="arrivalLocationId" value={formData.arrivalLocationId} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Date:</label>
                        <input type="datetime-local" className="form-control" name="departureDate" value={formData.departureDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Departure Time:</label>
                        <input type="datetime-local" className="form-control" name="departureTime" value={formData.departureTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Arrival Time:</label>
                        <input type="datetime-local" className="form-control" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Return Date:</label>
                        <input type="date" className="form-control" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Seats</label>
                        <input type="number" className="form-control" name="noOfSeats" value={formData.noOfSeats} onChange={handleChange} min={1} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update Flight</button>{" "}
                    <button type="button" className="btn btn-warning" onClick={onClose}>Cancel</button>
                </form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
        </div>
    );
}

export default ModifyFlight;
