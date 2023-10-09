import React, { useState } from 'react';
import axios from 'axios';

const LoginNew = () => { // Changed the component name to start with a capital letter

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
 
    try {
      const projectId = '24ivifnsynsd'; // Replace with your actual project ID

      // Step 1: Retrieve the JWT token from local storage
      const token = localStorage.getItem('jwtToken');

      // Step 2: Log in the user using the token
      const loginResponse = await axios.post(
        'https://academics.newtonschool.co/api/v1/user/login',
        {
          email: formData.email,
          password: formData.password,
          appType: 'ott',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Use the stored token for login
            'projectId': projectId,
          },
        }
      );

      // Step 3: Handle successful login (you can redirect or perform other actions)
      console.log('Login Successful', loginResponse.data);
      window.location.href="/"
    } catch (error) {
      // Handle login errors
      console.error('Login Error', error);
    }
  };

  return (
    <React.Fragment>
      <center>
  <img src="./plogo.jpg" className="f" />
  <div className="d">
    <h1 className='h1login'>Sign-In</h1>
    <form onSubmit={handleLogin}>
      <label className="l">Email (phone for mobile accounts)</label>
      <br />
     <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
      <br />
      <br /> 
      <label className="l1">
        Password &nbsp; &nbsp;&nbsp;&nbsp;
        <a href="#">Forget your Password?</a>
      </label>
      <br />
      <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
      <br />
      <br />
      <button type="submit" className="b2">Sign-In</button>
      <br />
      <p>
        By continuing, you agree to Amazon's <br />
        <a href="#">Conditons of Use</a>
        and <a href="#">Privacy Notice </a>
      </p>
      <div className="s">
        <input type="checkbox" />
        Keep me signed in.
        <div className="popover__wrapper">
          <a href="#" className="d2">
            Details
          </a>
          <div className="popover__content">
            <p className="popover-message">"Keep me signed In" checkbox</p>
            <hr />
            Choosing "Keep me Signed In" reduces the number of times you're
            asked to sign in To keep your account secure, use this option only
            on your personal devices.
            <p />
          </div>
        </div>{" "}
        <br />
        <p className="b">New to Amazon</p>
        <button className="b1">
          <span className="n">Create your Amazon account</span>
        </button>
      </div>
    </form>
  </div>
  <br />
  <br />
  <br />
  <a href="#">Conditions of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#">Privacy Notice</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#">Help</a>
  <br />
  <p style={{ marginLeft: 30 }}>
    © 1996-2023, Amazon.com, Inc. or its affiliates
  </p>
</center>

    </React.Fragment>
  )
}

export default LoginNew