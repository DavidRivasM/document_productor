import React, { Component } from 'react';
import ProductoDM from './createdDocuments/ProductoDM';
import { PDFDownloadLink } from "@react-pdf/renderer";
;


class DelegacionMatrimonial extends Component {
    state = {
        parroquia: '',
        consecutivo: '',
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
        }

        else {
            console.log("Ejecuta el ELSE")
        }

    }


    sunmitPost = (e) => {

        if (!this.state.consecutivo || !this.state.parroquia || !this.state.lugar || !this.state.parroquia || !this.state.fecha || !this.state.cura || !this.state.novio || !this.state.fechaMatrimonio || !this.state.novia || !this.state.fechaPresentacion) {
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
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la ubicación</i></span>
                                                    <input onChange={this.onChange('lugar')} name="lugar" type="text" placeholder="El Coyol" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de elaboración del documento</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="date" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de matrimonio</i></span>
                                                    <textarea onChange={this.onChange('fechaMatrimonio')} className="form-control" name="fechaMatrimonio" placeholder="Lunes 1 de mayo de 2022"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el dia y hora de solicitud de los novios</i></span>
                                                    <input onChange={this.onChange('fechaPresentacion')} name="fechaPresentacion" type="text" placeholder="01 de marzo del presente año a las 2pm" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del cura</i></span>
                                                    <textarea onChange={this.onChange('cura')} className="form-control" name="cura" placeholder="Juan Mora Porras" ></textarea>
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
                                document={<ProductoDM parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} lugar={this.state.lugar} fecha={this.state.fecha} fechaMatrimonio={this.state.fechaMatrimonio} fechaPresentacion={this.state.fechaPresentacion} cura={this.state.cura} novio={this.state.novio} novia={this.state.novia} tel={this.state.tel} email={this.state.email} web={this.state.web} image={this.state.image} codigo={this.state.codigo} />}
                                fileName={this.state.codigo+"-"+this.state.consecutivo}
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