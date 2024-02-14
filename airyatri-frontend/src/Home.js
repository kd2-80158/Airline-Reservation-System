
function Home() {
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
           <label for="b-trip">Round-Trip</label>
           </td>
           <td></td>
           </tr>
           <tr>
              <td><input type="text" name="from" placeholder="FROM"/> </td>
              <td><input type="text" name="to" placeholder="TO"/> </td>
              <td><input type="date" name="departure"/> </td>
              <td><input type="date" name="return"/> </td>
              <td><input type="number" name="passenger" placeholder="PASSENGER"/> </td>
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
              <button className="btn btn-success">Search Flights</button>
              <td></td>
              <td></td>
           </tr>
           </table> 
          </div>
      </div>
   );
}

export default Home;