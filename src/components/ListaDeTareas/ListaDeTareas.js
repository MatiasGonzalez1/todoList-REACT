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
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea=> tarea.id !== id);
    setTareas(tareasActualizadas);
  }
  return (
    <>
    <Formulario onSubmit={agregarTarea}/>
    <div className='lista-contenedor'>
      {
        tareas.map((tarea) =>
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            />
        )
      }
    </div>
      </>
  )
}

export default ListaDeTareas;