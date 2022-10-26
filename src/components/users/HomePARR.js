import React, { useState } from 'react';
import '../../styles/home.css';
import DelegacionMatrimonial from '../documents/PARR/DelegacionMatrimonial';
import ConstanciaPrimeraComunion from '../documents/PARR/ConstanciaPrimeraComunion';
import DeclaracionJuradaConfirmacion from '../documents/PARR/DeclaracionJuradaConfirmacion';
import ProclamaMatrimonial from '../documents/PARR/ProclamaMatrimonial';
import CartaNulidad from '../documents/PARR/CartaNulidad';
import CartaBuenasCostumbres from '../documents/PARR/CartaBuenasCostumbres';
import ListaChequeoDocumentosMatrimonio from '../documents/PARR/ListaChequeoDocumentosMatrimonio';
import PermisoBautizarOtraParroquia from '../documents/PARR/PermisoBautizarOtraParroquia';


const HomePARR = (props) => {
    const [documento1, setDocumento1] = useState("");
    const [documento2, setDocumento2] = useState("");
    const [documento3, setDocumento3] = useState("");
    const [documento4, setDocumento4] = useState("");
    const [documento5, setDocumento5] = useState("");
    const [documento6, setDocumento6] = useState("");
    const [documento7, setDocumento7] = useState("");
    const [documento8, setDocumento8] = useState("");



    return (
        <div className='homeParr'>
            <h3>Seleccione el documento Parroquial que quiere crear</h3>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Delegación matrimonial dentro de parroquia</h5>
                            <p className="card-text">Documento que realiza una parroquia con la finalidad delegar la celebración del acto sacramental de un matrimonio.</p>
                            {
                                documento1 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento1("Delegacion Matrimonial")}>
                                    Crear
                                </button> : <>
                                    <DelegacionMatrimonial />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento1("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Constancia de primera comunión</h5>
                            <p className="card-text">Documento elaborado por una parroquia en el que hace constar que una persona recibió el sacramento católico del Bautismo.</p>
                            {
                                documento2 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento2("Contancia Primera Comunion")}>
                                    Crear
                                </button> : <>
                                    <ConstanciaPrimeraComunion />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento2("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Declaración jurada de confirmación</h5>
                            <p className="card-text">Documento elaborado por una parroquia en la que se hace constar que una persona recibio el sacramento de confirmación.</p>
                            {
                                documento3 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento3("Declaracion jurada confirmacion")}>
                                    Crear
                                </button> : <>
                                    <DeclaracionJuradaConfirmacion />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento3("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Proclama matrimonial</h5>
                            <p className="card-text">Documento que elabora una parroquia para difundir el acto sacramental de un matrimonio a las personas en general.</p>
                            {
                                documento4 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento4("Proclama matromonial")}>
                                    Crear
                                </button> : <>
                                    <ProclamaMatrimonial />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento4("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Carta nulidad general</h5>
                            <p className="card-text">Documento que hace una solicitud para realizar un tramite de nulidad sobre un matrimonio en partiicular.</p>
                            {
                                documento5 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento5("Carta Nulidad")}>
                                    Crear
                                </button> : <>
                                    <CartaNulidad/>
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento5("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Carta buenas costumbres</h5>
                            <p className="card-text">Carta que emite un parroco a otro con el fin de hacer constar las buenas costumbres y modo de vida de un feligres.</p>
                            {
                                documento6 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento6("Carta Buenas Costumbres")}>
                                    Crear
                                </button> : <>
                                    <CartaBuenasCostumbres/>
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento6("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lista chequeo de documentos de un matrimonio</h5>
                            <p className="card-text">Lista con el fin de llevar un orden a la hora de enviar un expediente matrimonial a otra parroquia.</p>
                            {
                                documento7 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento7("Lista Chequeo Matrimonio")}>
                                    Crear
                                </button> : <>
                                    <ListaChequeoDocumentosMatrimonio/>
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento7("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Permiso para bautizar en otra parroquia</h5>
                            <p className="card-text">Permiso para poder bautizar a un nino en otra parroquia.</p>
                            {
                                documento8 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento8("Permiso Bautizar Otra Parroquia")}>
                                    Crear
                                </button> : <>
                                    <PermisoBautizarOtraParroquia/>
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento8("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default HomePARR;