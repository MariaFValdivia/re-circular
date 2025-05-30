import { useState, useEffect } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Agregar producto al carrito
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Eliminar producto por índice
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Calcular total
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.precio, 0);
  };

  return { cart, addToCart, removeFromCart, clearCart, getTotal };
};

export default useCart;