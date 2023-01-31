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
import PortadaEnvioDocumentos from '../documents/PARR/PortadaEnvioDocumentos';
import SolicitudTalonarioMatrimonio from '../documents/PARR/SolicitudTalonarioMatrimonio';
import PermisoConfirmacionCatequesis from '../documents/PARR/PermisoConfirmacionCatequesis';
import CartaCelebrarMatrimonio from '../documents/PARR/CartaCelebrarMatrimonio';
import PermisoCatequesisPrematrimonial from '../documents/PARR/PermisoCatequesisPrematrimonial';
import BoletaInscripcionCatequesisBautismal from '../documents/PARR/BoletaInscripcionCatequesisBautismal';
import ListaRemision from '../documents/PARR/ListaRemision';



const HomePARR = (props) => {
    const [documento1, setDocumento1] = useState("");
    const [documento2, setDocumento2] = useState("");
    const [documento3, setDocumento3] = useState("");
    const [documento4, setDocumento4] = useState("");
    const [documento5, setDocumento5] = useState("");
    const [documento6, setDocumento6] = useState("");
    const [documento7, setDocumento7] = useState("");
    const [documento8, setDocumento8] = useState("");
    const [documento9, setDocumento9] = useState("");
    const [documento10, setDocumento10] = useState("");
    const [documento11, setDocumento11] = useState("");
    const [documento12, setDocumento12] = useState("");
    const [documento13, setDocumento13] = useState("");
    const [documento14, setDocumento14] = useState("");
    const [documento15, setDocumento15] = useState("");


    return (
        <div className='homeParr'>
            <h3>Seleccione el documento Parroquial que quiere crear</h3>

            <div className="row">

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lista chequeo de documentos de un matrimonio (FORM.PA.04)</h5>
                            <p className="card-text">Documento que lista los documentos a presentar dentro de la gestión de un matrimonio con el fin de llevar un orden a la hora de enviar un expediente matrimonial a otra parroquia.</p>
                            {
                                documento7 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento7("Lista Chequeo Matrimonio")}>
                                    Crear
                                </button> : <>
                                    <ListaChequeoDocumentosMatrimonio />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento7("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Portada de envio de documentos al Tribunal Eclesiástico (FORM.PA.05)</h5>
                            <p className="card-text">Documento que sirve como portada para el envio de documentos al Tribunal Eclesiástico sobre algún caso en particular.</p>
                            {
                                documento9 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento9("Portada envio documentos")}>
                                    Crear
                                </button> : <>
                                    <PortadaEnvioDocumentos />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento9("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Declaración jurada de la Confirmación (FORM.PA.10)</h5>
                            <p className="card-text">Documento elaborado por una parroquia en la que se hace constar que la persona solicitante recibió el sacramento de la Confirmación.</p>
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
                            <h5 className="card-title">Permiso para bautizar en otra parroquia (FORM.PA.13)</h5>
                            <p className="card-text">Documento que se elabora para delegar el acto sacramental del Bautismo a un sacerdote en particular.</p>
                            {
                                documento8 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento8("Permiso Bautizar Otra Parroquia")}>
                                    Crear
                                </button> : <>
                                    <PermisoBautizarOtraParroquia />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento8("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Permiso para matricula de catequesis/confirmacion en otra parroquia (FORM.PA.14)</h5>
                            <p className="card-text">Documento en el que un sacerdote autoriza a una persona para realizar la catequesis o la confirmación en otra parroquia.</p>
                            {
                                documento11 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento11("Permiso matricula catequesis")}>
                                    Crear
                                </button> : <>
                                    <PermisoConfirmacionCatequesis />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento11("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Permiso Catequesis prematrimonial (FORM.PA.15)</h5>
                            <p className="card-text">Documento en el que un sacerdote autoriza a una pareja futura a casarse para la gestión de la Catequesis prematrimonial en una parroquia determinada.</p>
                            {
                                documento13 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento13("Permiso Catequesis Prematrimonial")}>
                                    Crear
                                </button> : <>
                                    <PermisoCatequesisPrematrimonial />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento13("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Carta para celebrar matrimonio (FORM.PA.16)</h5>
                            <p className="card-text">Documento en el que un sacerdote solicita a otro presenciar un matrimonio en concordancia con las disposiciones establecidas en el Código Canónico.</p>
                            {
                                documento12 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento12("Carta celebracion matrimonio")}>
                                    Crear
                                </button> : <>
                                    <CartaCelebrarMatrimonio />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento12("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Delegación matrimonial (FORM.PA.17)</h5>
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
                            <h5 className="card-title">Carta nulidad general (FORM.PA.19)</h5>
                            <p className="card-text">Documento en el que un sacerdote hace la solicitud al Vicario Judicial para iniciar un trámite de nulidad sobre un matrimonio en particular.</p>
                            {
                                documento5 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento5("Carta Nulidad")}>
                                    Crear
                                </button> : <>
                                    <CartaNulidad />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento5("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Solicitud Talonario de Matrimonios (FORM.PA.20)</h5>
                            <p className="card-text">Documento que se envia al Registro Civil para solicitar un block de Certificados de Inscripción de Matrimonio Católico.</p>
                            {
                                documento10 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento10("Solicitud Talonario de Matrimonio")}>
                                    Crear
                                </button> : <>
                                    <SolicitudTalonarioMatrimonio />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento10("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Carta buenas costumbres (FORM.PA.21)</h5>
                            <p className="card-text">Carta que emite un sacerdote a otro con el fín de hacer constar las buenas costumbres y modo de vida de un feligrés.</p>
                            {
                                documento6 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento6("Carta Buenas Costumbres")}>
                                    Crear
                                </button> : <>
                                    <CartaBuenasCostumbres />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento6("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Boleta de inscripción a Catequesis bautismal (FORM.PA.22)</h5>
                            <p className="card-text">Documento mediante el cual una persona solicita su inscripción a una Catequesis bautismal.</p>
                            {
                                documento14 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento14("Boleta inscripcion catequesis bautismal")}>
                                    Crear
                                </button> : <>
                                    <BoletaInscripcionCatequesisBautismal />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento14("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lista de remisión (FORM.ADA.01)</h5>
                            <p className="card-text">Documento que contiene el detalle de los documentos que se transferirán al Archivo Diocesano.</p>
                            {
                                documento15 === "" ? <button type="button" className="btn btn-danger" onClick={() => setDocumento15("Lista de remision")}>
                                    Crear
                                </button> : <>
                                    <ListaRemision />
                                    <button type="button" className="btn btn-danger" onClick={() => setDocumento15("")} >Volver</button>
                                </>
                            }
                        </div>
                    </div>
                </div>

                {/* <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Constancia de primera comunión</h5>
                            <p className="card-text">Documento elaborado por una parroquia en el que hace constar que una persona recibió el sacramento católico de la primera comunión.</p>
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
                </div> */}
                


                {/* <div className="col-sm-6">
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
                </div> */}

               

               




               
                

               

                

               
               


            </div>
        </div>
    )
}

export default HomePARR;