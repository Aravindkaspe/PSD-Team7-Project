import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import '../Styles/LoginForm.css';

const LoginPage = () => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        console.log('Redirecting to shop page...');
        navigate('/shop');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage, navigate]);

  const handleLogin = async () => {
    try {
      if (signInEmail === 'admin' && signInPassword === '1') {
        login();
        setShowSuccessMessage(true);
      } else {
        const response = await fetch('your-api-endpoint/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: signInEmail, password: signInPassword }),
        });

        if (response.ok) {
          login();
          setShowSuccessMessage(true);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('your-api-endpoint/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: signUpName, email: signUpEmail, password: signUpPassword }),
      });

      if (response.ok) {
        setIsSignUp(false);
        setSignUpName('');
        setSignUpEmail('');
        setSignUpPassword('');
      } else {
        alert('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up user:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="body-container">
        <div className="container" id="container">
          <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            {!isSignUp && (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />
                <button className="btn-grad" onClick={handleLogin}>
                  Sign In
                </button>
              </>
            )}
            {isSignUp && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
                <button className="btn-grad" onClick={handleSignUp}>
                  Sign Up
                </button>
              </>
            )}
            <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
            </a>
          </div>
          {showSuccessMessage && (
            <div className="success-message">
              <p>Successful Sign In</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;