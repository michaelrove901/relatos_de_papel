import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/home">📚 Inicio</Link>
      </div>
      <div className="header__logo">
        <Link to="/checkout">📚 Carrito</Link>
      </div>
            
    </header>
  );
}

export default Header;
