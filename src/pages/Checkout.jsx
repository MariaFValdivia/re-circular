import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Checkout = () => {
  const { cart, clearCart, getTotal } = useCart();
  const navigate = useNavigate();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    ciudad: '',
    region: '',
    codigoPostal: ''
  });

  const [errors, setErrors] = useState({});

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validación del correo
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un correo válido.';
    }
    if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es obligatoria.';
    if (!formData.ciudad.trim()) newErrors.ciudad = 'La ciudad es obligatoria.';
    if (!formData.region.trim()) newErrors.region = 'La región es obligatoria.';
    if (!formData.codigoPostal.trim()) newErrors.codigoPostal = 'El código postal es obligatorio.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simular proceso de pago
    alert('¡Compra realizada con éxito!');
    clearCart(); // Vaciar carrito
    navigate('/gracias'); // Redirigir a página de éxito
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Checkout</h1>

      {/* Resumen del carrito */}
      <section className="mb-4">
        <h2 className="mb-3">Resumen de tu compra</h2>
        {cart.length === 0 ? (
          <p className="text-center">Tu carrito está vacío.</p>
        ) : (
          cart.map((producto, index) => (
            <div key={index} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={producto.imagen}
                    alt={producto.titulo}
                    className="img-fluid rounded-start"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text">Talla: {producto.talla} - ${producto.precio.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="text-end fw-bold fs-5 mt-3">
          Total: ${getTotal().toLocaleString()}
        </div>
      </section>

      {/* Formulario de envío */}
      <section className="mb-4">
        <h2 className="mb-3">Detalles de envío</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="nombre" className="form-label">Nombre completo</label>
              <input
                type="text"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input
                type="text"
                className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
              />
              {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="ciudad" className="form-label">Ciudad</label>
              <input
                type="text"
                className={`form-control ${errors.ciudad ? 'is-invalid' : ''}`}
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
              />
              {errors.ciudad && <div className="invalid-feedback">{errors.ciudad}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="region" className="form-label">Región / Estado</label>
              <input
                type="text"
                className={`form-control ${errors.region ? 'is-invalid' : ''}`}
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
              />
              {errors.region && <div className="invalid-feedback">{errors.region}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="codigo-postal" className="form-label">Código postal</label>
              <input
                type="text"
                className={`form-control ${errors.codigoPostal ? 'is-invalid' : ''}`}
                id="codigo-postal"
                name="codigoPostal"
                value={formData.codigoPostal}
                onChange={handleChange}
              />
              {errors.codigoPostal && <div className="invalid-feedback">{errors.codigoPostal}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Confirmar compra</button>
        </form>
      </section>
    </div>
  );
};

export default Checkout;