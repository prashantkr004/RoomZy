import React from 'react';
import './LoginScreen.css';
import loginImage from '../../assets/account.png'; // Import the image

const LoginScreen = () => {
    return (
        <div className="login-container">
            <div className="modal">
                <img src={loginImage} alt="Logo" className="modal-logo" />
                <h2>Sign In</h2>
                <p>Welcome back! Please enter your details</p>
                <form className="form-container">
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    
                    <div className="checkbox-container">
                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit">Sign in</button>

                    <div className="signup-container">
                        <p>Don't have an account? <a href="/signup" className="signup-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;