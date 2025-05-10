import React, { useState, useEffect } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Simulating fetching from localStorage (you'll enhance later)
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}
