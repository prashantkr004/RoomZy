import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend to request an OTP
        console.log('Requesting OTP for:', email);
        setMessage(`An OTP has been sent to ${email}.`);
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <p>Enter your email to receive an OTP.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button type="submit">Get OTP</button>
            </form>
            {message && <p className="success-message">{message}</p>}
            <button className="close-modal" onClick={onClose}>Back to log in</button>
        </div>
    );
};

export default ForgotPassword;