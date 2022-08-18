import React, { useState } from 'react';
import Home from './components/HomeParr';
import HomeCuda from './components/HomeCuda';

import archivo from './images/archivo.png'
import whatsapp from './images/whatsapp.png'
import gmail from './images/gmail.png'
import telefono from './images/telefono.png'

import './styles/App.css';

function App() {

  const [value, setValue] = useState("");

  return (
    <div className="container-fluid">
      <div className='App'>
        <div className='row'>
          <div className='top'>
            <h1 className='align-middle m-2 text-center'>Sistema de Produccion de Documentos Diocesis de Alajuela - SIPDDA</h1>
            <a href="https://archivoda.org/" target="_blank" rel="noopener noreferrer"><img className='topImage' src={archivo} alt="Logo" /></a>
          </div>
        </div>

        <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">Usuario actual</span>
          </div>
          <input className="placeholder-glow" placeholder="Escriba aqui..." value={value} onChange={e => setValue(e.target.value)} />
          <div className="input-group-append">
            <button type="button" className="btn btn-danger" onClick={() => setValue("")}>Eliminar</button>
          </div>
        </div>



      <div className='row p-4'>
        {
          (() => {
            if (value === "") {
              return (
                <>
                  <p className='empty'>Ingrese su codigo de usuario.</p>
                </>
              )
            } else if (value === "PA") {
              return (
                <Home usuario={value} />
              )
            }
            else if (value === "CUDA") {
              return (
                <HomeCuda usuario={value} />
              )
            }

            else {
              return (
                <p className='empty'>Usuario no coincide con ningun departamento diocesano</p>
              )
            }
          })()
        }
        </div>

        <div className='row'>
          <div className='footer'>
            <p style={{
             marginBottom:'-1px'
            }} className="text-center">Copyright © 2022. Diseñado & Desarrollado por el Equipo de trabajo del Archivo de la Diocesis de Alajuela. Contactenos por whatsapp: <img className='rounded' src={whatsapp} alt="Logo" style={{
              width: "10px",
              height: "10px",
              padding: "1px"
            }} />6106 0262; al correo eletronico: <img className='rounded' src={gmail} alt="Logo" style={{
              width: "10px",
              height: "10px",
              padding: "1px"
            }} />archivocuriaalajuela@hotmail.com o al telefono: <img className='rounded' src={telefono} alt="Logo" style={{
              width: "10px",
              height: "10px",
              padding: "1px"
            }} />2433 6005 Ext. 144</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
