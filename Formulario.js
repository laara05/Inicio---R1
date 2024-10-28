import React, { useState } from 'react';
import './Formulario.css'; 

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    if (nombre.trim() === '') return;
    setMensaje(`¡Bienvenido, ${nombre}!`);
    setNombre(''); 
  };

  return (
    <div className="formulario">
      <h1>Formulario de Bienvenida</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nombre}
          onChange={manejarCambio}
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default Formulario;
