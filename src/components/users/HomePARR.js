import React, { useState } from 'react';
import '../../styles/home.css';
import DelegacionMatrimonial from '../documents/PARR/DelegacionMatrimonial';

const HomePARR = (props) => {
    const [documento, setDocumento] = useState("");

    return (
        <div className='homeParr'>
            <h3>Seleccione el documento Parroquial que quiere crear</h3>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Delegación matrimonial</h5>
                            <p className="card-text">Documento que realiza una parroquia con otra parroquia como destinatario que tiene como finalidad delegar la celebración del acto sacramental de un matrimonio.</p>
                            {
                                documento === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento("Delegacion Matrimonial")}>
                                    Crear
                                </button> : <>

                                    <DelegacionMatrimonial />
                                    <button type="button" class="btn btn-danger" onClick={() => setDocumento("")} >Volver</button>
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
        </div>
    )
}

export default HomePARR;