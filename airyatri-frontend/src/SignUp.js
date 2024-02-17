import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function SignUp() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({firstName :  "", lastName : "",   email : "", mobileNo : "", gender : "", dateOfBirth : "" , password : "", confirmPassword : ""});
    const [message, setMessage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const OnTextChange = (args)=>{
        var user1 = {...user};
        user1[args.target.name] = args.target.value;
        setUser(user1)
    }

    const url = "http://127.0.0.1:8080/customer";

    const ShowMessage = (msgText)=>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
            console.log("Inside show message " + msgText);
        },10000);
    }
    const Register=()=>
    {
        console.log("1");
        axios.post(url,user).then((result)=>{
            console.log("2");
            console.log("result: " +result.data);
            if(result.data.affectedRows!==undefined &&
                result.data.affectedRows > 0)
                {

                    console.log("3");
                    console.log("In post " +result.data.affectedRows)
                    ClearBoxes();
                    ShowMessage("Sign Up Successful");
                }
        })
    }

    const ClearBoxes=()=>
    {
        setUser({firstName :  "", lastName : "",   email : "", mobileNo : "", gender : "", dateOfBirth : "" , password : "", confirmPassword : ""});
    }

    const [ 
        selectedValue, 
        setSelectedValue, 
    ] = useState("option1"); 
  
    const handleRadioChange = ( 
        value 
    ) => { 
        setSelectedValue(value); 
    };

    return (
    
    <div className="container">

                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Customer Registration</th>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>
                                    <input type="text" name="firstName" value={user.firstName} onChange={OnTextChange} ></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Last Name</td>
                                <td>
                                    <input type="text" name="lastName" value={user.lastName} onChange={OnTextChange}></input>
                                </td>
                            </tr>

                            
                            <tr>
                                <td>Mobile No</td>
                                <td>
                                    <input type="number" name="mobileNo" value={user.mobileNo} onChange={OnTextChange}></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Gender</td>
                                <td>
                                <input type="radio" id="option1" value="option1" checked={ selectedValue === "option1"} 
                                onChange={() => handleRadioChange( "option1") } /> 
                                <label htmlFor="option1"> 
                                Male
                                </label> 

                                <input type="radio" id="option2" value="option2" checked={ selectedValue === "option2"} 
                                onChange={() => handleRadioChange( "option2") } /> 
                                <label htmlFor="option2"> 
                                Female
                                </label> 

                                <input type="radio" id="option3" value="option3" checked={ selectedValue === "option3"} 
                                onChange={() => handleRadioChange( "option3") } /> 
                                <label htmlFor="option3"> 
                                Other
                                </label>
                                </td>
                            </tr>

                            <tr>
                                <td>Date of Birth</td>
                                <td>
                                    <input type="date" name="dateOfBirth" value={user.dateOfBirth} onChange={OnTextChange}></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="text" name="email" value={user.email} onChange={OnTextChange}></input>
                                </td>
                            </tr>


                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type="password" name="password" value={user.password} onChange={OnTextChange}></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Confirm Password</td>
                                <td>
                                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={OnTextChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button className="btn btn-primary" onClick={Register} >
                                        Sign Up
                                    </button>
                                    {" "}
                                    <button className="btn btn-warning" onClick={ClearBoxes} >
                                        Reset
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>);
}

export default SignUp;