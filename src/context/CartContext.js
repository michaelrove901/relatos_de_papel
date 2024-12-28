import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del carrito
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);  // Estado global del carrito

  // Añadir al carrito
  const addToCart = (book) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === book.id);
      if (exists) {
        // Incrementa la cantidad si ya existe
        return prev.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Añade el libro con cantidad 1
        return [...prev, { ...book, quantity: 1 }];
      }
    });
  };

  // Eliminar del carrito
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular el precio total
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;  // Multiplica por la cantidad
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
    {children}
  </CartContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useCartContext() {
  return useContext(CartContext);
}
