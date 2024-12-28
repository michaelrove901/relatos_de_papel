import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';

function BookCard({ book }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <img src={`${process.env.PUBLIC_URL}/images/${book.image}`} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
}

// Asegúrate de exportar correctamente
export default BookCard;
