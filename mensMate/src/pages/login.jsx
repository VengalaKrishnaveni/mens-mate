import React from 'react';
import { Link } from 'react-router-dom';
import '../Templates/login.css';

const Login = () => {
    return (
        <div className="login-form-container">
            <p className="login-title">Welcome back</p>
            <form className="login-form" action='POST'>
                <input type="email" className="login-input" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                <input type="password" className="login-input" onChange={(e)=>{setPassword(e.target.value)}}placeholder="Password" />
                <input type='submit' className="login-form-btn">Log in</input>
            </form>
            <p className="login-sign-up-label">
                Don't have an account?<span className="login-sign-up-link"><Link to="/signup">Sign Up</Link></span>
            </p>
        </div>
    );
};

export default Login;
