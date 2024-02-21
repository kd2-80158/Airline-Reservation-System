import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

function BookAFlight() {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const departureCity = queryParams.get("departureCity");
    const arrivalCity = queryParams.get("arrivalCity");
    const usersId = sessionStorage.getItem('userId'); // Corrected

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const seatClass = queryParams.get('seatClass');

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true);
                setError(null);

                if (!departureCity || !arrivalCity) {
                    throw new Error("Departure and arrival cities are required.");
                }

                const response = await axios.get(`http://localhost:8080/location/find/${departureCity}/${arrivalCity}`);
                setFlights(response.data);
            } catch (error) {
                console.error("Error fetching flights:", error);
                setError("An error occurred while fetching flights.");
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, [departureCity, arrivalCity]);

    console.log("flight details: ",flights);
    const bookFlight = (flightId, userId) => {
        // Assuming userId is used to authorize the booking
        if (userId) {
            sessionStorage.setItem('flightId', flightId);
            // Redirect user to the flight booking page with the flightId and userId in the URL
            // history.push(`/FlightBooking/${flightId}?userId=${userId}&seatClass=${seatClass}`);
            history.push(`/FlightBooking/${flightId}/seatClass=${seatClass}?userId=${userId}`);

        } else {
            // Handle case where userId is not available (user not logged in)
            // You can redirect the user to the login page or display an error message
            console.error("User not logged in. Cannot book flight.");
            // Example: Redirect user to the login page
            history.push('/login');
        }
    };

    return (
        <div className="container">
            <div className="table-responsive">
                {loading && <p>Loading...</p>}
                {error && <div className="alert alert-danger">{error}</div>}
                {!loading && !error && (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Flight ID</th>
                                <th>Departure Location</th>
                                <th>Arrival Location</th>
                                <th>No. of Seats</th>
                                <th>Departure Time</th>
                                <th>Arrival Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {flights.map(flight => (
                                <tr key={flight.flightId}>
                                    <td>{flight.flightId}</td>
                                    <td>{flight.departureLocationId.city}</td>
                                    <td>{flight.arrivalLocationId.city}</td>
                                    <td>{flight.noOfSeats}</td>
                                    <td>{flight.departureTime}</td>
                                    <td>{flight.arrivalTime}</td>
                                    <td><button className="btn btn-success" onClick={() => bookFlight(flight.flightId, usersId)}>Book</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
    
}

export default BookAFlight;
