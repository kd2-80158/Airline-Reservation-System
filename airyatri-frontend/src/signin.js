import { useState,useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import axios from "axios";
import React from "react";
import { Redirect } from "react-router-dom";
import Home from './Home';
function SignIn() {

    const url = "http://localhost:8080/login";

    const [users,setusers] = useState([]);
    const [user,setuser] = useState({email:"",password:""});


    const Login = (args) =>
    {
        console.log("inside login");
        axios.post(url,user).then((result)=>
        {
            console.log(result.data.message);
            if(result.data.message==="success") {
            
            setRedirect(true);
        } else {
            console.log("something went wrong !!!!")
        }
    }).catch((error) => {
        console.error("Error occurred while logging in:", error);
    })
    };
    const [redirect, setRedirect] = useState(false);
if (redirect) {
    console.log("going to redirect");
return <Redirect to="./Home" />;
}
const Reset = (email)=>
    {
        setuser({email:"",password:""});
    }

    const OnTextChanged = (args) =>
    {
        var copyofuser = {...user};
        copyofuser[args.target.name] = args.target.value;
        setuser(copyofuser);
    }
     
    return (        
   
        <center>
  <div className="container">
    <div className="table-responsive">
    <table className="table table-bordered">
        <thead>
            Login Desk
        </thead>
        <tbody>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" value={user.email} onChange={OnTextChanged} required/>   </td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" name="password" value={user.password} onChange={OnTextChanged} required/>  </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button className="btn btn-success" onClick={Login}>
                        Login
                    </button>{" "}
                    <button className="btn btn-info" onClick={Reset}>
                        Reset
                    </button>
                </td>
            </tr>
            <tr>
                <a href='./ForgotPassword'>Forgot your password?</a> | 
                <a href='./Otp'>Request One Time Password(OTP)</a>
            </tr>
        </tbody>
    </table> 
    
  </div>
  </div>
  </center>
     );
}
export default SignIn;