import React from 'react';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('¡Pago realizado con éxito!');
    clearCart();
    navigate('/home');
  };

  return (
    <div className="checkout">
      <h1>Resumen de Compra</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío. Agrega libros antes de proceder al pago.</p>
      ) : (
        <div className="checkout__list">
          {cart.map((item) => (
            <div key={item.id} className="checkout__item">
              <span>{item.title} - {item.author}</span>
              <span>$ {item.price}</span>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="checkout__actions">
          <button onClick={handleCheckout}>Confirmar y Pagar</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
