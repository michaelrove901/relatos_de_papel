import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import './CheckoutPage.css';
function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Pago realizado con éxito');
    clearCart();
    navigate('/home');
  };

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} - {item.author}
        </div>
      ))}      
    </div>
  );
}

export default CheckoutPage;
