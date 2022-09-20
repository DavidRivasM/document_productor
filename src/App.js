import React, { useState } from 'react';
import HomeParr from './components/users/HomePARR';
import HomeCuda from './components/users/HomeCUDA';

import archivo from './images/archivo.png'
import whatsapp from './images/whatsapp.png'
import gmail from './images/gmail.png'
import telefono from './images/telefono.png'

import './styles/App.css';

function App() {

  const [value, setValue] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [usuario, setUsuario] = useState("");

  return (
    <div className="container-fluid">
      <div className='App'>
        <div className='row'>
          <div className='top'>
            <h1 className='align-middle m-2 text-center'>Sistema de Producción de Documentos de la Diocesis de Alajuela - SIPDDA</h1>
            <a href="https://archivoda.org/" target="_blank" rel="noopener noreferrer"><img className='topImage' src={archivo} alt="Logo" /></a>
          </div>
        </div>

        <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text m-1" id="">Inicie sesión</span>
          </div>
          <input className="placeholder-glow m-1" placeholder="Escriba su usuario" value={value} onChange={e => setValue(e.target.value)} />
          <input className="placeholder-glow m-1" type="password" placeholder="Escriba su constraseña" value={contrasena} onChange={e => setContrasena(e.target.value)} />
          <div className="input-group-append">
            <button type="button" className="btn btn-danger m-1 rounded" onClick={() => setUsuario(value+contrasena)}>Iniciar</button>
            <button type="button" className="btn btn-danger m-1 rounded" onClick={() => setValue("") || setContrasena("") || setUsuario("")}>Salir</button>
          </div>
        </div>

        <div className='row p-4'>
          {
            (() => {
              if (usuario === "") {
                return (
                  <>
                    <p className='empty'>Ingrese sus datos de usuario.</p>
                  </>
                )
              } else if (usuario === "PAPA") {
                return (
                  <HomeParr usuario={usuario} />
                )
              }
              else if (usuario === "CUDACUDA") {
                return (
                  <HomeCuda usuario={usuario} />
                )
              }
              else {
                return (
                  <p className='empty'>Datos no coinciden con ningún usuario.</p>
                )
              }
            })()
          }
        </div>

        <div className='row'>
          <div className='footer'>
            <p style={{
              marginBottom: '-1px'
            }} className="text-center">Copyright © 2022. Diseñado & Desarrollado por el Equipo de trabajo del Archivo de la Diocesis de Alajuela. Contáctenos por whatsapp: <img className='rounded' src={whatsapp} alt="Logo" style={{
              width: "15px",
              height: "15px",
              padding: "1px"
            }} />6106 0262; al correo eletrónico: <img className='rounded' src={gmail} alt="Logo" style={{
              width: "15px",
              height: "15px",
              padding: "1px"
            }} />archivocuriaalajuela@hotmail.com o al teléfono: <img className='rounded' src={telefono} alt="Logo" style={{
              width: "15px",
              height: "15px",
              padding: "1px"
            }} />2433 6005 Ext. 144</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
