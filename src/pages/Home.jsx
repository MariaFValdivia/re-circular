import React from 'react';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center py-5" style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/1492815833/es/foto/ropa-teatral-vintage-en-camerino.jpg?s=612x612&w=0&k=20&c=4XeO85V1kBZapwQM6dZRcXJOvsI3bVb7ciaeXJ9gPz4=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#fff', 
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Dale nueva vida a la ropa</h1>
          <p className="lead">
            Todos los años millones de prendas terminan en vertederos. En Re-circular trabajamos para cambiar eso.
          </p>
        </div>
      </section>

      {/* Info Sections */}
      <div className="contenedor my-5">
        <div data-aos="fade-right" data-aos-duration="3000" id="containerImg" className="text-white p-4 rounded shadow-sm" style={{
          background: 'linear-gradient(to bottom, #B57F50, #805b3b)',
          textAlign: 'center'
        }}>
          <h2>Nuestra misión</h2>
          <p>
            Facilitar el acceso a la economía circular de la moda, reduciendo residuos textiles mediante el intercambio de ropa usada.
          </p>
        </div>
      </div>

      {/* Botón Catálogo */}
      <div className="text-center my-4">
        <a href="/productos" className="btn btn-success btn-lg px-5 py-3">
          ¡Revisa nuestro catálogo ahora!
        </a>
      </div>

      {/* Sección del equipo */}
      <AboutUs />
    </>
  );
};

export default Home;