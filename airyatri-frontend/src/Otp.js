import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Otp() {
    return ( 
      <div className="container">
        <div className="table-responsive">
          <table>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" required /> </td>
            </tr>
            <tr>
                <td></td>
                <td><button className="btn btn-info">
                    SEND OTP
                    </button> </td>
            </tr>

            <tr> 
                <td id="otpmark">Enter your OTP</td>
                <td><input type="text" name="otp" required /></td>
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