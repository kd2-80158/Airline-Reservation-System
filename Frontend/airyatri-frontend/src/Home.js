import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Home() {
    const history = useHistory();
    const [departureCity, setDepartureCity] = useState("");
    const [arrivalCity, setArrivalCity] = useState("");
    const [error, setError] = useState(null);
    const [locations, setLocations] = useState([]);
    const [departure, setDeparture] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [passenger, setPassenger] = useState("");
    const [seatClass, setSeatClass] = useState("");
    const url = "http://localhost:8080/location/findAll";

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setLocations(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching locations:", error);
                // Optionally, set an error state to provide feedback to the user
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "departureCity") {
            setDepartureCity(value);
        } else if (name === "arrivalCity") {
            setArrivalCity(value);
        } else if (name === "departure") {
            setDeparture(value);
        } else if (name === "return") {
            setReturnDate(value);
        } else if (name === "passenger") {
            setPassenger(value);
        } else if (name === "seatClass") {
            setSeatClass(value);
            sessionStorage.setItem('seatClass', value);
        }
    };

    const SearchFlight = () => {
        if (!departureCity || !arrivalCity || !departure || !returnDate || !passenger) {
            alert("Please fill in all fields.");
            return;
        }
    
        // Store passenger in sessionStorage
        sessionStorage.setItem('passenger', passenger);

       
        
        axios.get(`http://localhost:8080/location/find/${departureCity}/${arrivalCity}`)
        .then((response) => {
            console.log(response);
            // Redirect only after successful response
            const queryParams = new URLSearchParams({
                departureCity,
                arrivalCity,
               // Include seatClass in the query parameters
            });
            history.push(`/BookAFlight?${queryParams}`);
        })
        .catch(error => {
            console.error("Error retrieving flights:", error);
            setError("An error occurred while retrieving flights.");
        });

    };

    return ( 
        <div className="container">
            <div className="table-responsive" id="b-div">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <select value={departureCity} name="departureCity" onChange={handleInputChange}>
                                    <option value="">departureCity</option>
                                    {locations.map(location => (
                                        <option key={location.id} value={location.city}>{location.city}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select value={arrivalCity} name="arrivalCity" onChange={handleInputChange}>
                                    <option value="">arrivalCity</option>
                                    {locations.map(location => (
                                        <option key={location.id} value={location.city}>{location.city}</option>
                                    ))}
                                </select>
                            </td>
                            <td><input type="date" name="departure" placeholder="Departure" onChange={handleInputChange} /></td>
                            <td><input type="date" name="return" placeholder="Return" onChange={handleInputChange} /></td>
                            <td><input type="number" name="passenger" placeholder="Passenger" min={0} max={1} onChange={handleInputChange} /></td>
                            <td>
                            <select name="seatClass" id="seatClass" value={seatClass} onChange={handleInputChange}>
    <option value="ECONOMY">Economy</option>
    <option value="BUSINESS">Business</option>
    <option value="VIP">VIP</option>
</select>
                            </td>
                            <td><button className="btn btn-success" onClick={SearchFlight}>Search Flights</button></td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
   );
}

export default Home;

