import { useState, useEffect } from 'react';

// Hook personalizado para filtrar libros
function useFilterBooks(books) {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBooks(results);
  }, [searchTerm, books]);

  return {
    filteredBooks,
    searchTerm,
    setSearchTerm,
  };
}

export default useFilterBooks;
