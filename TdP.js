import React from 'react';
import PropTypes from 'prop-types';
import './TdP.css'; 

const TdP = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={`${nombre} ${apellido}`} className="imagen" />
      <div className="info">
        <h1>{nombre} {apellido}</h1>
        <p>{profesion}</p>
      </div>
    </div>
  );
};


TdP.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  profesion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default TdP;
