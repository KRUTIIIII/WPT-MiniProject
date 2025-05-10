import React, { useState, useEffect } from 'react';
import ProductCard from '../components/productCard';

const dummyProducts = [
  { id: 1, name: 'Assorted Christmas Cookies', price: 550, image: '/Assorted Christmas Cookies.png' }, 
  { id: 2, name: 'Eggless Chocolate Cookie', price: 250, image: '/Eggless Cookie.png' },
  { id: 3, name: 'Assorted Peanut Cookies', price: 200, image: '/Assorted Peanut Cookies.png'},
  { id: 4, name: 'Chewy Charlies Cookies', price: 600, image: '/Chewy Charlies Cookies.png'},
  { id: 5, name: 'Delicious Chocochip Cookies', price: 250, image: '/Delicious Chocochip Cookies.png'},
  { id: 6, name: 'Dark Chocolate Cookies', price: 250, image: '/Dark Chocolate Cookies.png'},
  { id: 7, name: 'Red Jam Filled Cookies', price: 250, image: '/Jam Filled Cookies.png'},
  { id: 8, name: 'Dutch-Truffle Pastry', price: 250, image: '/Dutch Truffle Pastry.png'},
  { id: 9, name: 'Choco-Vanilla Oreo Pastry', price: 250, image: '/Choco-Vanilla Oreo Pastry.png' },
  { id: 10, name: 'Chocoholic yummy Pastry', price: 250, image: '/Chocoholic Pastry.png' },
  { id: 11, name: 'Assorted Eggless BrownieBox', price: 250, image: '/Assorted Eggless BrownieBox.png' },
  { id: 12, name: 'Eggless Millionaire Brownie', price: 120, image: '/Eggless Millionaire Brownie.png' },
  { id: 13, name: 'Nutella Millionaire Brownie', price: 250, image: '/Nutella Brownie.png' },
  { id: 14, name: 'Outrageous Chocolate Brownie', price: 250, image: '/Outrageous Chocolate Brownie.png' },
  { id: 14, name: 'Mango & Baked Yogurt Cup', price: 250, image: '/Mango & Baked Yogurt Cup.png' },
  { id: 14, name: 'Mango Bento Cheesecake', price: 250, image: '/Mango Bento Cheesecake.png' },
  { id: 14, name: 'Delicious Alphonso Mango Tart', price: 250, image: '/Mango Tart.png' },
  { id: 14, name: 'Alphonso Mango Trifle Pudding', price: 250, image: '/Mango Trifle Pudding.png' },
  

];

export default function Menu() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="product-list">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
