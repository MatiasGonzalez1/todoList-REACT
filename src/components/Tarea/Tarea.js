import React from 'react';
import './tarea.css';
import {MdDeleteOutline} from 'react-icons/md';

const Tarea = ({texto, completada}) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <MdDeleteOutline className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;