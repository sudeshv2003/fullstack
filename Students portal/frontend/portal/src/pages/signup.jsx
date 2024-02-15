import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name,
        email,
        password,
        confirmPassword,
        address,
      });

      // Assuming your server responds with some data upon successful registration
      const userData = response.data;

      // Optionally, you can handle the registered user data or navigate to another page
      console.log('Registration successful:', userData);

      // Redirect to login page after successful registration
      // You can use history.push('/login') if you have access to the React Router history object
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <Link to='/login'><button type="button" onClick={handleSignUp}>Sign Up</button></Link>
      </form>
    </div>
  );
};

export default SignUp;
