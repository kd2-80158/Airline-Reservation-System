import React, { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

function Address() {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [error, setError] = useState("");
    const usersId = sessionStorage.getItem('userId'); // Corrected

    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const reservationId = queryParams.get('reservationId');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform form validation
        if (!city || !country || !pincode || !state) {
            setError("All fields are required.");
            return;
        }

        try {
            // Make API call to submit form data
            const formData = {
                city,
                country,
                pincode,
                state
            };

            // Store values in sessionStorage
            sessionStorage.setItem('city', city);
            sessionStorage.setItem('country', country);
            sessionStorage.setItem('pincode', pincode);
            sessionStorage.setItem('state', state);

            // Construct the API call URL dynamically using the userId and reservationId
            const apiUrl = `http://localhost:8080/user/address/${usersId}?reservationId=${reservationId}`;

            // Example API call using Axios
            const response = await axios.post(apiUrl, formData);

            // Handle successful submission
            console.log("Form submitted successfully:", response.data);
            history.push(`/Payment?reservationId=${reservationId}`);
        } catch (error) {
            // Handle error
            console.error("Error submitting form:", error);
            setError("An error occurred while submitting the form.");
        }
    };

    return ( 
        <div className="container">
            <h1 className="text-center" style={{ color: 'brown', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', backgroundColor: '#f0f0f0', padding: '10px', margin: '0' }}>Address Details</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="usersId">User ID:</label>
                    <input type="text" className="form-control" id="usersId" value={usersId} readOnly autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pincode:</label>
                    <input type="number" className="form-control" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input type="text" className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Address;
