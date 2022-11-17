import React, { Component } from 'react';
import ProductoPermisoConfirmacionCatequesis from '../../createdDocuments/PARR/ProductoPermisoConfirmacionCatequesis';
import { PDFDownloadLink } from "@react-pdf/renderer";


class PermisoConfirmacionCatequesis extends Component {
    state = {
        parroquia: '',
        consecutivo: '',
        fecha: '',
        destinatario: '',
        parroquiaDestinatario: '',
        personaSolicitante: '',
        cedPersonaSolicitante: '',
        direccionParroquia: '',
        padrePersonaSolicitante: '',
        madrePersonaSolicitante: '',
        razon: "",

        cura: '',
        ced: '',
        tel: "",
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
        })
            ;
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

        else if (this.state.parroquia === "Parroquia de San Rafael Arcángel") {

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

        if (!this.state.consecutivo  ) {
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
                                                    <option value="Parroquia de San Rafael Arcángel">Parroquia de San Rafael Arcángel</option>
                                                    <option value="Parroquia Nuestra Señora del Carmen">Parroquia Nuestra Señora del Carmen</option>
                                                    <option value="Parroquia Nuestra Señora de las Mercedes">Parroquia Nuestra Señora de las Mercedes</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo.</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="01-2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de elaboración del documento.</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="date" className="form-control" placeholder="24 de febrero de 2022" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del Párroco.</i></span>
                                                    <input onChange={this.onChange('cura')} name="cura" type="text" className="form-control" placeholder="Bartolome Mora" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del Párroco destinatario.</i></span>
                                                    <input onChange={this.onChange('destinatario')} name="destinatario" type="text" placeholder="David Rivas Mora" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la parroquia en donde labora el Párroco destinatario.</i></span>
                                                    <input onChange={this.onChange('parroquiaDestinatario')} name="parroquiaDestinatario" type="text" placeholder="Desamparados" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la persona que realizará la Confirmación o Catequesis.</i></span>
                                                    <textarea onChange={this.onChange('personaSolicitante')} className="form-control" name="personaSolicitante" placeholder="Juana de Arco"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el número de cédula de la persona que realizará la Confirmación o Catequesis.</i></span>
                                                    <textarea onChange={this.onChange('cedPersonaSolicitante')} className="form-control" name="cedPersonaSolicitante" placeholder="1 1234 1234"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la ubicación de la parroquia en donde se pretende realizar la Confirmación o Catequesis.</i></span>
                                                    <textarea onChange={this.onChange('direccionParroquia')} className="form-control" name="direccionParroquia" placeholder="La Garita, Alajuela"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del padre de la persona que realizará la Confirmación o Catequesis..</i></span>
                                                    <textarea onChange={this.onChange('padrePersonaSolicitante')} className="form-control" name="padrePersonaSolicitante" placeholder="Pedro Mora Porras"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la madre de la persona que realizará la Confirmación o Catequesis..</i></span>
                                                    <textarea onChange={this.onChange('madrePersonaSolicitante')} className="form-control" name="madrePersonaSolicitante" placeholder="Maria Rojas Mora"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la razón por la cual la persona que realizará la Confirmación o Catequesis.</i></span>
                                                    <textarea onChange={this.onChange('razon')} className="form-control" name="razon" placeholder="por una situación médica hasta ahora puede realizar la confirmación"></textarea>
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
                                document={<ProductoPermisoConfirmacionCatequesis parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} lugar={this.state.lugar} fecha={this.state.fecha} destinatario={this.state.destinatario} parroquiaDestinatario={this.state.parroquiaDestinatario} personaSolicitante={this.state.personaSolicitante} cedPersonaSolicitante={this.state.cedPersonaSolicitante} direccionParroquia={this.state.direccionParroquia} padrePersonaSolicitante={this.state.padrePersonaSolicitante} razon={this.state.razon} cura={this.state.cura} madrePersonaSolicitante={this.state.madrePersonaSolicitante} ced={this.state.ced} web={this.state.web} image={this.state.image} codigo={this.state.codigo} tel={this.state.tel} />}
                                fileName={this.state.codigo + "-" + this.state.consecutivo}                            >
                                <button type="button" className="btn btn-danger mb-1">Descargar documento</button>
                            </PDFDownloadLink>


                        </div>
                    )
                }


            </>
        );
    }
}

export default PermisoConfirmacionCatequesis;