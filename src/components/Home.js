import React from 'react';
import universeBackground from './path-to-your-universe-image.jpg'; // Asegúrate de agregar una imagen de fondo

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${universeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Software Engineering Student</h1>
      <p className="text-lg md:text-2xl">Building creative and technical solutions</p>
    </section>
  );
};

export default Home;
