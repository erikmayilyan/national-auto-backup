import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('https://national-auto-backup-frontend.onrender.com/thelogin', { email, password })
      .then(result => {
        console.log('Login result:', result);
        if (result.status === 200) {
          if (result.data.token) {
            localStorage.setItem('token', result.data.token);
            console.log('Redirecting to dashboard...');
            navigate('/dashboard');
          } else {
            setError('Invalid email or password');
          }
        } else {
          console.log('Login failed:', result.data.message);
          setMessage(result.status || "Login Failed");
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
            <h1>Login</h1>
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
            <div className="login-input-box">
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="remember-forgot">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" name="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
