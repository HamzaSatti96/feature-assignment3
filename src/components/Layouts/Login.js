import './Login.css';
import { database } from '../FirebaseConfig';
import 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Login() {
  const myStyle1 = {
    color: 'red',
    border: '2px solid red',
  };
  const [Email, setEmail] = useState('Email');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();
  const handleEmailChange = (e) => {
   setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
   
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(Email);
    
      signInWithEmailAndPassword(database,Email, Password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        history('/');
        // ...
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign up error:', errorCode, errorMessage);
        // Update state or show error message to the user
      });
    };
 
  return (
    <div className="box">
      <span className="borderLine"></span>
      <form onSubmit={handlesubmit}>
        <h2>Sign In</h2>
        <div className="inputBox">
          <input type="text" required="required" onChange={handleEmailChange} />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            required="required"
            onChange={handlePasswordChange}
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
        {error && <p style={myStyle1}>{error}</p>}
      </form>
    </div>
    
    
  );
}
