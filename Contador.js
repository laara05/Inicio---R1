import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const aumentar = () => {
    setContador(contador + 1);
  };
  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador">
      <h1>{contador}</h1>
      <div className="botones">
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
      </div>
    </div>
  );
};

export default Contador;
