import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

function BookAFlight() {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const from = queryParams.get("from");
    const to = queryParams.get("to");

    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                if (!from || !to) {
                    setError("Departure and arrival cities are required.");
                    return;
                }

                const response = await axios.get('http://localhost:8080/location/find', {
                    params: {
                        departureCity: from,
                        arrivalCity: to
                    }
                });

                setFlights(response.data);
            } catch (error) {
                console.error("Error fetching flights:", error);
                setError("An error occurred while fetching flights.");
            }
        };

        fetchFlights();
    }, [from, to]);

    const bookFlight = (flightId) => {

      history.push(`/FlightBooking/${flightId}`);
  };

    return (
        <div className="container">
            <div className="table-responsive">
                {error && <div className="alert alert-danger">{error}</div>}
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
                                <td><button className="btn btn-success" onClick={() => bookFlight(flight.flightId)}>Book</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookAFlight;
