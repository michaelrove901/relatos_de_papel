import React from 'react';
import BookCard from './BookCard';
import useBooks from '../hooks/useBooks';
import useFilterBooks from '../hooks/useFilterBooks';  // Importamos el nuevo hook
import './BookList.css';

function BookList() {
  const { books } = useBooks();  // Obtener libros del hook existente
  const { filteredBooks, searchTerm, setSearchTerm } = useFilterBooks(books);  // Filtrado de libros

  return (
    <div className="book-list-container">
      <h1>Catálogo de Libros</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar libro por título o autor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
