import React from 'react';
import './formulario.css';

const Formulario = (props) => {
  return (
    <form className='formulario'>
      <input 
      className='form-input'
      type='text'
      placeholder='Escribe una tarea'
      name='texto'
      />
      <button className='form-boton'>Agregar tarea</button>
    </form>
    );
}

export default Formulario;