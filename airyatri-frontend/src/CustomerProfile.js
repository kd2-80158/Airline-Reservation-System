import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function CustomerProfile() {
    const [custs, setCusts] = useState([]);
    const [cust, setCust] = useState({mobileNo : "", email: "", firstName: "", lastName: "", gender: "", dateOfBirth: ""});

    const EditRecord=(No)=>{
        for(var i=0;i<custs.length ; i++)
        {
            if(custs[i].No === No)
            {
                var copyOfEmpToEdit = {...custs[i]};
                setCust(copyOfEmpToEdit);
            }
        }
    }
    
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
                            <td>
                            {
                                custs.map((cust)=>{
                                    return (
                                        <td>{cust.mobileNo}</td>
                                    );
                                })
                            }
                            </td>
                        </tr>
                        <tr>
                            <td><h6>Email ID</h6></td>
                            <td>
                            {
                                custs.map((cust)=>{
                                    return (
                                        <td>{cust.email}</td>
                                    );
                                })
                            }
                            </td>
                        </tr>
                        <tr>
                            <td><h6>First Name</h6></td>
                            <td>
                            {
                                custs.map((cust)=>{
                                    return (
                                        <td>{cust.firstName}</td>
                                    );
                                })
                            }
                            </td>
                        </tr>
                        <tr>
                            <td><h6>Last Name</h6></td>
                            <td>
                            {
                                custs.map((cust)=>{
                                    return (
                                        <td>{cust.lastName}</td>
                                    );
                                })
                            }
                            </td>
                        </tr>
                        <tr>
                            <td><h6>Gender</h6></td>
                            <td>
                            {
                                custs.map((cust)=>{
                                    return (
                                        <td>{cust.gender}</td>
                                    );
                                })
                            }
                            </td>
                        </tr>
                        <tr>
                            <td><h6>Date of Birth</h6></td>
                            <td>
                            {
                                custs.map((cust)=>{
                                    return (
                                        <td>{cust.dateOfBirth}</td>
                                    );
                                })
                            }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button className="btn btn-warning" onClick={()=>{
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