import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    passwordCurrent: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      const projectId = '24ivifnsynsd'; // Replace with your actual project ID

      // Step 1: Send a password update request
      const updatePasswordResponse = await axios.patch(
        'https://academics.newtonschool.co/api/v1/user/updateMyPassword',
        {
          email: formData.email,
          passwordCurrent: formData.passwordCurrent,
          password: formData.newPassword,
          appType: 'ott', // Replace with your app type
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'projectId': projectId,
          },
        }
      );

      // Step 2: Handle successful password update
      console.log('Password Update Successful', updatePasswordResponse.data);

      // Optionally, you can navigate the user to another page or show a success message
      navigate('/login'); // Redirect to the login page after a successful password update
    } catch (error) {
      // Handle errors (password update request or other errors)
      console.error('Password Update Error', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdatePassword}>
        <div className="container col-md-3">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="col-md-12">
                  <h3 className="mb-4">Update Password</h3>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordCurrent">Current Password</label>
                    <input
                      type="password"
                      name="passwordCurrent"
                      value={formData.passwordCurrent}
                      onChange={handleChange}
                      className="form-control"
                      id="passwordCurrent"
                      placeholder="Enter your current password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="form-control"
                      id="newPassword"
                      placeholder="Enter your new password"
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary" style={{ width: "295px" }}>
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
