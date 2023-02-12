// import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';
import Tarea from './components/Tarea/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <Logo/>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
