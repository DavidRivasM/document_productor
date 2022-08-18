import React, { useState } from 'react';
import '../styles/home.css';
import AutorizacionEspecial from './AutorizacionEspecial';

const HomeCuda = (props) => {
    const [documento, setDocumento] = useState("");

    return (

        <div className='homeCuda'>
            <h3>Seleccione el documento de Secretaria de Curia que quiere crear</h3>

            {
                (() => {
                    if (props.usuario === 'CUDA') {
                        return (
                            <>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Autorizacion especial</h5>
                                                <p className="card-text">Documento que se realiza con el fin de brindar permisos legales para que una persona pueda realizar algun tramite administrativo en nombre de la Diocesis de Alajuela.</p>
                                                {
                                                    documento === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento("Autorizacion especial")}>
                                                        Crear
                                                    </button> : <>
                                                    
                                                    <AutorizacionEspecial/> 
                                                    <button  type="button" class="btn btn-danger" onClick={() => setDocumento("")} >Volver</button>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Carta de Nulidad</h5>
                                                <p className="card-text">DOCUMENTO EN PROCESO DE CONSTRUCCION</p>
                                                <button type="button" className="btn btn-danger">
                                                        Crear
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )
                    } else if (props.usuario === 'Nothing') {
                        return (
                            <p>Hello</p>
                        )
                    } else {
                        return (
                            <p>Bye</p>
                        )
                    }
                })()
            }




        </div>




    )
}

export default HomeCuda;