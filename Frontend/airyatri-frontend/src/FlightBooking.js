import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";

function FlightBooking() {
    const [reservationDate, setReservationDate] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Pending");
    const [error, setError] = useState("");
    const location = useLocation();
    const usersId = new URLSearchParams(location.search).get('userId');
    const { flightId } = useParams();
    const history = useHistory();
    const seat = sessionStorage.getItem('seatClass');
    useEffect(() => {
        // Fetch base price when the component mounts
       
        if (seat) {
            axios.get(`http://localhost:8080/seat/baseprice/${seat}`)
                .then(response => {
                    const basePrice = response.data;
                    console.log('Base price:', basePrice);
                    setTotalPrice(basePrice); // Set the total price state with the fetched base price
                })
                .catch(error => {
                    console.error('Error fetching base price:', error);
                });
        } else {
            console.warn('Seat class is null. Base price cannot be fetched.');
        }
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                reservationDate,
                totalPrice,
                usersId,
                flightId,
                paymentStatus
            };
            // Store reservationDate in sessionStorage
            sessionStorage.setItem('reservationDate', reservationDate);

            // Store paymentStatus in sessionStorage
            sessionStorage.setItem('paymentStatus', paymentStatus);
            
            // Send form data to reservation controller
            const response = await axios.post('http://localhost:8080/reservation', formData);
            
            // Handle response (e.g., redirect to next page)
            console.log("Reservation successful:", response.data);
            history.push(`/Address?reservationId=${response.data.Id}`);
            // Redirect to the next page or handle success message
        } catch (error) {
            console.error("Error submitting reservation:", error);
            // Handle error (e.g., display error message)
            setError("Error submitting reservation. Please try again.");
        }
    };

    return ( 
        <div className="container">
            <h1 className="text-center" style={{ color: 'brown', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', backgroundColor: '#f0f0f0', padding: '10px', margin: '0' }}>Book Flight</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="reservationDate">Reservation Date:</label>
                    <input type="date" className="form-control" id="reservationDate" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="totalPrice">Total Price:</label>
                    <input type="number" className="form-control" id="totalPrice" value={totalPrice} readOnly autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="usersId">User ID:</label>
                    <input type="text" className="form-control" id="usersId" value={usersId} readOnly autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="flightId">Flight ID:</label>
                    <input type="text" className="form-control" id="flightId" value={flightId} readOnly autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentStatus">Payment Status:</label>
                    <select className="form-control" id="paymentStatus" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} autoComplete="off">
                        <option value="Pending">Pending</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default FlightBooking;
