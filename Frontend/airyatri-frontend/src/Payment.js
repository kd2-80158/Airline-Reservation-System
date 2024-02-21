import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

function Payment() {
    const [amount, setAmount] = useState("");
    const [paymentDateTime, setPaymentDateTime] = useState("");
    const [pMethod, setPMethod] = useState("VISA");
    const [error, setError] = useState("");
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const reservationId = queryParams.get('reservationId');
    // Base price of the flight
    const seat = sessionStorage.getItem('seatClass');
    const startDate = sessionStorage.getItem('setDeparture');

    // Function to calculate the difference in days between two dates
    function getDateDifference(departureDate, currentDate) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const diffDays = Math.round(Math.abs((departureDate - currentDate) / oneDay));
        return diffDays;
    }

    // Function to calculate the flight price based on the date difference
    function calculateFlightPrice(departureDate, currentDate, basePrice) {
        const diffDays = getDateDifference(departureDate, currentDate);
        
        // Define pricing tiers based on the difference in days
        if (diffDays >= 30) {
            return basePrice * 1.5; // 20% discount if booked more than 30 days in advance
        } else if (diffDays >= 15) {
            return basePrice * 2; // 10% discount if booked more than 15 days in advance
        } 
        else if(diffDays >5 && diffDays <=10)
        {
            return basePrice*2.5;
        }
        else {
            return basePrice*3; // No discount for bookings made less than 15 days in advance
        }
    }

    useEffect(() => {
        // Fetch base price when the component mounts
        if (seat) {
            axios.get(`http://localhost:8080/seat/baseprice/${seat}`)
                .then(response => {
                    const basePrice = response.data;
                    console.log('Base price:', basePrice);

                    // Calculate the flight price based on the current date
                    const departureDate = startDate; // Example departure date
                    const currentDate = new Date(); // Current date
                    const flightPrice = calculateFlightPrice(departureDate, currentDate, basePrice);
                    console.log('Flight Price:', flightPrice);

                    setAmount(flightPrice); // Set the total price state with the fetched base price
                    sessionStorage.setItem('amount', flightPrice);
                })
                .catch(error => {
                    console.error('Error fetching base price:', error);
                });
        } else {
            console.warn('Seat class is null. Base price cannot be fetched.');
        }
    }, [seat]); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Amount:", amount);
        
console.log("Payment Date Time:", paymentDateTime);
console.log("Payment Method:", pMethod);

         // Perform form validation
         if (!amount || !paymentDateTime) {
            setError("All fields are required.");
        }

        try {;

            // Example API call using Axios
            const response = await axios.post(`http://localhost:8080/reservation/${reservationId}/updatePaymentStatus`);

            // Handle response (e.g., redirect to next page)
            console.log("Payment successful:", response.data);
            sessionStorage.setItem('paymentStatus', 'Completed');
            // Redirect to the next page or handle success message
            history.push('/ticket');
        } catch (error) {
            console.error("Error submitting payment:", error);
            // Handle error (e.g., display error message)
            setError("Error submitting payment. Please try again.");
        }
    };

    return (  
        <div className="container">
            <h1 className="text-center" style={{ color: 'brown', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', backgroundColor: '#f0f0f0', padding: '10px', margin: '0' }}>Payment Details</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" className="form-control" id="amount" value={amount} readOnly autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentDateTime">Payment Date and Time:</label>
                    <input type="datetime-local" className="form-control" id="paymentDateTime" value={paymentDateTime} onChange={(e) => setPaymentDateTime(e.target.value)} autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="reservationId">Booking ID:</label>
                    <input type="number" className="form-control" id="reservationId" value={reservationId} readOnly autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="pMethod">Payment Method:</label>
                    <select className="form-control" id="pMethod" value={pMethod} onChange={(e) => setPMethod(e.target.value)} autoComplete="off">
                        <option value="VISA">VISA</option>
                        <option value="MASTERCARD">MASTERCARD</option>
                        <option value="PHONEPE">PHONEPE</option>
                        <option value="PAYTM">PAYTM</option>
                        <option value="GOOGLEPAY">GOOGLEPAY</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Payment;
