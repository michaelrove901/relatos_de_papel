import React from 'react';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Redirigir a la página de confirmación y pasar libros comprados
    navigate('/confirmation', {
      state: { purchasedBooks: cart }
    });

    // Vaciar el carrito
    clearCart();
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart__item">
            <span>{item.title}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="cart__checkout">
          <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
