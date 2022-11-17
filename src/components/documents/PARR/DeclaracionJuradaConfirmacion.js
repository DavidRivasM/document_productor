import React, { Component } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProductoDeclaracionJuradaConfirmacion from '../../createdDocuments/PARR/ProductoDeclaracionJuradaConfirmacion';
;


class DeclaracionJuradaConfirmacion extends Component {
    state = {
        consecutivo: '',
        fecha: '',
        persona: '',
        cedPersona: '',
        lugarConfirmacion: '',
        fechaConfirmacion: '',
        añoConfirmacion: '',
        edad: '',
        estadoCivil: '',
        residencia: '',
        padrino: '',
        madrina:'',
        obispoConfirmacion: '',
        pruebaConfirmacion: '',
        testigo: '',
        cedTestigo: '',
        calidadTestigo: '',

        parroquia: '',
        cura: '',
        tel: "",
        email: "",
        web: "",
        image: "",
        codigo: '',
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
                cura: "Juan Mora"
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
                cura: "Marcio Mora"
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
                cura: "Esteban Mora"
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
                cura: "Esteban Mora"
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
                cura: "Esteban Mora"
            })
        }
        else {
            console.log("Ejecuta el ELSE")
        }

    }


    sunmitPost = (e) => {

        if (!this.state.consecutivo) {
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
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha en que se presentó el solicitante.</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="date" className="form-control" placeholder=" 24 de febrero de 2022" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del la persona solicitante.</i></span>
                                                    <textarea onChange={this.onChange('persona')} className="form-control" name="persona" placeholder="Vinicio Ramirez Retana"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el numero de cédula de la persona solicitante.</i></span>
                                                    <textarea onChange={this.onChange('cedPersona')} className="form-control" name="cedPersona" placeholder="1 1234 1234"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar donde el solicitante recibió la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('lugarConfirmacion')} className="form-control" name="lugarConfirmacion" placeholder="Parroquia del Carmen"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el año en que se recibió la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('añoConfirmacion')} className="form-control" name="añoConfirmacion" placeholder="2002"></textarea>
                                                </div>

                                                <select name="edad" onChange={this.onChange('edad')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione el estado legal del solicitante</option>
                                                    <option value="Mayor de edad">Mayor de edad</option>
                                                    <option value="Menor de edad">Menor de edad</option>
                                                </select>

                                                <select name="estadoCivil" onChange={this.onChange('estadoCivil')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione el estado civil del solicitante</option>
                                                    <option value="Soltero">Soltero/a</option>
                                                    <option value="Casado">Casado/a</option>
                                                    <option value="Viudo">Viudo/a</option>
                                                    <option value="Divorciado/da">Divorciado/a</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar de residencia del solicitante.</i></span>
                                                    <textarea onChange={this.onChange('residencia')} className="form-control" name="residencia" placeholder="Alajuelita centro, San Jose"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del padre del solicitante.</i></span>
                                                    <textarea onChange={this.onChange('padrino')} className="form-control" name="padrino" placeholder="Marcos Hernandez Perez"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la madre del solicitante.</i></span>
                                                    <textarea onChange={this.onChange('madrina')} className="form-control" name="madrina" placeholder="Maria Lopez Mora"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha en la que se realizó la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('fechaConfirmacion')} className="form-control" name="fechaConformacion" placeholder="4 de enero del 2000"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del obispo que realizó la Comunion.</i></span>
                                                    <textarea onChange={this.onChange('obispoConfirmacion')} className="form-control" name="obispoConfirmacion" placeholder="Juan Mora Porras"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la prueba de la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('pruebaConfirmacion')} className="form-control" name="pruebaConfirmacion" placeholder="Verificacion de documentos sacramentales"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del testigo.</i></span>
                                                    <textarea onChange={this.onChange('testigo')} className="form-control" name="testigo" placeholder="Estonia Perez Mora"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la cédula del testigo.</i></span>
                                                    <textarea onChange={this.onChange('cedTestigo')} className="form-control" name="cedTestigo" placeholder="1 1234 1234"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la calidad del téstigo.</i></span>
                                                    <textarea onChange={this.onChange('calidadTestigo')} className="form-control" name="calidadTestigo" placeholder="Encargado de confirmaciones"></textarea>
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
                                document={<ProductoDeclaracionJuradaConfirmacion parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} lugar={this.state.lugar} fecha={this.state.fecha} persona={this.state.persona} cedPersona={this.state.cedPersona} lugarConfirmacion={this.state.lugarConfirmacion} fechaConfirmacion={this.state.fechaConfirmacion} añoConfirmacion={this.state.añoConfirmacion} edad={this.state.edad} estadoCivil={this.state.estadoCivil} residencia={this.state.residencia} padrino={this.state.padrino} madrina={this.state.madrina} obispoConfirmacion={this.state.obispoConfirmacion} pruebaConfirmacion={this.state.pruebaConfirmacion} cura={this.state.cura} ced={this.state.ced} testigo={this.state.testigo} cedTestigo={this.state.cedTestigo} calidadTestigo={this.state.calidadTestigo} web={this.state.web} image={this.state.image} codigo={this.state.codigo} email={this.state.email} tel={this.state.tel} />}
                                fileName={this.state.codigo + "-DECLJUD-" + this.state.consecutivo}                            >
                                <button type="button" className="btn btn-danger mb-1">Descargar documento</button>
                            </PDFDownloadLink>


                        </div>
                    )
                }


            </>
        );
    }
}

export default DeclaracionJuradaConfirmacion;