import React, { useState } from 'react';
import BookCard from './BookCard';
import useBooks from '../hooks/useBooks';
import './BookList.css';

function BookList() {
  const { books } = useBooks();
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="book-list-container">
      {/* Título principal */}
      <h1 className="book-list__title">Catálogo de Libros</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar libro por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="book-list__search-bar"
      />

      {/* Resultados de la búsqueda */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="book-list__no-results">No se encontraron libros.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
