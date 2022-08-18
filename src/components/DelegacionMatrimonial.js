import React, { Component } from 'react';
import ProductoDM from './createdDocuments/ProductoDM';
import { PDFDownloadLink } from "@react-pdf/renderer";
;


class DelegacionMatrimonial extends Component {
    state = {
        parroquia: '',
        codigo: '',
        lugar: '',
        fecha: '',
        cura: '',
        novio: '',
        novia: '',
        fechaMatrimonio: '',
        fechaPresentacion: '',
        postSubmitted: false,
        tel: "",
        email: "",
        web: "",
        image: ""
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
        }

        else if (this.state.parroquia === "Parroquia de Orotina") {

            this.setState({
                tel: 22901214
            })
            this.setState({
                email: "parroquiaorotina@gmail.com"
            })
            this.setState({
                direccion: "Orotina, Alajuela"
            })
            this.setState({
                image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Escudo_de_Orotina.png?1660143063863"
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
                direccion: "El Coyol, Alajuela"
            })
            this.setState({
                image: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t1.6435-9/124446854_1078134035966959_2324299155969680830_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GPQ4uLmuDtgAX9F0De2&_nc_ht=scontent.fsjo15-1.fna&oh=00_AT_TfGepSJ_La8URMRGJghYHzlca8WnRa21RroFfb6n0Fw&oe=631A125F"
            })

        }

        else {
            console.log("Ejecuta el ELSE")
        }

    }


    sunmitPost = (e) => {

        if (!this.state.codigo || !this.state.parroquia || !this.state.lugar || !this.state.parroquia || !this.state.fecha || !this.state.cura || !this.state.novio || !this.state.fechaMatrimonio|| !this.state.novia || !this.state.fechaPresentacion) {
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

                                                <select name="parroquia" onChange={this.onChange('parroquia')} className="form-group" aria-label="Default select example">
                                                    <option selected>Unidad administrativa</option>
                                                    <option value="Parroquia del Coyol">Parroquia del Coyol</option>
                                                    <option value="Parroquia de Orotina">Parroquia de Orotina</option>
                                                    <option value="Parroquia de San Pedro de Poas">Parroquia de Poas</option>
                                                </select>

                                                <div className="form-group">
                                                    <span ><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('codigo')} name="codigo" type="text" placeholder="Ingrese el codigo de referencia" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span ><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('lugar')} name="lugar" type="text" placeholder="Ingrese el lugar" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span >Ingrese la fecha de elaboracion del documento<i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="date" placeholder="Ingrese la fecha de elaboracion" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('fechaMatrimonio')} className="form-control" name="fechaMatrimonio" placeholder="Ingrese el dia del matrimonio"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span ><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('fechaPresentacion')} name="fechaPresentacion" type="text" placeholder="Ingrese el dia y hora de solicitud de los novios" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span ><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('cura')} className="form-control" name="cura" placeholder="Ingrese el nombre del cura" ></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span ><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('novio')} className="form-control" name="novio" placeholder="Ingrese el nombre del novio" ></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span ><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('novia')} className="form-control" name="novia" placeholder="Ingrese el nombre de la novia" ></textarea>
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
                                document={<ProductoDM parroquia={this.state.parroquia} codigo={this.state.codigo} lugar={this.state.lugar} fecha={this.state.fecha} fechaMatrimonio={this.state.fechaMatrimonio} fechaPresentacion={this.state.fechaPresentacion} cura={this.state.cura} novio={this.state.novio} novia={this.state.novia} tel={this.state.tel} email={this.state.email} web={this.state.web} image={this.state.image} />}
                                fileName={this.state.codigo}
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