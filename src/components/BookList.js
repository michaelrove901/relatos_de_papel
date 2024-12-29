import React, { useState } from 'react';
import BookCard from './BookCard';
import useBooks from '../hooks/useBooks';
import './BookList.css';

function BookList() {
  const { books } = useBooks();  // Obtener libros del hook
  const [search, setSearch] = useState('');  // Estado para la barra de búsqueda

  // Filtrar libros según el texto de búsqueda
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="book-list-container">

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar libro por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="book-list">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        {filteredBooks.length === 0 && (
          <p className="no-results">No se encontraron libros.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
