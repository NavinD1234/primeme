import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterAndLogin = async (e) => {
    e.preventDefault();

    try {
      const projectId = '24ivifnsynsd'; // Replace with your actual project ID

      // Step 1: Register the user
      const registrationResponse = await axios.post(
        'https://academics.newtonschool.co/api/v1/user/signup',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          appType: 'ott',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'projectId': projectId,
          },
        }
      );

      // Step 2: Handle successful registration
      const token = registrationResponse.data.token;
      localStorage.setItem('jwtToken', token);

      // Step 3: Log in the user using the generated token
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
            'Authorization': `Bearer ${token}`, // Use the generated token for login
            'projectId': projectId,
          },
        }
      );

      // Step 4: Handle successful login (you can redirect or perform other actions)
      console.log('Register Successful', loginResponse.data);
      window.location.href="/login"
    } catch (error) {
      // Handle errors (registration or login errors)
      console.error('Registration or Login Error', error);
    }
  };

  return (
    <div>
      <h1>Register and Login</h1>
      <form onSubmit={handleRegisterAndLogin}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register and Login</button>
      </form>
    </div>
  );
};

export default Register;
