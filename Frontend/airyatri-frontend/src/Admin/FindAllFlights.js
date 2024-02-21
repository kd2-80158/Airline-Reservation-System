import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function FindAllFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory(); // Get history object
  const [flightData, setFlightData] = useState(null);
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:8080/flight');
        setFlights(response.data);
        setFlightData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleGoBack = () => {
    history.goBack(); // Go back to the previous page
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <h1 className="text-center" style ={{color: 'brown',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',backgroundColor: '#f0f0f0',padding: '10px', margin: '0'}}>All Flight Details</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Flight ID</th>
              <th>Departure Location</th>
              <th>Arrival Location</th>
              <th>No. of Seats</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
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
                <td><Link to="/Admin/ModifyFlight" className="btn btn-warning mr-2" >Modify Flight</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="navigation-buttons mt-3">
        <Link to="/Admin/AddFlight" className="btn btn-primary mr-2">Add Flight</Link> {" "}
        <Link to="/Admin/ModifyFlight" className="btn btn-secondary mr-2">Modify Flight</Link> {" "}
        <Link to="/Admin/AddNewSeat" className="btn btn-warning mr-2">Add New Seat</Link>{" "}
        <Link to="/Admin/DeleteFlight" className="btn btn-danger mr-2">Delete Flight</Link>{" "}
        <button className="btn btn-secondary" onClick={handleGoBack}>Back</button> {/* Back button */}
      </div>
     
    </div>
  );
}

export default FindAllFlights;
