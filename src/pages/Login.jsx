import { useState } from 'react';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import './Login.css';
import logo from '../assets/logo.jpg';
import flag from '../assets/flag.png';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import email from '../assets/email.png';

// Moved LoginScreen outside Login component
const LoginScreen = ({ formData, handleInputChange, error, handleContinue, handleSocialLogin }) => (
  <div className="auth-container">
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="spicebite Logo" className="logo-icon" />
        <span className="logo-text">Spicebite</span>
      </div>
    </div>
    <div className="content">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome 👋</h1>
        <p className="welcome-subtitle">
          Login or Sign up to manage your restaurant and cafe digitally.
        </p>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="input-group">
        <div className="phone-input-container">
          <div className="country-code">
            <img src={flag} alt="nepal-flag" className="nepal-flag" />
            <span>+977</span>
          </div>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className="phone-input"
            placeholder="Enter phone number"
          />
        </div>
      </div>
      <div className="terms-section">
        <p className="terms-text">
          By signing up, you agree to our{' '}
          <a href="#" className="terms-link">Privacy Policies</a> &{' '}
          <a href="#" className="terms-link">Terms and Conditions</a>
        </p>
      </div>
      <button onClick={handleContinue} className="continue-button">
        Continue
      </button>
      <div className="divider">or</div>
      <div className="social-buttons">
        <button 
          className="social-button"
          onClick={() => handleSocialLogin('Google')}
        >
          <img src={google} alt="google-icon" className="google-icon" />
          <span>Continue with Google</span>
        </button>
        <button 
          className="social-button"
          onClick={() => handleSocialLogin('Apple')}
        >
          <img src={apple} alt="apple-icon" className="apple-icon" />
          <span>Continue with Apple</span>
        </button>
        <button 
          className="social-button"
          onClick={() => handleSocialLogin('Email')}
        >
          <img src={email} alt="email-icon" className="email-icon" />
          <span>Use email instead</span>
        </button>
      </div>
    </div>
  </div>
);

// Moved RegisterScreen outside Login component
const RegisterScreen = ({ formData, handleInputChange, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, error, handleContinue, handleBack, passwordRequirements }) => (
  <div className="auth-container">
    <div className="register-header">
      <button onClick={handleBack} className="back-button">
        <ChevronLeft size={24} />
      </button>
      <div className="progress-container">
        <span className="progress-text">Almost </span>
        <span className="progress-done">Done</span>
        <span className="checkmark">✅</span>
      </div>
    </div>
    <div className="content">
      <div className="register-welcome">
        <p className="register-subtitle">
          Welcome, You are new to RestroX. Please tell more about yourself.
        </p>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="form-container">
        <div className="field-group">
          <label className="field-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="text-input"
            placeholder="Roshna Xettri"
          />
        </div>
        <div className="field-group">
          <label className="field-label">
            Phone Number <span className="required">*</span>
          </label>
          <div className="phone-input-container">
            <div className="country-code">
              <div className="nepal-flag"></div>
              <span>+977</span>
            </div>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="phone-input"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div className="field-group">
          <label className="field-label">
            Set New Password <span className="required">*</span>
          </label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="password-input"
              placeholder="Set your new password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="eye-button"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="field-group">
          <label className="field-label">
            Confirm New Password <span className="required">*</span>
          </label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="password-input"
              placeholder="Confirm your new password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="eye-button"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="password-requirements">
          <p className="requirements-title">Your password must include:</p>
          <ul className="requirements-list">
            <li className={`requirement-item ${passwordRequirements.length ? 'valid' : ''}`}>
              At least 8 characters
            </li>
            <li className={`requirement-item ${passwordRequirements.uppercase ? 'valid' : ''}`}>
              At least 1 uppercase letter
            </li>
            <li className={`requirement-item ${passwordRequirements.number ? 'valid' : ''}`}>
              At least 1 number
            </li>
          </ul>
        </div>
        <button onClick={handleContinue} className="finish-button">
          Finish Setup 🔒
        </button>
      </div>
    </div>
  </div>
);

const Login = () => {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login', 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error on input change
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password)
    };
  };

  const passwordRequirements = validatePassword(formData.password);

  const handleContinue = () => {
    setError('');
    if (currentScreen === 'login') {
      if (!formData.phoneNumber.trim()) {
        setError('Please enter a phone number');
        return;
      }
      setCurrentScreen('register');
    } else {
      if (
        !formData.fullName.trim() ||
        !formData.phoneNumber.trim() ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError('Please fill in all required fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (
        !passwordRequirements.length ||
        !passwordRequirements.uppercase ||
        !passwordRequirements.number
      ) {
        setError('Password does not meet requirements');
        return;
      }
      alert('Registration completed!');
    }
  };

  const handleBack = () => {
    setError('');
    if (currentScreen === 'register') {
      setCurrentScreen('login');
    }
  };

  const handleSocialLogin = (provider) => {
    if (provider === 'Google') {
      window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=profile%20email';
    } else if (provider === 'Apple') {
      window.location.href = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=name%20email';
    } else if (provider === 'Email') {
      alert('Email login flow not implemented. Please use phone number or social login.');
    }
  };

  return currentScreen === 'login' ? (
    <LoginScreen
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
      formData={formData}
      handleInputChange={handleInputChange}
      error={error}
      handleContinue={handleContinue}
      handleSocialLogin={handleSocialLogin}
    />
  ) : (
    <RegisterScreen
      formData={formData}
      handleInputChange={handleInputChange}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      showConfirmPassword={showConfirmPassword}
      setShowConfirmPassword={setShowConfirmPassword}
      error={error}
      handleContinue={handleContinue}
      handleBack={handleBack}
      passwordRequirements={passwordRequirements}
    />
  );
};

export default Login;