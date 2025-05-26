import React, { useEffect } from 'react';
import { Alert as BootstrapAlert, Button } from 'react-bootstrap';

const Alert = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getAlertVariant = () => {
    switch (type) {
      case 'error':
        return 'danger';
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'error':
        return 'bi-exclamation-triangle-fill';
      case 'success':
        return 'bi-check-circle-fill';
      case 'warning':
        return 'bi-exclamation-triangle-fill';
      default:
        return 'bi-info-circle-fill';
    }
  };

  return (
    <BootstrapAlert 
      variant={getAlertVariant()} 
      className="alert-custom shadow-lg"
      dismissible
      onClose={onClose}
    >
      <div className="d-flex align-items-center">
        <i className={`bi ${getIcon()} me-2`}></i>
        <span className="fw-medium">{message}</span>
      </div>
    </BootstrapAlert>
  );
};

export default Alert;