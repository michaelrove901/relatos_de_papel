import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

const books = [
  { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', image: 'soledad.png', price: 1200 },
  { id: 2, title: '1984', author: 'George Orwell', image: '1984.jpg', price: 900 },
  { id: 3, title: 'El señor de los anillos', author: 'J. R. R. Tolkien', image: 'anillos.jpg', price: 900 },
  { id: 4, title: 'Harry Potter', author: 'George Orwell', image: 'harry.jpg', price: 900 }
];

function BookList() {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
