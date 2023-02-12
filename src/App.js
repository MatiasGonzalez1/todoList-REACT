// import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <Logo/>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
      </div>
    </div>
  );
}

export default App;
