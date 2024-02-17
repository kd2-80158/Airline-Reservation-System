import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const handleEmailChange = (event) => {
        setEmail(event.target.value); // Update the email state when it changes
    };

    const sendVerificationLink = () => {
        setError(null);
        axios.post("http://localhost:8080/reset-password", { email })
            .then((response) => {
                setSuccess(true);
                history.push(`/ResetPassword?email=${email}`); // Pass the email as a URL parameter to the next page
            })
            .catch((error) => {
                setError("Failed to send verification link. Please try again.");
            });
    };

    return (
        <div className="container">
            <hr />
            <div className="table-responsive">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td colSpan={2}><h1>Forgot your password?</h1></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <p>Please enter the email address associated with your account. We will send a verification link to continue.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td><input type="email" value={email} onChange={handleEmailChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button className="btn btn-info" onClick={sendVerificationLink}>
                                    Send Verification Link
                                </button>
                            </td>
                        </tr>
                        {error && (
                            <tr>
                                <td colSpan={2} className="text-danger">{error}</td>
                            </tr>
                        )}
                        {success && (
                            <tr>
                                <td colSpan={2} className="text-success">Verification link sent successfully!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ForgotPassword;
