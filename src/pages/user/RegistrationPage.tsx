import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationPopup from './RegistrationPopup';

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSwitchToLogin = () => {
    navigate('/auth/login');
  };

  return (
    <RegistrationPopup 
      open={true} 
      onClose={handleClose}
      onSwitchToLogin={handleSwitchToLogin}
    />
  );
};

export default RegistrationPage;
