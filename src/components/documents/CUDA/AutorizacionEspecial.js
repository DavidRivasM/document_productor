import React, { Component } from 'react';
import ProductoAutorizacionEspecial from '../../createdDocuments/CUDA/ProductoAutorizacionEspecial';
import { PDFDownloadLink } from "@react-pdf/renderer";
;


class AutorizacionEspecial extends Component {
    state = {
        consecutivo: '',
        apoderado: '',
        puesto:'',
        cedApoderado: '',
        tomoApoderado: '',
        asientoApoderado: '',
        consecutivoApoderado: '',
        secuenciaApoderado: '',
        persona: '',
        cedula: '',
        institucion: '',
        detalleTramite: '',
        finTramite: '',
        parroquia: '',
        hora: '',
        fecha: "",
        ano: "",
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
                cedApoderado: 'dos cuatrocientos cuatro cero cero tres'
            })
            this.setState({
                puesto: ', Ecónomo de la Diócesis de Alajuela'
            })
            this.setState({
                tomoApoderado: 'DOS MIL DIECISÉS'
            })
            this.setState({
                asientoApoderado: "VEINTISÉIS MIL DOSCIENTOS SETENTA Y OCHO"
            })
            this.setState({
                consecutivoApoderado: "UNO"
            })
            this.setState({
                secuenciaApoderado: "DOS"
            })
        }

        else if (this.state.apoderado === "Enrique Gerardo Cortés Bolaños") {

            this.setState({
                cedApoderado: 'cuatro cero ciento treinta y cinco cero setecientos sesenta y uno'
            })
            this.setState({
                puesto: ''
            })
            this.setState({
                tomoApoderado: 'DOS MIL DIECIOCHO'
            })
            this.setState({
                asientoApoderado: "DOSCIENTOS DIECIOCHO MIL SETECIENTOS SETENTA Y DOS"
            })
            this.setState({
                consecutivoApoderado: "UNO"
            })
            this.setState({
                secuenciaApoderado: "DOS"
            })
        }

        else if (this.state.apoderado === "Carlos Céspedes Bolaños") {

            this.setState({
                cedApoderado: ' desconocido'
            })
            this.setState({
                puesto: ' ,Vicario general de la Diócesis de Alajuela'
            })
            this.setState({
                tomoApoderado: ' desconocido'
            })
            this.setState({
                asientoApoderado: "desconocido"
            })
            this.setState({
                consecutivoApoderado: "desconocido"
            })
            this.setState({
                secuenciaApoderado: "desconocido"
            })
        }

        else {
            console.log("Ejecuta el ELSE")
        }

    }






    sunmitPost = (e) => {

        if (!this.state.consecutivo || !this.state.apoderado || !this.state.persona || !this.state.cedula || !this.state.institucion || !this.state.detalleTramite || !this.state.finTramite || !this.state.parroquia || !this.state.hora || !this.state.fecha || !this.state.ano) {
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
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la persona que tendrá la autorización</i></span>
                                                    <input onChange={this.onChange('persona')} name="persona" type="text" placeholder="Marielos Rodriguez Aratola" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la cédula de la persona que tendrá la autorización</i></span>
                                                    <input onChange={this.onChange('cedula')} name="cedula" type="text" placeholder="UNO DOS DOS CUATRO CUARTO DOS UNO SEIS OCHO" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la institución donde se hará el trámite</i></span>
                                                    <textarea onChange={this.onChange('institucion')} className="form-control" name="institucion" placeholder="Municipalidad de Alajuela"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el detalle del trámite</i></span>
                                                    <input onChange={this.onChange('detalleTramite')} name="detalleTramite" type="text" placeholder="pago de luz" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el fin del trámite</i></span>
                                                    <textarea onChange={this.onChange('finTramite')} className="form-control" name="finTramite" placeholder="evitar el corte del servicio"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la parroquia que necesita el trámite</i></span>
                                                    <textarea onChange={this.onChange('parroquia')} className="form-control" name="parroquia" placeholder="Parroquia del Carmen" rows="7"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la hora</i></span>
                                                    <textarea onChange={this.onChange('hora')} className="form-control" name="hora" placeholder="trece horas"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha</i></span>
                                                    <textarea onChange={this.onChange('fecha')} className="form-control" name="fecha" placeholder="once de marzo"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el año</i></span>
                                                    <textarea onChange={this.onChange('ano')} className="form-control" name="ano" placeholder="2022"></textarea>
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
                                document={<ProductoAutorizacionEspecial consecutivo={this.state.consecutivo} apoderado={this.state.apoderado} puesto={this.state.puesto} cedApoderado={this.state.cedApoderado} tomoApoderado={this.state.tomoApoderado} asientoApoderado={this.state.asientoApoderado} consecutivoApoderado={this.state.consecutivoApoderado} secuenciaApoderado={this.state.secuenciaApoderado} persona={this.state.persona} cedula={this.state.cedula} institucion={this.state.institucion} detalleTramite={this.state.detalleTramite} finTramite={this.state.finTramite} parroquia={this.state.parroquia} hora={this.state.hora} fecha={this.state.fecha} ano={this.state.ano} />}
                                fileName={"CUDA-AESP-" + this.state.consecutivo}
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

export default AutorizacionEspecial;