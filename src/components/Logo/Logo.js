import React from 'react';
import logo from '../../img/unnamed.png';
import './logo.css';
const Logo = () => {
  return (
    <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='Logo' />
      </div>
  )
}

export default Logo