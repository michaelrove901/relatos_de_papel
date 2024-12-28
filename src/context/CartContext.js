import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del carrito
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);  // Estado global del carrito

  const addToCart = (book) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === book.id);
      if (itemExists) {
        alert('Este libro ya está en el carrito');
        return prevCart;
      }
      alert(`${book.title} agregado al carrito`);
      return [...prevCart, book];  // Añade el nuevo libro al carrito
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useCartContext() {
  return useContext(CartContext);
}
