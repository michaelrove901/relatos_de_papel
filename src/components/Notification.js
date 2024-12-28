import React from 'react';
import ReactDOM from 'react-dom';
import './Notification.css';

function Notification({ message, onClose }) {
  return ReactDOM.createPortal(
    <div className="notification">
      <span className="notification__icon">✅</span>
      <span>{message}</span>
    </div>,
    document.body  // Renderiza directamente en el body
  );
}

export default Notification;
