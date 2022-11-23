import React, { Component } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProductoBoletaInscripcionCatequesisBautismal from '../../createdDocuments/PARR/ProductoBoletaInscripcionCatequesisBautismal';




class BoletaInscripcionCatequesisBautismal extends Component {


    state = {
        parroquia: '',
        consecutivo: '',
        fecha: '',
        solicitante: '',
        cedSolicitante: '',
        edadSolicitante: '',
        residenciaSolicitante: '',
        telefonoSolicitante: '',
        correoSolicitante: '',
        calidadAsistencia: '',
        estadoCivil: '',
        participacionIglesia: '',
        descripcionParticipacionIglesia: '',
       
        tel: "",
        cura: '',
        email: "",
        web: "",
        image: "",
        codigo: "",
        lugar: '',
        postSubmitted: false,
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value,
        });
    }

    capturar = () => {
        if (this.state.parroquia === "Parroquia de San Pedro de Poás") {
            this.setState({
                tel: 24485193
            })
            this.setState({
                email: "parroquiapoas@hotmail.com"
            })
            this.setState({
                web: "https://www.diocesisdealajuela.org/parroquia-san-pedro.html"
            })
            this.setState({
                image: "https://i.ibb.co/z7LVbzL/Parroquia-Poas.png"
            })
            this.setState({
                codigo: "PPOAS"
            })
            this.setState({
                lugar: "Poás de Alajuela"
            })
        }

        else if (this.state.parroquia === "Parroquia de Catedral") {

            this.setState({
                tel: 24414665
            })
            this.setState({
                email: "catedraldealajuela1921@gmail.com"
            })
            this.setState({
                web: "https://es-la.facebook.com/Catedral1921alajuela/"
            })
            this.setState({
                image: "https://i.ibb.co/qdx2xZ4/LOGO-Catedral.jpg"
            })
            this.setState({
                codigo: "PCATE"
            })
            this.setState({
                lugar: "Alajuela"
            })
        }

        else if (this.state.parroquia === "Parroquia de San Rafael Arcángel Zarcero") {

            this.setState({
                tel: 24633000
            })
            this.setState({
                email: "parroquiasanrafaelzarcero@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/ParroquiaZarcero/"
            })
            this.setState({
                image: "https://i.ibb.co/JjDT9Gq/LOGO-Zarcero.jpg"
            })
            this.setState({
                codigo: "PZARC"
            })
            this.setState({
                lugar: "Zarcero de Alajuela"
            })
        }

        else if (this.state.parroquia === "Parroquia Nuestra Señora del Carmen") {

            this.setState({
                tel: 24411390
            })
            this.setState({
                email: "iglesiaelcarmenalajuela@gmail.com"
            })
            this.setState({
                web: "https://es-la.facebook.com/ParroquiaNuestraSradelCarmenAlajuela/"
            })
            this.setState({
                image: "https://i.ibb.co/8b21wr4/LOGO-El-Carmen.png"
            })
            this.setState({
                codigo: "PCARM"
            })
            this.setState({
                lugar: "El Carmen de Alajuela"
            })
        }
        else if (this.state.parroquia === "Parroquia Nuestra Señora de las Mercedes") {

            this.setState({
                tel: 24941616
            })
            this.setState({
                email: "parroquiadegrecia@gmail.com"
            })
            this.setState({
                web: "http://www.ParroquiadeGrecia.com/"
            })
            this.setState({
                image: "https://i.ibb.co/fn3zpxb/LOGO-Grecia.jpg"
            })
            this.setState({
                codigo: "PGREC"
            })
            this.setState({
                lugar: "Grecia de Alajuela"
            })
        }
        else {
            console.log("Ejecuta el ELSE")
        }
    }
    
    sunmitPost = (e) => {

        if (!this.state.consecutivo || !this.state.parroquia) {
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
                                                
                                                <select name="parroquia" onChange={this.onChange('parroquia')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option defaultValue>Seleccione la parroquia</option>
                                                    <option value="Parroquia de San Pedro de Poás">Parroquia de San Pedro de Poás</option>
                                                    <option value="Parroquia de Catedral">Parroquia de Catedral</option>
                                                    <option value="Parroquia de San Rafael Arcángel Zarcero">Parroquia de San Rafael Arcángel Zarcero</option>
                                                    <option value="Parroquia Nuestra Señora del Carmen">Parroquia Nuestra Señora del Carmen</option>
                                                    <option value="Parroquia Nuestra Señora de las Mercedes">Parroquia Nuestra Señora de las Mercedes</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo.</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="001-2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de inscripción del solicitante.</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="text" placeholder="2 de marzo de 2020" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre y apellidos del solicitante.</i></span>
                                                    <input onChange={this.onChange('solicitante')} name="solicitante" type="text" placeholder="David Rivas Mora" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el número de cédula del solicitante.</i></span>
                                                    <input onChange={this.onChange('cedSolicitante')} name="cedSolicitante" type="text" placeholder="1 1234 1234" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar de residencia del solicitante.</i></span>
                                                    <input onChange={this.onChange('residenciaSolicitante')} name="residenciaSolicitante" type="text" placeholder="Alajuela centro" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la edad del solicitante.</i></span>
                                                    <input onChange={this.onChange('edadSolicitante')} name="edadSolicitante" type="text" placeholder="23 años" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el número de teléfono del solicitante.</i></span>
                                                    <input onChange={this.onChange('telefonoSolicitante')} name="telefonoSolicitante" type="text" placeholder="2212 2212" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el correo electrónico del solicitante.</i></span>
                                                    <input onChange={this.onChange('correoSolicitante')} name="correoSolicitante" type="text" placeholder="alejo@gmail.com" className="form-control" />
                                                </div>

                                                <select name="estadoCivil" onChange={this.onChange('estadoCivil')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione el estado civil</option>
                                                    <option value="Soltero">Soltero/a</option>
                                                    <option value="Divorciado">Divorciado/a</option>
                                                    <option value="Viudo/a">Viudo/a</option>
                                                </select>

                                                <select name="estadoCivil" onChange={this.onChange('calidadAsistencia')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione la calidad de asistencia del solicitante</option>
                                                    <option value="Madre">Madre</option>
                                                    <option value="Padre">Padre</option>
                                                    <option value="Padrino">Padrino</option>
                                                    <option value="Madrina">Madrina</option>
                                                </select>

                                                <select name="participacionIglesia" onChange={this.onChange('participacionIglesia')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Ha participado en alguna actividad eclesiástica.</option>
                                                    <option value="Si">Si</option>
                                                    <option value="No">No</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la descripción de actividades en las que participó el solicitante</i></span>
                                                    <input onChange={this.onChange('descripcionParticipacionIglesia')} name="descripcionParticipacionIglesia" type="text" placeholder="Tiene la Confirma realizada" className="form-control" />
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
                                document={<ProductoBoletaInscripcionCatequesisBautismal parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} fecha={this.state.fecha} solicitante={this.state.solicitante} cedSolicitante={this.state.cedSolicitante} edadSolicitante={this.state.edadSolicitante} residenciaSolicitante={this.state.residenciaSolicitante} telefonoSolicitante={this.state.telefonoSolicitante} correoSolicitante={this.state.correoSolicitante} calidadAsistencia={this.state.calidadAsistencia} ced={this.state.ced} web={this.state.web} image={this.state.image} codigo={this.state.codigo} tel={this.state.tel} estadoCivil={this.state.estadoCivil} participacionIglesia={this.state.participacionIglesia} descripcionParticipacionIglesia={this.state.descripcionParticipacionIglesia}/>}
                                fileName={this.state.codigo + '-'+ this.state.consecutivo}                            >
                                <button type="button" className="btn btn-danger mb-1">Descargar documento</button>
                            </PDFDownloadLink>

                        </div>
                    )
                }
            </>
        );
    }
}

export default BoletaInscripcionCatequesisBautismal;