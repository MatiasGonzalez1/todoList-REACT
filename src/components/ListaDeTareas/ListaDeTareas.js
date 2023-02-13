import React, {useState} from 'react';
import './listaDeTareas.css';
import Tarea from '../Tarea/Tarea';
import Formulario from '../Formulario/Formulario.js';

const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([]); 
  const agregarTarea = tarea =>{
    console.log('Tarea agregada');
    console.log(tarea);
  }
  return (
    <>
    <Formulario/>
    <div className='lista-contenedor'>
      {
        tareas.map((tarea) =>
          <Tarea
            texto={tarea.texto}
            completada={tarea.completada}
            />
        )
      }
    </div>
      </>
  )
}

export default ListaDeTareas;