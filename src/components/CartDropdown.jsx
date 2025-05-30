import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

const CartDropdown = () => {
  const { cart, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div className="dropdown d-none d-lg-inline-block">
      <button
        className="btn btn-light dropdown-toggle carrito-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-basket"></i> Carrito{' '}
        <span className="objetos">{cart.length}</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end carrito-dropdown">
        {cart.length === 0 ? (
          <li><p className="dropdown-item-text text-center">El carrito está vacío.</p></li>
        ) : (
          <>
            {cart.map((producto, index) => (
              <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{producto.titulo}</strong><br />
                  Talla: {producto.talla} - ${producto.precio.toLocaleString()}
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  &times;
                </button>
              </li>
            ))}

            <li className="dropdown-item-text text-end fw-bold">
              Total: ${getTotal().toLocaleString()}
            </li>

            <li className="dropdown-item text-center">
              <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
                Vaciar carrito
              </button>
            </li>

            <li className="dropdown-item text-center">
              <Link to="/compra" className="btn btn-success w-100">
                Ir al carrito
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CartDropdown;