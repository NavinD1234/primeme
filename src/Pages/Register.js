import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterAndLogin = () => {
  const navigate = useNavigate();

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
      toast.success('Register Successful', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      navigate('/login');
    } catch (error) {
      // Handle errors (registration or login errors)
      console.error('Registration or Login Error', error);
      toast.error('Register Unsuccessful', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

 
  return (
    <div>
       <ToastContainer />
      <form onSubmit={handleRegisterAndLogin}>


      <div class="container col-md-3">
  <div class="row">
  <img src="logo.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mx-auto col-md-6 my-4" alt=""/>

<div class="card">
  <div class="card-body">
    
    <div className='col-md-12'>
      
      <h3 className="mb-4">Create account</h3>
      <div class="form-group">
        <label for="">Your name</label>
        <input type="text" name="name"
            value={formData.name}
            onChange={handleChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        
      </div>
      <div class="form-group">
        <label for="">Email</label>
        <input type="text"  name="email"
            value={formData.email}
            onChange={handleChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        
      </div>

      <div class="form-group">
        <label for="">Password</label>
        <input type="password" name="password"
            value={formData.password}
            onChange={handleChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        
      </div>
      <button type="submit" className='btn btn-secondary' style={{ width:"295px" }}>Create your Amazon account</button>
      <small>By creating an account, you agree to the Amazon <Link to="/https://www.primevideo.com/help/ref=av_auth_te?nodeId=202064890">Conditions of Use and Privacy Notice.</Link> 
    </small>
    <p className='mt-5'>Already have an account? <Link to="/login">Sign In</Link> </p>
    <p className='mt-5'>Already have an account? <Link to="/update_password">Forgot Password</Link> </p>

    </div>

    

  </div>
</div>  
  </div>
</div>
</form>




    </div>
  );
};

export default RegisterAndLogin;
