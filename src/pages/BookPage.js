import React from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BookPage.css';

// Simulamos datos de libros
const books = [
    { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', image: 'soledad.png', price: 1200 },
    { id: 2, title: '1984', author: 'George Orwell', image: '1984.jpg', price: 900 },
    { id: 3, title: 'El señor de los anillos', author: 'J. R. R. Tolkien', image: 'anillos.jpg', price: 900 },
    { id: 4, title: 'Harry Potter', author: 'George Orwell', image: 'harry.jpg', price: 900 }
  ];

function BookPage() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  const { addToCart } = useCartContext();

  if (!book) return <h2>Libro no encontrado</h2>;

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: 1
    });

    toast.success(`Libro 📚 ${book.title} agregado al carrito`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      className: 'custom-toast',
      icon: '✅',
    });
  };

  return (
    <div className="book-page">
      <img src={`${process.env.PUBLIC_URL}/images/${book.image}`} alt={book.title} />
      <h1>{book.title}</h1>
      <p><strong>{book.author}</strong></p>
      <p className="book-page__price">${book.price}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
}

export default BookPage;
