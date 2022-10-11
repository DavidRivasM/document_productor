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
        asiento: '',
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
        if (this.state.parroquia === "Parroquia de San Pedro de Poas") {
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
                cura: "Mario Bros"
            })
            this.setState({
                lugar: "San Pedro de Poas"
            })
        }

        else if (this.state.parroquia === "Parroquia de Orotina") {

            this.setState({
                tel: 22901214
            })
            this.setState({
                email: "parroquiaorotina@gmail.com"
            })
            this.setState({
                web: "Orotina, Alajuela"
            })
            this.setState({
                image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Escudo_de_Orotina.png?1660143063863"
            })
            this.setState({
                codigo: "POROT"
            })
            this.setState({
                cura: "Mario Bros"
            })
            this.setState({
                lugar: "Orotina centro"
            })
        }

        else if (this.state.parroquia === "Parroquia del Coyol") {

            this.setState({
                tel: 22222222
            })
            this.setState({
                email: "parroquiacoyol@gmail.com"
            })
            this.setState({
                web: "El Coyol, Alajuela"
            })
            this.setState({
                image: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t1.6435-9/124446854_1078134035966959_2324299155969680830_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GPQ4uLmuDtgAX9F0De2&_nc_ht=scontent.fsjo15-1.fna&oh=00_AT_TfGepSJ_La8URMRGJghYHzlca8WnRa21RroFfb6n0Fw&oe=631A125F"
            })
            this.setState({
                codigo: "PCOYOL"
            })
            this.setState({
                cura: "Mario Bros"
            })
            this.setState({
                lugar: "Coyol bajo el puente"
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
                                                    <option selected>Seleccione la parroquia</option>
                                                    <option value="Parroquia del Coyol">Parroquia del Coyol</option>
                                                    <option value="Parroquia de Orotina">Parroquia de Orotina</option>
                                                    <option value="Parroquia de San Pedro de Poas">Parroquia de Poás</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo.</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="01-2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha en que se presento el solicitante.</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="date" className="form-control" placeholder=" 24 de febrero de 2022" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del la persona solicitante.</i></span>
                                                    <textarea onChange={this.onChange('persona')} className="form-control" name="persona" placeholder="Vinicio Ramirez Retana"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el numero de cedula de la persona solicitante.</i></span>
                                                    <textarea onChange={this.onChange('cedPersona')} className="form-control" name="cedPersona" placeholder="1 1234 1234"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar donde se recibio la confirmacion.</i></span>
                                                    <textarea onChange={this.onChange('lugarConfirmacion')} className="form-control" name="lugarConfirmacion" placeholder="Parroquia del Carmen"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el ano en que se recibio la confirmacion.</i></span>
                                                    <textarea onChange={this.onChange('añoConfirmacion')} className="form-control" name="añoConfirmacion" placeholder="2002"></textarea>
                                                </div>

                                                <select name="edad" onChange={this.onChange('edad')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione es estado legal del solicitante</option>
                                                    <option value="Mayor de edad">Mayor de edad</option>
                                                    <option value="Menor de edad">Menor de edad</option>
                                                </select>

                                                <select name="estadoCivil" onChange={this.onChange('estadoCivil')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione es estado civil del solicitante</option>
                                                    <option value="Soltero">Soltero</option>
                                                    <option value="Casado">Casado</option>
                                                    <option value="Viudo">Viudo</option>
                                                    <option value="Divorciado/da">Divorciado/da</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar de residencia.</i></span>
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
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de la confirmacion.</i></span>
                                                    <textarea onChange={this.onChange('fechaConfirmacion')} className="form-control" name="fechaConformacion" placeholder="4 de enero del 2000"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del obispo que realizo la comunion.</i></span>
                                                    <textarea onChange={this.onChange('obispoConfirmacion')} className="form-control" name="obispoConfirmacion" placeholder="Juan Mora Porras"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la prueba de la confirmacion.</i></span>
                                                    <textarea onChange={this.onChange('pruebaConfirmacion')} className="form-control" name="pruebaConfirmacion" placeholder="Verificacion de documentos sacramentales"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del testigo.</i></span>
                                                    <textarea onChange={this.onChange('testigo')} className="form-control" name="testigo" placeholder="Estonia Perez Mora"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la cedula del testigo.</i></span>
                                                    <textarea onChange={this.onChange('cedTestigo')} className="form-control" name="cedTestigo" placeholder="1 1234 1234"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la calidad del testigo.</i></span>
                                                    <textarea onChange={this.onChange('calidadTestigo')} className="form-control" name="calidadTestigo" placeholder="Encargado de confirmaciones"></textarea>
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


                            <h5 >¡La información fue validada!</h5>

                            <PDFDownloadLink
                                document={<ProductoDeclaracionJuradaConfirmacion parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} lugar={this.state.lugar} fecha={this.state.fecha} persona={this.state.persona} cedPersona={this.state.cedPersona} lugarConfirmacion={this.state.lugarConfirmacion} fechaConfirmacion={this.state.fechaConfirmacion} añoConfirmacion={this.state.añoConfirmacion} asiento={this.state.asiento} edad={this.state.edad} estadoCivil={this.state.estadoCivil} residencia={this.state.residencia} padrino={this.state.padrino} madrina={this.state.madrina} obispoConfirmacion={this.state.obispoConfirmacion} pruebaConfirmacion={this.state.pruebaConfirmacion} cura={this.state.cura} ced={this.state.ced} testigo={this.state.testigo} cedTestigo={this.state.cedTestigo} calidadTestigo={this.state.calidadTestigo} web={this.state.web} image={this.state.image} codigo={this.state.codigo} tel={this.state.tel} />}
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