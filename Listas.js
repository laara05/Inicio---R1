import React, { useState } from 'react';
import './Listas.css'; 

const Listas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const manejarCambio = (e) => {
    setNuevaTarea(e.target.value);
  };
  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    const tarea = {
      id: Date.now(), 
      texto: nuevaTarea,
      completada: false,
    };
    setTareas([...tareas, tarea]);
    setNuevaTarea(''); 
  };

  const Completada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  return (
    <div className="lista">
      <h1>Lista de Tareas</h1>
      <div className="entrada">
        <input
          type="text"
          value={nuevaTarea}
          onChange={manejarCambio}
          placeholder="Agregar nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => Completada(tarea.id)}
            />
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listas;
