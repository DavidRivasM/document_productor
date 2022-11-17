import React, { Component } from 'react';
import ProductoDelegacionMatrimonial from '../../createdDocuments/PARR/ProductoDelegacionMatrimonial';
import { PDFDownloadLink } from "@react-pdf/renderer";
;


class DelegacionMatrimonial extends Component {
    state = {
        parroquia: '',
        consecutivo: '',
        tipo: '',
        lugar: '',
        fecha: '',
        cura: '',
        destinatario: '',
        novio: '',
        novia: '',
        fechaMatrimonio: '',
        fechaPresentacion: '',
        postSubmitted: false,
        tel: "",
        email: "",
        web: "",
        image: "",
        codigo: ""
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

        if (!this.state.consecutivo || !this.state.parroquia ) {
            alert('El consecutivo y la parroquia son requeridos!');
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

                                                <select name="parroquia" onChange={this.onChange('tipo')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option defaultValue>Seleccione el tipo de delegación.</option>
                                                    <option value="dentro de la parroquia">Dentro de la parroquia</option>
                                                    <option value="fuera de la parroquia">Fuera de la parroquia</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del Cura párroco que redacta el documento.</i></span>
                                                    <input onChange={this.onChange('cura')} name="cura" type="text" placeholder="Bartolome de las Casas" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del Cura párroco a quien va dirigido el documento.</i></span>
                                                    <input onChange={this.onChange('destinatario')} name="destinatario" type="text" placeholder="Ignacio Santos Santos" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de elaboración del documento.</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="date" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha prevista de matrimonio.</i></span>
                                                    <textarea onChange={this.onChange('fechaMatrimonio')} className="form-control" name="fechaMatrimonio" placeholder="Lunes 1 de mayo de 2022"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el dia y hora de solicitud de los novios.</i></span>
                                                    <input onChange={this.onChange('fechaPresentacion')} name="fechaPresentacion" type="text" placeholder="01 de marzo del presente año a las 2pm" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del novio</i></span>
                                                    <textarea onChange={this.onChange('novio')} className="form-control" name="novio" placeholder="Vinicio Ramírez Retana" ></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la novia</i></span>
                                                    <textarea onChange={this.onChange('novia')} className="form-control" name="novia" placeholder="Elsa Rivas Mata" ></textarea>
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
                                document={<ProductoDelegacionMatrimonial parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} lugar={this.state.lugar} fecha={this.state.fecha} fechaMatrimonio={this.state.fechaMatrimonio} fechaPresentacion={this.state.fechaPresentacion} cura={this.state.cura} novio={this.state.novio} novia={this.state.novia} tel={this.state.tel} email={this.state.email} web={this.state.web} image={this.state.image} tipo={this.state.tipo} codigo={this.state.codigo} destinatario={this.state.destinatario} />}
                                fileName={this.state.codigo + "-" + this.state.consecutivo}
                                pdfVersion="1.7"
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

export default DelegacionMatrimonial;