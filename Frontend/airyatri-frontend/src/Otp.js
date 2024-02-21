import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function Otp() {

  const url = "http://localhost:8080/customer/otpviaEmail";
  const [email,setEmail] = useState("");
  const [otp,setOtp] = useState(false);
  

const ShootEmailWithOtp = ()=>
{
  console.log(url);
  console.log(email);
  axios.post(url,email).then((result) =>
  {
    console.log(result);
     console.log(result.data);
  }
  );
}
const OnTextChange = (args) =>
{
  const {name, value} =args.target;
  setEmail({...email,[name]:value});
}


    return ( 
      <div className="container">
        <div className="table-responsive">
          <table>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" value={email.email} onChange={OnTextChange} placeholder='Email' required/> </td>
            </tr>
            <tr>
                <td></td>
                <td><button className="btn btn-info" onClick={ShootEmailWithOtp}>
                    SEND OTP
                    </button> </td>
            </tr>

            <tr> 
                <td id="otpmark">Enter your OTP</td>
                <td><input type="text" name="otp" value={email.Otp} onChange={OnTextChange} placeholder='Write OTP here' required/></td>
            </tr>

            <tr>
                <td></td>
                <td><button className="btn btn-success">
                    SIGN IN
                    </button> </td>
            </tr>
          </table>
        </div>
      </div>

     );
}

export default Otp;