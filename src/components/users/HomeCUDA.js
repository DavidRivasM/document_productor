import React, { useState } from 'react';
import '../../styles/home.css';
import AutorizacionEspecial from '../documents/CUDA/AutorizacionEspecial';
import DeclaracionJurada from '../documents/CUDA/DeclaracionJurada';
import Solicitud from '../documents/CUDA/Solicitud';
import PoderEspecial from '../documents/CUDA/PoderEspecial';

const HomeCUDA = (props) => {
    const [documento1, setDocumento1] = useState("");
    const [documento2, setDocumento2] = useState("");
    const [documento3, setDocumento3] = useState("");
    const [documento4, setDocumento4] = useState("");


    return (
        <div className='homeCuda'>
            <h3>Seleccione el documento de Secretaria de Curia que quiere crear</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Autorización especial</h5>
                            <p className="card-text">Documento que se realiza con el fin de brindar permisos legales para que una persona pueda realizar algún tramite administrativo en nombre de la Diócesis de Alajuela.</p>
                            {
                                documento1 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento1("Autorizacion especial")}>
                                    Crear
                                </button> : <>
                                    <AutorizacionEspecial />
                                    <button type="button" class="btn btn-danger" onClick={() => setDocumento1("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Declaración Jurada</h5>
                            <p className="card-text">Documento que realiza un presbitero bajo fé de juramento sobre un asunto de competencia diocesana en particular.</p>
                            {
                                documento2 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento2("Declaracion jurada")}>
                                    Crear
                                </button> : <>
                                    <DeclaracionJurada />
                                    <button type="button" class="btn btn-danger" onClick={() => setDocumento2("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Solicitud</h5>
                            <p className="card-text">Documento que se realiza un presbitero para solicitar algun tramite, servicio o producto a una insitutucion o persona en particular.</p>
                            {
                                documento3 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento3("Solicitud")}>
                                    Crear
                                </button> : <>
                                    <Solicitud />
                                    <button type="button" class="btn btn-danger" onClick={() => setDocumento3("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Poder Especial</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            {
                                documento4 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento4("Solicitud")}>
                                    Crear
                                </button> : <>
                                    <PoderEspecial />
                                    <button type="button" class="btn btn-danger" onClick={() => setDocumento4("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCUDA;