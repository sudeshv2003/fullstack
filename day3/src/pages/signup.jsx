import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSignUp = () => {
    // Add your signup logic here (e.g., API request, user creation)
    console.log('Sign up clicked:', name, email, password, confirmPassword, address);
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

       <Link to='/login'> <button type="button" onClick={handleSignUp}>Sign Up</button></Link>
      </form>

     
    </div>
  );
};

export default SignUp;
