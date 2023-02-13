import React, { useState } from 'react';
import './formulario.css';
//paquete para agregar identificador unico id
import {v4 as uuidv4} from 'uuid'; 

const Formulario = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  }

  const manejarEnvio = e =>{
    const time = new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      time: `${h}:${m}`,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

  return (
    <form className='formulario'
    onSubmit={manejarEnvio}
    >
      <input 
      className='form-input'
      type='text'
      placeholder='Escribe una tarea'
      name='texto'
      onChange={manejarCambio}
      />
      <button 
      className='form-boton'
      >Agregar tarea</button>
    </form>
    );
}

export default Formulario;