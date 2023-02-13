import React, {useState} from 'react';
import './listaDeTareas.css';
import Tarea from '../Tarea/Tarea';
import Formulario from '../Formulario/Formulario.js';

const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([]); 
  const agregarTarea = tarea =>{
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
    }
  }
  return (
    <>
    <Formulario onSubmit={agregarTarea}/>
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