import { useState } from "react";
import axios from "axios";

function EditProfile() {
    const[users, setUsers] = useState([]);
    const[user,setUser] = useState({mobileNo : "", email : "", firstName : "", lastName : "", gender : "", dateOfBirth : ""});

    const OnTextChange = (args)=>{
        var user1 = {...user};
        user1[args.target.name] = args.target.value;
        setUser(user1)
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
    return ( <div className="container">
                <div className="table-responsive">
                    <table className="table table-bordered">
                       <tbody>
                        <tr>
                            <td colSpan={2}><h3>My Profile</h3></td>
                        </tr>
                        <tr>
                            <td><h5>First Name</h5></td>
                            <td><h5>Last Name</h5></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><h5>9876543210</h5></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><h5>abc@gmail.com</h5></td>
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
                            <td><input type="number" name="mobileNo" value={user.mobileNo} onChange={OnTextChange}></input></td>
                        </tr>
                        <tr>
                            <td><h6>Email ID</h6></td>
                            <td><input type="email" name="email" value={user.email} onChange={OnTextChange}></input></td>
                        </tr>
                        <tr>
                            <td><h6>First Name</h6></td>
                            <td><input type="text" name="firstName" value={user.firstName} onChange={OnTextChange}></input></td>
                        </tr>
                        <tr>
                            <td><h6>Last Name</h6></td>
                            <td><input type="text" name="lastName" value={user.lastName} onChange={OnTextChange}></input></td>
                        </tr>
                        <tr>
                            <td><h6>Date of Birth</h6></td>
                            <td><input type="date" name="dateOfBirth" value={user.dateOfBirth} onChange={OnTextChange}></input></td>
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
                            <td>
                                    {/* <button className="btn btn-primary" onClick={} >
                                        Save
                                    </button>
                                    {" "}
                                    <button className="btn btn-warning" onClick={} >
                                        Cancel
                                    </button> */}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><h5>abc@gmail.com</h5></td>
                        </tr>
                       </tbody>
                    </table>
                </div>
            </div> );
}

export default EditProfile;