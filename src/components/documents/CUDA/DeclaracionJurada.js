import React, { Component } from 'react';
import ProductoDeclaracionJurada from '../../createdDocuments/CUDA/ProductoDeclaracionJurada';
import { PDFDownloadLink } from "@react-pdf/renderer";
;


class DeclaracionJurada extends Component {
    state = {
        fecha:'',
        consecutivo: '',
        apoderado: '',
        domicilio: '',
        direccion: '',
        cedula: '',
        puesto:'',
        contenido: '',
        lugarFirma: '',
        horaFirma: '',
        fechaFirma: '',

        postSubmitted: false,
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value,
        })
            ;
            console.log(this.state.puesto)
    }


    capturar = () => {
        if (this.state.apoderado === "Juan Bautista Molina Salas") {
            this.setState({
                puesto: 'Apoderado Generalísimo'
            })
            this.setState({
                cedula: '2 0404 0003'
            })
        }
        else if (this.state.apoderado === "Carlos Céspedes Bolaños") {
            this.setState({
                puesto: 'Vicario General'
            })
            this.setState({
                cedula: '2 0373 0812'
            })
        }
        else if (this.state.apoderado === "Enrique Gerardo Cortés Bolaños") {
            this.setState({
                puesto: 'Apoderado Generalísimo'
            })
            this.setState({
                cedula: '4 0135 0761'
            })
        }
        else {
            console.log("Ejecuta el ELSE")
        }
    }

    sunmitPost = (e) => {

        if (!this.state.consecutivo || !this.state.fecha || !this.state.apoderado || !this.state.domicilio || !this.state.direccion || !this.state.contenido || !this.state.lugarFirma || !this.state.horaFirma || !this.state.fechaFirma) {
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
                                                    <option value="Carlos Céspedes Bolaños">Carlos Céspedes Bolaños</option>
                                                    <option value="Enrique Gerardo Cortés Bolaños">Enrique Gerardo Cortés Bolaños</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de creacion del documento</i></span>
                                                    <textarea onChange={this.onChange('fecha')} className="form-control" name="fecha" placeholder="once de marzo"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el domicilio del apoderado</i></span>
                                                    <textarea onChange={this.onChange('domicilio')} className="form-control" name="domicilio" placeholder="la Garita, Central Alajuela"></textarea>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la direccion del domicilio</i></span>
                                                    <textarea onChange={this.onChange('direccion')} className="form-control" name="direccion" placeholder="1km oeste del Zoo Ave Dulce Nombre"></textarea>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el contenido de la declaracion</i></span>
                                                    <textarea onChange={this.onChange('contenido')} className="form-control" name="contenido" placeholder="NO POSEO ningún tipo de Sanción ETICA, ADMINISTRATIVA O JUDICIAL"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar en que se firma el documento</i></span>
                                                    <textarea onChange={this.onChange('lugarFirma')} className="form-control" name="lugarFirma" placeholder="Dulce Nombre"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la hora en la que se firma el documento</i></span>
                                                    <textarea onChange={this.onChange('horaFirma')} className="form-control" name="horaFirma" placeholder="trece"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha en la que se firma el documento</i></span>
                                                    <textarea onChange={this.onChange('fechaFirma')} className="form-control" name="fechaFirma" placeholder="primero de marzo del 2021"></textarea>
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
                                document={<ProductoDeclaracionJurada fecha={this.state.fecha} consecutivo={this.state.consecutivo} apoderado={this.state.apoderado} domicilio={this.state.domicilio} direccion={this.state.direccion} cedula={this.state.cedula} puesto={this.state.puesto} contenido={this.state.contenido} lugarFirma={this.state.lugarFirma} horaFirma={this.state.horaFirma} fechaFirma={this.state.fechaFirma} />}
                                fileName={"CUDA-DECLJR-" + this.state.consecutivo}
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

export default DeclaracionJurada;