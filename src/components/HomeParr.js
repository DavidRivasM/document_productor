import React, { useState } from 'react';
import '../styles/home.css';
import DelegacionMatrimonial from './DelegacionMatrimonial';


const HomeParr = (props) => {
    const [documento, setDocumento] = useState("");

    return (

        <div className='homeParr'>
            <h3>Seleccione el documento Parroquial que quiere crear</h3>

            {
                (() => {
                    if (props.usuario === 'PA') {
                        return (
                            <>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Delegacion Matrimonial</h5>
                                                <p className="card-text">Documento que se realiza para iniciar con el proceso de matrimonio por parte de la iglesia catolica.</p>
                                                {
                                                    documento === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento("Delegacion Matrimonial")}>
                                                        Crear
                                                    </button> : <>
                                                    
                                                    <DelegacionMatrimonial/> 
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
                            <p>Nothing</p>
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

export default HomeParr;