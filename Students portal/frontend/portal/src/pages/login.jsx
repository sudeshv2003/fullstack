import React, { useState } from 'react';
import '../assets/css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/login', { email, password });
      
      // Assuming your server responds with a token upon successful login
      const token = response.data.token;

      // Save the token to sessionStorage or localStorage
      sessionStorage.setItem('token', token);

      // Log the user in or navigate to another page
      console.log('Login successful:', email);
      console.log("Token : ",token);
      navigate('/');
      
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="button" onClick={handleLogin}> Login</button>

        <a href="/forgot-password">Forgot Password?</a>
        <span> | </span>
        <Link to='/signup'>Create Account</Link>
      </form>
    </div>
  );
};

export default Login;
