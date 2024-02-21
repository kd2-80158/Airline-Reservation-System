import { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function CustomerProfile() {
    const [cust, setCust] = useState({ mobileNo: "", email: "", firstName: "", lastName: "", gender: "", dateOfBirth: "" });

    useEffect(() => {
        // Fetch user details based on user ID from session storage
        const userId = sessionStorage.getItem("userId");

        // Make API request to fetch user details
        axios.get(`http://localhost:8080/customer/${userId}`)
            .then(response => {
                // Update the state with fetched user details
                setCust(response.data);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, []); // Run this effect only once when the component mounts

    const EditRecord = (No) => {
        // Implement edit functionality if needed
        // This function is currently empty in your code
    }

    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td colSpan={2}><h3>My Profile</h3></td>
                        </tr>
                        <tr>
                            <td><h5>{cust.firstName}</h5></td>
                            <td><h5>{cust.lastName}</h5></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><h5>{cust.mobileNo}</h5></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><h5>{cust.email}</h5></td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td colSpan={2}><h3>Personal Information</h3></td>
                        </tr>
                        <tr>
                            <td><h6>Mobile Number</h6></td>
                            <td><h6>{cust.mobileNo}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Email ID</h6></td>
                            <td><h6>{cust.email}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>First Name</h6></td>
                            <td><h6>{cust.firstName}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Last Name</h6></td>
                            <td><h6>{cust.lastName}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Gender</h6></td>
                            <td><h6>{cust.gender}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Date of Birth</h6></td>
                            <td><h6>{cust.dateOfBirth}</h6></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button className="btn btn-warning" onClick={() => {
                                EditRecord(cust.mobileNo)
                            }}>Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CustomerProfile;
