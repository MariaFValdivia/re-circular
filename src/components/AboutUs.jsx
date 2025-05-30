// src/pages/AboutUs.jsx
import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Soledad Castillo",
      role: "¡Nuestra fundadora!",
      bio: "Hola soy Soledad o Sole como me dicen todos. Siempre fui aficionada a la moda, sin embargo, me di cuenta de que todos los días la moda va cambiando y se empezó a convertir más en un negocio que una forma de expresión. Por eso decidí empezar este hermoso proyecto en el que podemos combatirlo y así cuidar el medio ambiente.",
      image: "https://us.123rf.com/450wm/dmitryag/dmitryag2210/dmitryag221000755/192678802-mujer-sonriendo-mientras-mira-la-cámara-y-acerca-sus-manos-a-la-cámara-de-cerca-en-la-naturaleza-con.jpg?ver=6"
    },
    {
      name: "Claudio Castillo",
      role: "Co-fundador",
      bio: "Soy el encargado de la logística de producción. Mi hermana Soledad me inculcó todo lo que es la economía circular de la ropa y me encantó, así que decidí apoyarla en este proyecto.",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8yNx8xcHBlcmNhZGlzdGElMjBmb3RvLWlkfGVufDB8fHwxfDE3MTc3NTE1Njl8MA&auto=format&fit=crop&w=300&q=60"
    },
    {
      name: "Sofía Grey",
      role: "Redes sociales",
      bio: "Soy una amante del medioambiente. Dirijo la parte de las redes sociales de Re-circular ;)",
      image: "https://media.istockphoto.com/id/1490133896/es/foto/joven-empresaria-sonriente-usando-un-tel%C3%A9fono-celular-mientras-trabaja-en-una-computadora.jpg?s=612x612&w=0&k=20&c=sQesDN_3fa2l-9pQ_6yKVNBTDSqO9kcP8opT_IQKL7A="
    },
    {
      name: "Lucas Troncoso",
      role: "Preparación ecológica",
      bio: "La economía circular es la que nos va a ayudar para que no sigamos maltratando a nuestro planeta. Y eso tiene que ir de la mano de que sea sustentable, es por eso que yo me dedico a preparar las prendas con impacto mínimo medioambiental para que lleguen a tu casa sin problemas.",
      image: "https://upplasencia.es/img-2/te-pueden-multar-con-una-foto-de-un-particular_101.webp"
    }
  ];

  return (
    <section className="sobreNosotros py-5 text-center text-md-start">
      <div className="container">
        <h2 className="text-center mb-4">Nuestro Equipo</h2>
        <p className="text-center mb-5">
          Somos un grupo de cuatro personas que nos unimos bajo la misma iniciativa:
          incentivar el consumo responsable de ropa de segunda mano para cuidar el planeta.
        </p>

        <div className="contenedorCardsNosotros w-100">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;