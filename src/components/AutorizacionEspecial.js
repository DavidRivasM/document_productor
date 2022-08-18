import React, { Component } from 'react';
import ProductoAE from './createdDocuments/ProductoAE';
import { PDFDownloadLink } from "@react-pdf/renderer";
;


class AutorizacionEspecial extends Component {
    state = {
        consecutivo: '',
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


    sunmitPost = (e) => {

        if (!this.state.consecutivo || !this.state.persona || !this.state.cedula || !this.state.institucion || !this.state.detalleTramite || !this.state.finTramite || !this.state.parroquia || !this.state.hora || !this.state.fecha || !this.state.ano) {
            alert('Todos los espacios son requeridos!');
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            })
           
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
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese el consecutivo<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="01-2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese el nombre de la persona<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('persona')} name="persona" type="text" placeholder="Marielos Rodriguez Aratola" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese la cedula de la persona<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('cedula')} name="cedula" type="text" placeholder="UNO DOS DOS CUATRO CUARTO DOS UNO SEIS OCHO" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese la institucion donde se hara el tramite<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('institucion')} className="form-control" name="institucion" placeholder="Municipalidad de Alajuela"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese el detalle del tramite<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('detalleTramite')} name="detalleTramite" type="text" placeholder="pago de luz" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese el fin del tramite<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('finTramite')} className="form-control" name="finTramite" placeholder="evitar el corte del servicio"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese el nombre de la parroquia<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('parroquia')} className="form-control" name="parroquia" placeholder="Parroquia del Carmen" rows="7"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese la hora<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('hora')} className="form-control" name="hora" placeholder="diez"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center">Ingrese la fecha<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('fecha')} className="form-control" name="fecha" placeholder="once de marzo"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col text-center">Ingrese el año<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('ano')} className="form-control" name="ano" placeholder="2022"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-danger btn-lg">Validar informacion</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                   
                    ) : (
                        <div>


                            <h5 >La informacion fue validada!</h5>

                            <PDFDownloadLink
                                document={<ProductoAE consecutivo={this.state.consecutivo} persona={this.state.persona} cedula={this.state.cedula} institucion={this.state.institucion} detalleTramite={this.state.detalleTramite} finTramite={this.state.finTramite} parroquia={this.state.parroquia} hora={this.state.hora} fecha={this.state.fecha} ano={this.state.ano} />}
                                fileName={"CUDA-AESP-"+this.state.consecutivo}
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