import React, { Component } from 'react';
import ProductoListaChequeoDocumentosMatrimonio from '../../createdDocuments/PARR/ProductoListaChequeoDocumentosMatrimonio';
import { PDFDownloadLink } from "@react-pdf/renderer";




class ListaChequeoDocumentosMatrimonio extends Component {


    state = {
        parroquia: '',
        consecutivo: '',
        nombreNovio: '',
        nombreNovia: '',
        fechaMatrimonio: '',
        parroquiaRemitente: '',
        parroquiaEntrega: '',
        personaEntrega: '',
        lugarRecibe: '',
        personaRecibe: '',
        fechaDia: '',

        tel: "",
        cura: '',
        email: "",
        web: "",
        image: "",
        codigo: "",
        postSubmitted: false,

        file: ''
    }

    photoInput = input => e => {
        this.setState({
            [input]: URL.createObjectURL(e.target.value[0])
        });
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value,
        });
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
                cura: "Juan Mora"
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
                cura: "Marcio Mora"
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
                cura: "Esteban Mora"
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
                                                <legend className="text-center header">Ingrese los Datos </legend>

                                                
                                                <select name="parroquia" onChange={this.onChange('parroquia')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option defaultValue>Seleccione la parroquia</option>
                                                    <option value="Parroquia del Coyol">Parroquia del Coyol</option>
                                                    <option value="Parroquia de Orotina">Parroquia de Orotina</option>
                                                    <option value="Parroquia de San Pedro de Poas">Parroquia de Poás</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="01-2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"> Ingrese el nombre del novio.</i></span>
                                                    <input onChange={this.onChange('nombreNovio')} name="nombreNovio" type="text" placeholder="Pedro Gonzales" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la novia.</i></span>
                                                    <input onChange={this.onChange('nombreNovia')} name="nombreNovia" type="text" placeholder="Veronica Alfaro" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha del matrimonio.</i></span>
                                                    <input onChange={this.onChange('fechaMatrimonio')} name="fechaMatrimonio" type="text" placeholder="09-08-2022" className="form-control" /> 
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la parroquia remitente.</i></span>
                                                    <input onChange={this.onChange('parroquiaRemitente')} name="parroquiaRemitente" type="text" placeholder="Barrio San Jose" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la parroquia que recibe los datos .</i></span>
                                                    <input onChange={this.onChange('parroquiaEntrega')} name="parroquiaEntrega" type="text" placeholder="Nuestra Senora del Pilar" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la secretaria.</i></span>
                                                    <input onChange={this.onChange('personaEntrega')} name="personaEntrega" type="text" placeholder="Karla Barrantes" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la parroquia que recibe los datos.</i></span>
                                                    <input onChange={this.onChange('lugarRecibe')} name="lugarRecibe" type="text" placeholder="Santiago Apostol" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la secretaria que recibe los datos.</i></span>
                                                    <input onChange={this.onChange('personaRecibe')} name="personaRecibe" type="text" placeholder="Ana Cascante" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de hoy.</i></span>
                                                    <input onChange={this.onChange('fechaDia')} name="fechaDia" type="text" placeholder="22-12-2009" className="form-control" />
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
                                document={<ProductoListaChequeoDocumentosMatrimonio parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} nombreNovio={this.state.nombreNovio} nombreNovia={this.state.nombreNovia} fechaMatrimonio={this.state.fechaMatrimonio} parroquiaRemitente={this.state.parroquiaRemitente} parroquiaEntrega={this.state.parroquiaEntrega} personaEntrega={this.state.personaEntrega} lugarRecibe={this.state.lugarRecibe}personaRecibe={this.state.personaRecibe} fechaDia={this.state.fechaDia} firma={this.state.firma} tel={this.state.tel} cura={this.state.cura} email={this.state.email} web={this.state.web} image={this.state.image} codigo={this.state.codigo} />}
                                fileName={this.state.codigo + "-LAS-" + this.state.consecutivo}
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

export default ListaChequeoDocumentosMatrimonio;