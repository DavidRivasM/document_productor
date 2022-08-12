import React, { useState } from 'react';
import Home from './components/HomeParr';
import HomeCuda from './components/HomeCuda';
import LogoArchivo from './images/LogoArchivo.png'

import './styles/App.css';

function App() {

  const [value, setValue] = useState("");

  return (
    <div className="container-fluid">
      <div className='App'>
        <div className='row'>
          <div className='top'>
            <h1 className='align-middle m-2 text-center'>Sistema de Produccion de Documentos Diocesis de Alajuela - SIPDDA</h1>

<a  href="https://archivoda.org/" target="_blank" rel="noopener noreferrer"><img className='topImage' src={LogoArchivo} alt="Logo"/></a>

            
          </div>
        </div>

       

        <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">Usuario actual</span>
          </div>
          <input class="placeholder-glow" placeholder="Escriba aqui..." value={value} onChange={e => setValue(e.target.value)} />
          <div className="input-group-append">
            <button type="button" class="btn btn-danger" onClick={() => setValue("")}>Eliminar</button>
          </div>
        </div>

    




        {
          (() => {
            if (value === "") {
              return (
                <>
                  <p>Ingrese su codigo de usuario.</p>
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
                <p>Usuario no coincide con ningun departameto diocesano</p>
              )
            }
          })()
        }


      </div>

    </div>
  );
}

export default App;
