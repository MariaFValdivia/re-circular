import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ producto }) => {
  const { addToCart } = useCart(); 
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');

  const handleAgregarAlCarrito = () => {
    if (!tallaSeleccionada) {
      alert('Por favor selecciona una talla.');
      return;
    }

    const productoConTalla = {
      ...producto,
      talla: tallaSeleccionada
    };

    addToCart(productoConTalla);
    alert(`Producto "${producto.titulo}" agregado al carrito.`);
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={producto.imagen} alt={producto.titulo} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text text-muted">{producto.descripcion}</p>
        <p className="fw-bold fs-5 text-success">${producto.precio.toLocaleString()}</p>

        <div className="mb-3">
          <label htmlFor={`talla-${producto.id}`} className="form-label mb-1">Talla:</label>
          <select
            id={`talla-${producto.id}`}
            className="form-select"
            value={tallaSeleccionada}
            onChange={(e) => setTallaSeleccionada(e.target.value)}
          >
            <option value="">-- Selecciona --</option>
            {producto.tallasDisponibles.map(talla => (
              <option key={talla} value={talla}>{talla}</option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-primary mt-auto"
          onClick={handleAgregarAlCarrito}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;