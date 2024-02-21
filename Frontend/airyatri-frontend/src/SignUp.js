import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({firstName :  "", lastName : "",   email : "", mobileNo : "", gender : "", dateOfBirth : "" , password : "", confirmPassword : ""});
    const [message, setMessage] = useState("");

    const OnTextChange = (args)=>{
        var user1 = {...user};
        user1[args.target.name] = args.target.value;
        setUser(user1)
    }

    const history = useHistory();

    const url = "http://127.0.0.1:8080/customer";

    const ShowMessage = (msgText)=>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
            console.log("Inside show message " + msgText);
        },1000);
    }
    const Register=()=>
    {
        const userData = {
            ...user,
            gender: selectedValue
        }
        console.log("1");
        axios.post(url,userData).then((result)=>{
            console.log("2");
            console.log("result: " +result.data);
            if(result.status===201)
                {
                    history.push('/signin');
                    // console.log("3");
                    // console.log("In post " +result.data.affectedRows)
                    // ClearBoxes();
                    // ShowMessage("Sign Up Successful");
                }
            })
            .catch((error) => {
                ShowMessage("Error occoured while signing up");
            })
    }

    const ClearBoxes=()=>
    {
        setUser({firstName :  "", lastName : "",   email : "", mobileNo : "", gender : "", dateOfBirth : "" , password : "", confirmPassword : ""});
    }

    const [ 
        selectedValue, 
        setSelectedValue, 
    ] = useState("Male"); 
  
    const handleRadioChange = (value) => {
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
                                    <input type="text" name="firstName" value={user.firstName} onChange={OnTextChange} required></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Last Name</td>
                                <td>
                                    <input type="text" name="lastName" value={user.lastName} onChange={OnTextChange} required></input>
                                </td>
                            </tr>

                            
                            <tr>
                                <td>Mobile No</td>
                                <td>
                                    <input type="number" name="mobileNo" value={user.mobileNo} onChange={OnTextChange} required></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Gender</td>
                                <td>
                                <input type="radio" id="Male" value="Male" checked={ selectedValue === "Male"} 
                                onChange={() => handleRadioChange( "Male") } /> 
                                <label htmlFor="Male"> 
                                Male
                                </label> 

                                <input type="radio" id="Female" value="Female" checked={ selectedValue === "Female"} 
                                onChange={() => handleRadioChange( "Female") } /> 
                                <label htmlFor="Female"> 
                                Female
                                </label> 

                                <input type="radio" id="Other" value="Other" checked={ selectedValue === "Other"} 
                                onChange={() => handleRadioChange( "Other") } /> 
                                <label htmlFor="Other"> 
                                Other
                                </label>
                                </td>
                            </tr>

                            <tr>
                                <td>Date of Birth</td>
                                <td>
                                    <input type="date" name="dateOfBirth" value={user.dateOfBirth} onChange={OnTextChange} required></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="text" name="email" value={user.email} onChange={OnTextChange} required></input>
                                </td>
                            </tr>


                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type="password" name="password" value={user.password} onChange={OnTextChange} required></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Confirm Password</td>
                                <td>
                                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={OnTextChange} required></input>
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