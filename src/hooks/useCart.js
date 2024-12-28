import { useState } from 'react';

// Custom hook para manejar el carrito
function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      // Verifica si el libro ya está en el carrito
      const itemExists = prevCart.find((item) => item.id === book.id);
      if (itemExists) {
        return prevCart;
      }
      return [...prevCart, book];  // Agrega el libro al carrito
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
}

export default useCart;
