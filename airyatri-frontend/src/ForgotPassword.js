import { useState } from "react";
import axios from "axios";
import "./index.css";
function ForgotPassword() {
    const [pwds, setPwds] = useState("");
    const [pwd, setPwd] = useState({password : ""});

    const OnTextChange = (args)=>{
        var user1 = {...pwd};
        user1[args.target.name] = args.target.value;
        setPwd(user1)
    }
    return (<div className="container">
            <hr></hr>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td colSpan={2}><h1>Forgot your password?</h1></td>
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
                            <td><input type="email" name="password" value={pwd.password} onChange={OnTextChange}></input></td>
                        </tr>
                        <tr>
                            
                            <td colSpan={2} id="td1"><button className="btn  
                                            btn-info"  
                                            onClick={()=>{
                                            
                                            }}>
                                                 
                                                Send Verification Link
                                            </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>);
}

export default ForgotPassword;