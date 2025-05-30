import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productosData from '../public/productos.json';

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(productosData);
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
