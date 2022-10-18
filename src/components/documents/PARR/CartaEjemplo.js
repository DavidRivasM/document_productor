import React, { Component } from 'react';
import ProductoProclamaMatrimonial from '../../createdDocuments/PARR/ProductoProclamaMatrimonial';
import { PDFDownloadLink } from "@react-pdf/renderer";




class CartaEjemplo extends Component {


    state = {
        parroquia: '',
        consecutivo: '',
        fotoHombre: '',
        fotoMujer: '',
        nombreHombre: '',
        nombreMujer: '',
        nacionalidadHombre: '',
        nacionalidadMujer: '',
        parroquiaHombre: '',
        parroquiaMujer: '',
        fechaMatrimonio: '',
        fechaInicioProclama: '',
        fechaFinProclama: '',
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
                                                <legend className="text-center header">Esta es la carta de ejemplo, por el momento no hay formulario ❤</legend>

                                               

                                            

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
                                document={<ProductoProclamaMatrimonial parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} fotoHombre={this.state.fotoHombre} fotoMujer={this.state.fotoMujer} nombreHombre={this.state.nombreHombre} nombreMujer={this.state.nombreMujer} nacionalidadHombre={this.state.nacionalidadHombre} nacionalidadMujer={this.state.nacionalidadMujer} parroquiaHombre={this.state.parroquiaHombre} parroquiaMujer={this.state.parroquiaMujer}
                                    fechaMatrimonio={this.state.fechaMatrimonio} fechaInicioProclama={this.state.fechaInicioProclama} fechaFinProclama={this.state.fechaFinProclama} tel={this.state.tel} cura={this.state.cura} email={this.state.email} web={this.state.web} image={this.state.image} codigo={this.state.codigo} />}
                                fileName={this.state.codigo + "-PRM-" + this.state.consecutivo}
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

export default CartaEjemplo;