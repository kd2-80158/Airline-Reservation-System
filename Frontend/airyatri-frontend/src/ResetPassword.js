import { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

function ResetPassword() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");
    // const { email } = useParams(); // Retrieve the email parameter from the URL
    console.log(email);
    const [user, setUser] = useState({ password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleResetPassword = () => {
        if (user.password !== user.confirmPassword) {
            setError("Password and confirm password do not match.");
            return;
        }

        // Send a request to the server to update the password
        axios.put(`http://localhost:8080/customer/resetpassword?email=${email}&newPassword=${user.password}`)

            .then((response)=> {
                console.log(response);
                if (response.status === 200) {
                    history.push('/signin');
                } else {
                    setError("Failed to reset password. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error resetting password:", error);
                setError("An error occurred while resetting password.");
            });
    };

    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table-striped">
                    <tbody>
                        <tr>
                            <td colSpan={2}><h3>Reset Password</h3></td>
                        </tr>
                        <tr>
                            <td><h6>Password</h6></td>
                            <td><input type="password" name="password" value={user.password} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <ul>
                                    <li>8-16 characters</li>
                                    <li>Combination of lowercase and uppercase letters</li>
                                    <li>At least one number(0-9)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><h6>Confirm Password</h6></td>
                            <td><input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleInputChange} /></td>
                        </tr>
                        {error && <tr><td colSpan={2}><p className="text-danger">{error}</p></td></tr>}
                        <tr>
                            <td colSpan={2}><button className="btn btn-primary" onClick={handleResetPassword}>Set New Password</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ResetPassword;
