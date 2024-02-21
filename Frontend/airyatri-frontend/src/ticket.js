import React, { useState } from 'react';
import axios from 'axios';
import './ticket.css'; // Import CSS file for styling

function Ticket() {
    // Fetch ticket details from sessionStorage
    const [flightId, setFlightId] = useState(sessionStorage.getItem('flightId') || '');
    const reservationDate = sessionStorage.getItem('reservationDate');
    const passenger = sessionStorage.getItem('passenger');
    const seatClass = sessionStorage.getItem('seatClass');
    const totalPrice = sessionStorage.getItem('amount');
    const paymentStatus = sessionStorage.getItem('paymentStatus');
    const instructions = sessionStorage.getItem('instructions');
    const city = sessionStorage.getItem('city');
    const state = sessionStorage.getItem('state');
    const country = sessionStorage.getItem('country');
    const pincode = sessionStorage.getItem('pincode');
    const [email, setEmail] = useState('');

    // Concatenate address details
    const addressDetails = `${city}, ${state}, ${country} - ${pincode}`;

    // Function to handle sending ticket via email
    const emailTicket = () => {
        const params = new URLSearchParams({
            email,
            flightId,
            reservationDate,
            passenger,
            seatClass,
            totalPrice,
            paymentStatus,
            instructions,
            addressDetails
        });

        axios.get(`http://localhost:8080/ticket/email-ticket?${params}`)
            .then(response => {
                console.log(response.data);
                alert(response.data);
            })
            .catch(error => {
                console.error('Error sending email:', error);
                alert('Failed to send email.');
            });
    };

    // Function to handle sending notification to mobile number
    const sendNotificationToMobile = () => {
        // Implement mobile notification functionality here
        console.log('Sending notification to mobile...');
    };

    // Function to handle downloading ticket as PDF
    const downloadTicket = () => {
        axios.get(`http://localhost:8080/ticket/download-ticket?flightId=${flightId}`, {
                responseType: 'arraybuffer',
            })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'ticket.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Error downloading ticket:', error);
            });
    };

    return (
        <div className="ticket-container">
            <img src="airyatri-logo.jpeg" alt="Company Logo" className="company-logo" />
            <div className="ticket-header">
                <h2>Airplane Ticket</h2>
                
            </div>
            <div className="ticket-details">
                <p><strong>Flight ID:</strong> {flightId}</p>
                <p><strong>Reservation Date:</strong> {reservationDate}</p>
                <p><strong>Passenger:</strong> {passenger}</p>
                <p><strong>Seat Class:</strong> {seatClass}</p>
                <p><strong>Total Price:</strong> {totalPrice}</p>
                <p><strong>Address Details:</strong> {addressDetails}</p>
                <p><strong>Payment Status:</strong> {paymentStatus}</p>
                <p><strong>Instructions:</strong></p>
                <ul>
                    <li>After boarding, place your baggage in the appropriate locations, take your seat, and fasten your seat belt.</li>
                    <li>Please keep your seat belt fastened when the seat belt sign is on and whenever you are seated.</li>
                    <li>After the aircraft doors have been closed, please switch your electronic devices to airplane mode or turn them off.</li>
                    <li>Be sure to watch the video about emergency equipment and read the safety instructions card before takeoff.</li>
                    <li>Return your seat and table to their original positions during takeoff and landing.</li>
                    <li>Smoking* and the use of fire is strictly prohibited throughout the cabin, including the lavatories. Out of consideration for other passengers, the use of smokeless tobacco products and other such substitutes is also prohibited on board.</li>
                </ul>
            </div>
            <div className="ticket-actions">
                {/* Input for email */}
                <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Buttons */}
                <button className="btn btn-primary" onClick={emailTicket}>Send Ticket via Email</button>
            </div>
        </div>
    );
}

export default Ticket;
