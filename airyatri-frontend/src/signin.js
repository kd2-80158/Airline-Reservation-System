import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Home from './Home';
import { useHistory, Link } from "react-router-dom";
function SignIn() {
    const url = "http://localhost:8080/customer/login";
    const [user, setUser] = useState({email:"", password:""});
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();

    const login = () => {
        axios.post(url, user)
            .then((result) => {
                console.log(result.data.message);
                if(result.data.message === "admin") {
                    localStorage.setItem('username', user.email);
                    history.push('/Admin');
                } 
                if(result.data.message === "customer") {
                    localStorage.setItem('username', user.email);
                    history.push('/Home');
                } 
                else {
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
                                    <Link to='./ForgotPassword'>Forgot your password?</Link> <br/><br/>
                                    <Link to="./Otp">Request One Time Password(OTP)</Link>
                                    </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
    );
}
export default SignIn;
