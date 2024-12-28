import React from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import './BookPage.css';
const books = [
  { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', description: 'Una gran obra...', image: 'soledad.png' },
  { id: 2, title: '1984', author: 'George Orwell', description: 'Distopía clásica...', image: 'soledad.png' }
];

function BookPage() {
  const { id } = useParams();
  const { addToCart } = useCartContext();  // Hook del carrito
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }

  return (
    <div className="book-page">
      <img
        src={`${process.env.PUBLIC_URL}/images/${book.image}`}
        alt={book.title}
        className="book-page__image"
      />
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.description}</p>
      <button onClick={() => addToCart(book)}>Agregar al Carrito</button>
    </div>
  );
}

export default BookPage;
