import { useState } from 'react';


function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      
      const itemExists = prevCart.find((item) => item.id === book.id);
      if (itemExists) {
        return prevCart;
      }
      return [...prevCart, book];
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
