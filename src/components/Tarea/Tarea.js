import React from 'react';
import './tarea.css';
import {MdDeleteOutline} from 'react-icons/md';

const Tarea = ({texto}) => {
  return (
    <div className='tarea-contenedor'>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-icono'>
        <MdDeleteOutline/>
      </div>
    </div>
  );
}

export default Tarea;