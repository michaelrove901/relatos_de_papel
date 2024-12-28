import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const location = useLocation();
  const { purchasedBooks } = location.state || { purchasedBooks: [] };
  const navigate = useNavigate();

  return (
    <div className="confirmation">
      <h1>¡Compra Realizada con Éxito!</h1>
      <p>Los siguientes libros han sido adquiridos:</p>

      <ul className="confirmation__list">
        {purchasedBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>

      <button className="confirmation__button" onClick={() => navigate('/home')}>
        Volver al Inicio
      </button>
    </div>
  );
}

export default ConfirmationPage;
