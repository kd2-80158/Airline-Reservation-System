import './style.css';
function Feedback() {
    return ( 
        <div className="container" id="f-div">
        <div className="table-responsive" id="fid">
        <table className="table table-bordered">
        <tr>
            <td></td>
        <td><img src="feedback-scale.jpeg" alt="feedback-img"/> </td>
        <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
          <p class="f-para"><strong>We would love to hear your valuable feedback</strong></p>
          </td>

          </tr>
          <tr>
            <td></td>
            <td>
          <textarea id="f-textarea">
          </textarea>
          </td>
          </tr>
          <tr>
            <td></td>
          <button id="f-button" className="btn btn-success">
            Submit
            </button>
          </tr>
          </table>
        </div>
      </div>
 

     );
}

export default Feedback;