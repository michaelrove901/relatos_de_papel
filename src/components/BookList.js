import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

const books = [
  { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', image: 'soledad.png' },
  { id: 2, title: '1984', author: 'George Orwell', image: 'soledad.png' }
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
