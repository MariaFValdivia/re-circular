import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [productos, setProductos] = useState([]);

useEffect(() => {
  fetch('/products.json')
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log('Datos cargados:', data); // 👈 Añade esto para debug
      setProductos(data);
    })
    .catch(err => {
      console.error('Error al cargar productos:', err);
      alert('Hubo un error al cargar los productos.');
    });
}, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Nuestros productos</h2>
      <div className="row g-4">
        {productos.length > 0 ? (
          productos.map(producto => (
            <div className="col-md-4" key={producto.id}>
              <ProductCard producto={producto} />
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>Cargando productos...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;