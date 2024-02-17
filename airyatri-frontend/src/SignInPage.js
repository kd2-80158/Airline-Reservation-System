import React, { useState } from 'react';
import axios from 'axios';

const SignInPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = async () => {
    try {
      // Send OTP request to the server
      const response = await axios.post('/api/send-otp', { phoneNumber });
      console.log(response.data);
      setOtpSent(true);
      setError('');
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleSignIn = async () => {
    try {
      // Verify OTP with the server
      const response = await axios.post('/api/verify-otp', { phoneNumber, otp });
      console.log(response.data);
      // If OTP verification is successful, redirect the user to the dashboard or home page
      // Replace '/dashboard' with the appropriate route
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      {!otpSent ? (
        <button onClick={handleSendOtp}>Send OTP</button>
      ) : (
        <div>
          <label>OTP:</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignInPage;
