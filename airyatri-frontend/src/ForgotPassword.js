import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
    const [pwds, setPwds] = useState([]);
    const [pwd, setPwd] = useState({password : ""});
    return (<div className="container">
            <hr></hr>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td></td>
                            <td><h1>Forgot your password?</h1></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <p>Please enter the email address associated 
                                with your account. We will send a verification link to continue.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td><input type="email" value={pwd.password} ></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>);
}

export default ForgotPassword;