import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Home from './Home';

function SignIn() {
    const url = "http://localhost:8080/login";
    const [user, setUser] = useState({email:"", password:""});
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const login = () => {
        axios.post(url, user)
            .then((result) => {
                console.log(result.data.message);
                if (result.data.message === "success") {
                    setRedirect(true);
                } else {
                    setError("Invalid credentials"); // Provide feedback to user
                }
            })
            .catch((error) => {
                console.error("Error occurred while logging in:", error);
                setError("An error occurred while logging in");
            });
    };

    const reset = () => {
        setUser({email:"", password:""});
    };

    const OnTextChange = (event) => {
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    };

    if (redirect) {
        return <Redirect to="/Home" />;
    }

    return (        
        <center>
            <div className="container">
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th className='text'>Login Desk</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 
                                    <input className='input1' type="email" name="email" value={user.email} onChange={OnTextChange} placeholder='Email' required/>   
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    <input className='input1' type="password" name="password" value={user.password} onChange={OnTextChange} placeholder='Password' required/>  
                                </td>
                            </tr>
                            <br></br>
                            <tr className='login-btn'>
                                <td>
                                    <button className="btn btn-success" onClick={login}>Login</button>{"  "}
                                    <button className="btn btn-info" onClick={reset}>Reset</button> 
                                    </td>  
                            </tr>
                            <br></br>
                            <div>
                                    <p className="text-danger">{error}</p>
                                    <a href='./ForgotPassword'>Forgot your password?</a> <br/><br/>
                                    <a href='./Otp'>Request One Time Password(OTP)</a>
                                    </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
    );
}

export default SignIn;
