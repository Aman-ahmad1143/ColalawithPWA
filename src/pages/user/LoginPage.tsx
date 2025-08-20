import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPopup from './LoginPopup';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSwitchToRegister = () => {
    navigate('/auth/register');
  };

  return (
    <LoginPopup 
      open={true} 
      onClose={handleClose}
      onSwitchToRegister={handleSwitchToRegister}
    />
  );
};

export default LoginPage;
