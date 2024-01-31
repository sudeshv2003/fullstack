import React, { useState } from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here (e.g., API request, authentication)
    console.log('Login clicked:', email, password);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="button" onClick={handleLogin}><Link to='/'>Login</Link></button>

        <a href="/forgot-password">Forgot Password?</a>
        <span> | </span>
        <Link to='/signup'>Create Account</Link>
      </form>
      
    </div>
  );
};

export default Login;
