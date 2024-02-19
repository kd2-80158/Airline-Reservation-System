import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Home() {
    const history = useHistory();
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [error, setError] = useState(null);
    const [locations, setLocations] = useState([]);
    const [departure, setDeparture] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [passenger, setPassenger] = useState("");
    const [travelClass, setTravelClass] = useState("Economy");
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
        if (name === "from") {
            setFrom(value);
        } else if (name === "to") {
            setTo(value);
        } else if (name === "departure") {
            setDeparture(value);
        } else if (name === "return") {
            setReturnDate(value);
        } else if (name === "passenger") {
            setPassenger(value);
        } else if (name === "class") {
            setTravelClass(event.target.options[event.target.selectedIndex].text);
        }
    };

    const SearchFlight = () => {
        if (!from || !to || !departure || !returnDate || !passenger) {
            alert("Please fill in all fields.");
            return;
        }
    
        axios.get(`http://localhost:8080/location/find?departureCity=${from}&arrivalCity=${to}`)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    // Redirect only after successful response
                    history.push('/BookAFlight');
                } else {
                    setError("Failed to retrieve flights. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error retrieving flights:", error);
                setError("An error occurred while retrieving flights.");
            });

        const queryParams = new URLSearchParams({
            from,
            to,
        });
        history.push(`/BookAFlight?${queryParams}`);
    };

    return ( 
        <div className="container">
            <div className="table-responsive" id="b-div">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <select value={from} name="from" onChange={handleInputChange}>
                                    <option value="">From</option>
                                    {locations.map(location => (
                                        <option key={location.id} value={location.city}>{location.city}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select value={to} name="to" onChange={handleInputChange}>
                                    <option value="">To</option>
                                    {locations.map(location => (
                                        <option key={location.id} value={location.city}>{location.city}</option>
                                    ))}
                                </select>
                            </td>
                            <td><input type="date" name="departure" placeholder="Departure" onChange={handleInputChange} /></td>
                            <td><input type="date" name="return" placeholder="Return" onChange={handleInputChange} /></td>
                            <td><input type="number" name="passenger" placeholder="Passenger" onChange={handleInputChange} /></td>
                            <td>
                                <select name="class" id="class" onChange={handleInputChange}>
                                    <option value="0">Economy</option>
                                    <option value="1">Business</option>
                                    <option value="2">VIP</option>
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
