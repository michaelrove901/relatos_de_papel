import React from 'react';
import BookList from '../components/BookList';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Catálogo de Libros</h1>
      <BookList />
    </div>
  );
}

export default HomePage;
