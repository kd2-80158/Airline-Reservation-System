import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function FlightBooking() {
    const [reservationDate, setReservationDate] = useState("");
    const [totalPrice, setTotalPrice] = useState("5000");
    const [userId, setUserId] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Pending");
    const [error, setError] = useState("");
    
    const history = useHistory();
    const { flightId } = useParams();

 

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic form validation
        if (!reservationDate || !totalPrice || !userId || !flightId || !paymentStatus) {
            setError("Please fill in all fields.");
            return;
        }

        const url = "http://localhost:8000/reservation";

        axios.post(url, {
            reservationDate,
            totalPrice,
            userId,
            flightId,
            paymentStatus
        })
        .then(response => {
            if (response.status === 200) {
                console.log("Reservation added successfully");
                history.push('/Address');
            } else {
                setError("Failed to add reservation. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error adding reservation:", error);
            setError("An error occurred while adding reservation.");
        });
    };

    return ( 
        <div className="container">
            <h1 className="text-center" style ={{color: 'brown',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',backgroundColor: '#f0f0f0',padding: '10px', margin: '0'}}>Book Flight</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="reservationDate">Reservation Date:</label>
                    <input type="date" className="form-control" id="reservationDate" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="totalPrice">Total Price:</label>
                    <input type="number" className="form-control" id="totalPrice" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="userId">User ID:</label>
                    <input type="text" className="form-control" id="userId" value={userId} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="flightId">Flight ID:</label>
                    <input type="text" className="form-control" id="flightId" value={flightId} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentStatus">Payment Status:</label>
                    <select className="form-control" id="paymentStatus" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default FlightBooking;
