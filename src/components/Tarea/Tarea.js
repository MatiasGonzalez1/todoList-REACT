import React from 'react';
import './tarea.css';
import {MdDeleteOutline} from 'react-icons/md';

const Tarea = ({id, texto, completada, completarTarea, eliminarTarea}) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
      <div 
      className='tarea-texto'
      onClick={()=>completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'
      onClick={eliminarTarea(id)}
      >
        <MdDeleteOutline className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;