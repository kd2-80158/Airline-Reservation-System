import './style.css';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feedback() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState(''); // State to hold the feedback message

  const HandleSubmit = () => {
    const custId = sessionStorage.getItem('userId');

    if (!custId) {
      setError("No session found. Please login.");
      return;
    }

    axios.post(`http://localhost:8080/user/${custId}/feedback/add`, { message: feedbackMessage })
      .then((result) => {
        if (result.status === 201) {
          history.push('/Home');
        } else {
          setError("Failed to submit feedback. Please try again.");
        }
      })
      .catch((error) => {
        setError("An error occurred while submitting feedback. Please try again.");
      });
  }

  return ( 
    <div className="container" id="f-div">
      <div className="table-responsive" id="fid">
        <table className="table table-bordered">
          <tbody> {/* Wrap the content in tbody */}
            <tr>
              <td colSpan={2}>{error}</td>
            </tr>
            <tr>
              <td></td>
              <td><img src="feedback-scale.jpeg" alt="feedback-img"/> </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <p className="f-para"><strong>We would love to hear your valuable feedback</strong></p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <textarea id="f-textarea" onChange={(e) => setFeedbackMessage(e.target.value)}></textarea> {/* Update feedbackMessage state on change */}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button id="f-button" className="btn btn-success" onClick={HandleSubmit}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Feedback;
