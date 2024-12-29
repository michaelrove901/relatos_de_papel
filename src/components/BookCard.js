import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';
import './BookCard.css';

function BookCard({ book }) {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!book.price) {
      console.error('Error: El libro no tiene precio definido.');
      return;
    }

    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: 1
    });

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <div className="book-card" onClick={handleCardClick}>
        <img className="book-card__image" 
             src={`${process.env.PUBLIC_URL}/images/${book.image}`} 
             alt={book.title} />
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
        <p className="book-card__price">${book.price}</p>
        <button className="book-card__button" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>

      {showNotification && (
        <Notification message={`📚 ${book.title} agregado al carrito`} />
      )}
    </>
  );
}

export default BookCard;
