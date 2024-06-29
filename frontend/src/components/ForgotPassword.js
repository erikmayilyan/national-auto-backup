import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    axios.post('http://localhost:5102/forgot-password', { email })
      .then(result => {
        if (result.status === 200 && result.data.Status === 'Success') {
          navigate('/thelogin');
        } else {
          setMessage(result.data.Status || 'Reset failed');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        setError('An error occurred. Please try again later.');
      });
  }; 

  return (
    <section className="the-login-section">
      <div className="login-html">
        <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Forgot Password</h1>
            {message && <p className="message">{message}</p>}
            {error && <p className="error">{error}</p>}
            <div className="login-input-box">
              <input 
                type="text" 
                name="email"
                placeholder="Email"
                value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                required
              />
            </div>
            <div className="remember-forgot">
              <a href="/thelogin">Go Back</a>
            </div>
            <button type="submit" name="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
