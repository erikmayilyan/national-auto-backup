import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword () {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const { email, token } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setMessage('');
    setError('');
    
    axios.post(`http://localhost:5102/reset-password/${email}/${token}`, { password })
      .then(result => {
        if (result.status === 200 && result.data.Status === 'Success') {
          navigate('/thelogin');
        } else {
          setMessage(result.data.Status || 'Reset failed');
        }
      })
      .catch(error => {
        console.error('Reset password error:', error);
        setMessage('');
        setError('An error occurred. Please try again later.');
      });
  }; 

  return (
    <section className="the-login-section">
      <div className="login-html">
        <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            {message && <p className="message">{message}</p>}
            {error && <p className="error">{error}</p>}
            <div className="login-input-box">
              <input 
                type="password" 
                name="password"
                placeholder="Enter Password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="login-input-box">
              <input 
                type="password" 
                name="repeatPassword"
                placeholder="Repeat Password" 
                value={repeatPassword} 
                onChange={(event) => setRepeatPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" name="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default ResetPassword;
