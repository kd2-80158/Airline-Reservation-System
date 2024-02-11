
function BookAFlight() {
    return ( 
        <div className="container" >
            <div classname="class-responsive" id="b-div">
            <table className="table">
                <tr>
                    <td>
             <input type="radio" value="One-Way" id="b-trip" name="trip"/>
             <label for="b-trip">One-Way</label>
             </td>
             <td>
             <input type="radio" value="Two-Way" id="b-trip"name="trip"/>
             <label for="b-trip">Two-Way</label>
             </td>
             <td></td>
             </tr>
             <tr>
                <td>FROM</td>
                <td>TO</td>
                <td>DEPARTURE</td>
                <td>RETURN</td>
                <td>PASSENGER</td>
                <td>CLASS</td>
             </tr>
             <tr>
                <td><input type="text" name="from"/> </td>
                <td><input type="text" name="to"/> </td>
                <td><input type="date" name="departure"/> </td>
                <td><input type="date" name="return"/> </td>
                <td><input type="number" name="passenger"/> </td>
                <td><select name="class" id="class">
    <option value="economy">Economy</option>
    <option value="Business">Business</option>
    <option value="VIP">VIP</option>
  </select> </td>
             </tr>
             <br></br>
             <br></br>
             <br></br>
             <tr>
                <td></td>
                <td></td>
                <button className="btn btn-success">Update Search</button>
                <td></td>
                <td></td>
             </tr>
             </table> 
            </div>
        </div>
     );
}

export default BookAFlight;