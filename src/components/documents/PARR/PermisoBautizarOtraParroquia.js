import React, { Component } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProductoPermisoBautizarOtraParroquia from '../../createdDocuments/PARR/ProductoPermisoBautizarOtraParroquia';




class PermisoBautizarOtraParroquia extends Component {


    state = {
        parroquia: '',
        consecutivo: '',
         fecha: '',
        nombrePadre: '',
        cedPadre: '',
        nombreMadre: '',
        cedMadre: '',
        nombreNino: '',
        destinatario: '',
        
        tel: "",
        cura: '',
        email: "",
        web: "",
        image: "",
        codigo: "",
        lugar: '',
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
            this.setState({
                lugar: "Poas"
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
            this.setState({
                lugar: "Orotina"
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
            this.setState({
                lugar: "Coyol"
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
                                                    <option selected>Seleccione la parroquia</option>
                                                    <option value="Parroquia del Coyol">Parroquia del Coyol</option>
                                                    <option value="Parroquia de Orotina">Parroquia de Orotina</option>
                                                    <option value="Parroquia de San Pedro de Poas">Parroquia de Poás</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="01-2022" className="form-control" />
                                                </div>

                            
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de elaboracion del documento</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="text" placeholder="2 de enero de 2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del Padre</i></span>
                                                    <input onChange={this.onChange('nombrePadre')} name="nombrePadre" type="text" placeholder="Pedro Mora Chavarria" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el numero de cedula del padre</i></span>
                                                    <input onChange={this.onChange('cedPadre')} name="cedPadre" type="text" placeholder="2 0897 0567" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese nombre de la nombre de la madre</i></span>
                                                    <input onChange={this.onChange('nombreMadre')} name="nombreMadre" type="text" placeholder="Loria Alfaro" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el numero de cedula de la madre</i></span>
                                                    <input onChange={this.onChange('cedMadre')} name="cedMadre" type="text" placeholder="2 0987 0897" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del nino</i></span>
                                                    <input onChange={this.onChange('nombreNino')} name="nombreNino" type="text" placeholder="Julian Alfaro" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del cura destinatario</i></span>
                                                    <input onChange={this.onChange('destinatario')} name="destinatario" type="text" placeholder="Juan Mora" className="form-control" />
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
                                document={<ProductoPermisoBautizarOtraParroquia parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} lugar={this.state.lugar} fecha={this.state.fecha} cura={this.state.cura} web={this.state.web} image={this.state.image} codigo={this.state.codigo} tel={this.state.tel} nombreMadre={this.state.nombreMadre} cedMadre={this.state.cedMadre} nombrePadre={this.state.nombrePadre} cedPadre={this.state.cedPadre} nombreNino={this.state.nombreNino}destinatario={this.state.destinatario}/>}
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

export default PermisoBautizarOtraParroquia;