import React, { useState } from 'react';
import axios from 'axios';

function AddNewSeat() {
    const url  = 'http://localhost:8080/seat';
    const [seatClass, setSeatClass] = useState('');
    const [price, setPrice] = useState('');
    const [isOccupied, setIsOccupied] = useState('');

    const handleReset = () => {
        // Clear form fields
        setSeatClass('');
        setPrice('');
        setIsOccupied('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Prepare data to send to the server
        const formData = {
            seatClass: seatClass.toUpperCase(),
            price,
            isOccupied
        };
    
        // Send POST request to the server
        axios.post(url, formData)
            .then((response) => {
                // Handle successful response
                console.log('Seat added successfully:', response.data);
                // Clear form fields after successful submission
                handleReset();
            })
            .catch((error) => {
                // Handle error
                console.error('Error adding seat:', error);
                // Optionally, display an error message to the user
            });
    };

    return ( 
        <div className="container">
             <h1 className="text-center" style ={{color: 'brown',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',backgroundColor: '#f0f0f0',padding: '10px', margin: '0'}}>Add New Flight</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="seatClass">Class Type:</label>
                    <select 
                        id="seatClass" 
                        name="seatClass" 
                        className="form-control" 
                        value={seatClass} 
                        onChange={(e) => setSeatClass(e.target.value)} 
                        required 
                    >
                        <option value="">Select Class Type</option>
                        <option value="ECONOMY">Economy</option>
                        <option value="BUSINESS">Business</option>
                        <option value="VIP">VIP</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input 
                        type="text" 
                        id="price" 
                        name="price" 
                        className="form-control" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group form-check">
                    <input 
                        type="checkbox" 
                        id="isOccupied" 
                        name="isOccupied" 
                        className="form-check-input" 
                        checked={isOccupied} 
                        onChange={(e) => setIsOccupied(e.target.checked)} 
                    />
                    <label htmlFor="isOccupied" className="form-check-label">Is Occupied</label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mr-2">Add Seat</button>{" "}
                    <button type="button" className="btn btn-warning" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
     );
}

export default AddNewSeat;
