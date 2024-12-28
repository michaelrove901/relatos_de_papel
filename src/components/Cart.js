import React from 'react';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
    const { cart, removeFromCart, getTotalPrice, clearCart  } = useCartContext();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length === 0) return;

        navigate('/confirmation', {
            state: { purchasedBooks: cart }
        });
        clearCart();
    };
    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="cart__item">BookCard
                        <span>{item.title} - ${item.price * item.quantity} ({item.quantity}x)</span>
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </div>
                ))
            )}

            {cart.length > 0 && (
                <div className="cart__checkout">
                    <h3>Total: ${getTotalPrice()}</h3>
                    <button onClick={handleCheckout} className="checkout-button">
                        Finalizar Compra
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
