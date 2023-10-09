import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginWithToken = () => {
  const navigate = useNavigate();
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
      const token = localStorage.getItem('jwtToken');

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
            'Authorization': `Bearer ${token}`,
            'projectId': projectId,
          },
        }
      );

      // Handle successful login with a toast notification
      toast.success('Login Successful', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

      // Store the user's name in local storage
      const userName = loginResponse.data.data.name;
      localStorage.setItem('userName', userName);

      // Redirect to another page if needed
      navigate('/');

    } catch (error) {
      // Handle login errors
      console.error('Login Error', error);
    }
  };
  return (



    <div>
        <ToastContainer />
   <form onSubmit={handleLogin}>


    <div class="container col-md-3">
<div class="row">
<img src="logo.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mx-auto col-md-6 my-4" alt=""/>

<div class="card">
<div class="card-body">
  
  <div className='col-md-12'>
    
    <h3 className="mb-4">Login account</h3>
   
    <div class="form-group">
      <label for="">Email</label>
      <input type="text"  name="email"
          value={formData.email}
          onChange={handleChange}  id="" class="form-control" placeholder="" aria-describedby="helpId"/>
      
    </div>

    <div class="form-group">
      <label for="">Password</label>
      <input type="password" name="password"
          value={formData.password}
          onChange={handleChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
      
    </div>
    <button type="submit" className='btn btn-secondary' style={{ width:"295px" }}>Login</button>
    <small>By creating an account, you agree to the Amazon <Link to="/https://www.primevideo.com/help/ref=av_auth_te?nodeId=202064890">Conditions of Use and Privacy Notice.</Link> 
  </small>
  <p className='mt-5'>Already have an account? <Link to="/Register">Sign Up</Link> </p>
  </div>

  

</div>
</div>  
</div>
</div>
</form>




  </div>




    
  );
};

export default LoginWithToken;
