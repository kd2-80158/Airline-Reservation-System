import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function ResetPassword() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({password : "", confirmPassword : ""});

    const OnTextChange = (args)=>{
        var user1 = {...user};
        user1[args.target.name] = args.target.value;
        setUser(user1)
    }
    return ( <div className="container">
                <div className="table-responsive">
                    <table className="table-bordered">
                        <tbody>
                            <tr>
                                <td colSpan={2}><h3>Reset Password</h3></td>
                            </tr>
                            <tr>
                                <td><h6>Password</h6></td>
                                <td><input type="password" name="password" value={user.password} onChange={OnTextChange}></input></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><ul>
                                                    <li>8-16 characters</li>
                                                    <li>Combination of lowercase and uppercase letters</li>
                                                    <li>At least one number(0-9) </li>
                                                </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><h6>Confirm Password</h6></td>
                                <td><input type="password" name="confirmPassword" value={user.confirmPassword} onChange={OnTextChange}></input></td>
                            </tr>
                            <tr>
                                <button className="btn btn-primary" onClick={OnTextChange}>Set New Password</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> );
}

export default ResetPassword;