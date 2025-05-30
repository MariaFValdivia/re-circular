import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="container text-center my-5">
      <div className="success-icon mb-4" style={{
        fontSize: '6rem',
        color: '#28a745'
      }}>
        ✅
      </div>

      <h1 className="mb-4">¡Compra realizada con éxito!</h1>
      <p className="lead mb-4">
        Gracias por tu compra en <strong>Re-circular</strong>. Estamos trabajando para enviar tus productos lo antes posible.
      </p>

      <div className="alert alert-success" role="alert">
        <strong>Correo de confirmación:</strong> Hemos enviado los detalles a tu correo electrónico.
      </div>

      <Link to="/" className="btn btn-primary btn-lg">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Success;