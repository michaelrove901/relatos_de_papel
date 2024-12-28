import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const location = useLocation();
  const { purchasedBooks } = location.state || { purchasedBooks: [] };
  const navigate = useNavigate();

  const total = purchasedBooks.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="confirmation">
    <h1>¡Compra Realizada con Éxito!</h1>
    <p>Estos son los libros que compraste:</p>
    {location.state.purchasedBooks.map((item) => (
      <p key={item.id}>
        <strong>{item.title}</strong> - ${item.price} ({item.quantity}x)
      </p>
    ))}
    <h3>Total Pagado: ${location.state.purchasedBooks.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
    <button onClick={() => navigate('/')}>Volver al Inicio</button>
  </div>
  );
}

export default ConfirmationPage;
