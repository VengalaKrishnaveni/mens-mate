

import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import '../Templates/signup.css'; // Adjust the path to your CSS file

const SignUp = () => {
  // State for form data (optional, depending on how you handle form submission)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    medicalConditions: '',
  });

  // Function to update state on input change (optional)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Unlock personalized menstrual health guidance with MenseMate – Register now!</p>
      <div className="flex">
        <label>
          <input 
            required 
            placeholder="" 
            type="text" 
            className="input"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <span>Firstname</span>
        </label>

        <label>
          <input 
            required 
            placeholder="" 
            type="text" 
            className="input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span>Lastname</span>
        </label>
      </div>  

      <label>
        <input 
          required 
          placeholder="" 
          type="email" 
          className="input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>Email</span>
      </label> 


      <label>
          <input 
            required 
            placeholder="" 
            type="text" 
            className="input"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
          />
          <span>Medical Health Conditions</span>
        </label>

      <label>
        <input 
          required 
          placeholder="" 
          type="password" 
          className="input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>Password</span>
      </label>

      <label>
        <input 
          required 
          placeholder="" 
          type="password" 
          className="input"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span>Confirm password</span>
      </label>




      <button className="submit">Sign Up</button>
      <p className="login">Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default SignUp;
