import React from 'react';
import './ConfirmModal.css';

function ConfirmModal({ isOpen, onClose, onConfirm, bookTitle }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>¿Estás seguro?</h2>
        <p>¿Quieres eliminar <strong>{bookTitle}</strong> del carrito?</p>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>No</button>
          <button className="confirm-btn" onClick={onConfirm}>Sí</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
