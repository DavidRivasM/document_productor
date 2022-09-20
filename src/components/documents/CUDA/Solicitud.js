import React, { Component } from 'react';
import ProductoSolicitud from '../../createdDocuments/CUDA/ProductoSolicitud';
import { PDFDownloadLink } from "@react-pdf/renderer";

class Solicitud extends Component {
    state = {
        consecutivo: '',
        apoderado: '',
        puesto: '',
        fecha: "",
        destinatario: '',
        solicitud: '',
        fechaSolicitud: '',
        postSubmitted: false,
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value,
        })
            ;
    }


    capturar = () => {
        if (this.state.apoderado === "Juan Bautista Molina Salas") {
            this.setState({
                cedApoderado: '2 0404 0003'
            })
            this.setState({
                puesto: ', Ecónomo de la Diócesis de Alajuela'
            })
        }

        else if (this.state.apoderado === "Enrique Gerardo Cortés Bolaños") {

            this.setState({
                cedApoderado: '4 0135 0761'
            })
            this.setState({
                puesto: ''
            })

        }

        else if (this.state.apoderado === "Carlos Céspedes Bolaños") {

            this.setState({
                cedApoderado: '2 0373 0812'
            })
            this.setState({
                puesto: ' ,Vicario general de la Diócesis de Alajuela'
            })

        }

        else {
            console.log("Ejecuta el ELSE")
        }

    }






    sunmitPost = (e) => {

        if (!this.state.consecutivo || !this.state.apoderado || !this.state.fecha || !this.state.destinatario || !this.state.solicitud || !this.state.fechaSolicitud) {
            alert('Todos los espacios son requeridos!');
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            })
            this.capturar();
        }

    }

    render(props) {
        return (
            <>
                {!this.state.postSubmitted ?
                    (
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Ingrese los datos</legend>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="01-2022" className="form-control" />
                                                </div>

                                                <select name="apoderado" onChange={this.onChange('apoderado')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione el apoderado</option>
                                                    <option value="Juan Bautista Molina Salas">Juan Bautista Molina Salas</option>
                                                    <option value="Enrique Gerardo Cortés Bolaños">Enrique Gerardo Cortés Bolaños</option>
                                                    <option value="Carlos Céspedes Bolaños">Carlos Céspedes Bolaños</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de creacion del documento</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="text" placeholder="12 de mayo del 2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el destinatario de la solicitud</i></span>
                                                    <input onChange={this.onChange('destinatario')} name="destinatario" type="text" placeholder="Municipalidad de Alajuela" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la solicitud</i></span>
                                                    <textarea onChange={this.onChange('solicitud')} className="form-control" name="solicitud" placeholder="exoneración de Bienes Inmuebles para TEMPORALIDADES DE LA  IGLESIA CATÓLICA DIÓCESIS DE ALAJUELA"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de gestion del acto a solicitar un cambio</i></span>
                                                    <input onChange={this.onChange('fechaSolicitud')} name="fechaSolicitud" type="text" placeholder="veintisiete días del mes de febrero del dos mil veinte" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-danger btn-lg">Validar información</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h5 >¡La información fue validada!</h5>
                            <PDFDownloadLink
                                document={<ProductoSolicitud consecutivo={this.state.consecutivo} apoderado={this.state.apoderado} puesto={this.state.puesto} cedApoderado={this.state.cedApoderado} solicitud={this.state.solicitud} fecha={this.state.fecha} destinatario={this.state.destinatario} fechaSolicitud={this.state.fechaSolicitud} />}
                                fileName={"CUDA-SOL-" + this.state.consecutivo}
                            >
                                <button type="button" className="btn btn-danger mb-1">Descargar documento</button>
                            </PDFDownloadLink>
                        </div>
                    )
                }
            </>
        );
    }
}

export default Solicitud;