import React, { useState } from 'react';
import Modal from 'react-modal';
import './SignUpLogin.css';

const SignUpLogin = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = () => {
    if (!email) {
      setEmailError('Please enter an email');
    } else {
      // Handle form submission
      console.log('Email:', email);
      setEmailError('');
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>×</button>
      <h2>Sign up or Log in</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
        {emailError && <span className="error-message">{emailError}</span>}
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      <div className="or-divider">OR</div>
      <button className="facebook-button">Continue with Facebook</button>
      <button className="google-button">Sign in with Google</button>
      <p>
        I accept Trulia's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
      </p>
    </Modal>
  );
}

export default SignUpLogin;
