import React, { Component } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProductoCartaCelebrarMatrimonio from '../../createdDocuments/PARR/ProductoCartaCelebrarMatrimonio';




class CartaCelebrarMatrimonio extends Component {


    state = {
        parroquia: '',
        consecutivo: '',
        destinatario: '',
        lugarTrabajoDestinatario: '',
        fecha: '',
        esposo: '',
        esposa: '',
        cedEsposo: '',
        cedEsposa: '',
        fechaMatrimonio: '',
        lugarMatrimonio: '',
       
        tel: "",
        cura: '',
        cedCura: '',
        residenciaCura: '',
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
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="001-2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del Párroco que redacta el documento.</i></span>
                                                    <input onChange={this.onChange('cura')} name="cura" type="text" placeholder="Bartolome Mora Chavarria" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la cédula del Párroco que redacta el documento.</i></span>
                                                    <input onChange={this.onChange('cedCura')} name="cedCura" type="text" placeholder="1 1234 1234" className="form-control" />
                                                </div>

                                                
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la residencia del Párroco que redacta el documento.</i></span>
                                                    <input onChange={this.onChange('residenciaCura')} name="residenciaCura" type="text" placeholder="Casa Cural de la Garita" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de cura de destinatario.</i></span>
                                                    <input onChange={this.onChange('destinatario')} name="destinatario" type="text" placeholder="Pedro Mora Chavarria" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar de trabajo del cura destinatario.</i></span>
                                                    <input onChange={this.onChange('lugarTrabajoDestinatario')} name="lugarTrabajoDestinatario" type="text" placeholder="Santa Barvara, Heredia" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha de elaboracion del documento</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="date" placeholder="2 de enero de 2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del conyugue.</i></span>
                                                    <input onChange={this.onChange('esposo')} name="esposo" type="text" placeholder="Julio Oreamuno Mora" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la cédula del conyugue.</i></span>
                                                    <input onChange={this.onChange('cedEsposo')} name="cedEsposo" type="text" placeholder="1 1234 1234" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la conyugue.</i></span>
                                                    <input onChange={this.onChange('esposa')} name="esposa" type="text" placeholder="Maria Mora Alpizar" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la cédula de la conyugue.</i></span>
                                                    <input onChange={this.onChange('cedEsposa')} name="cedEsposa" type="text" placeholder="1 1234 1234" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha prevista del matrimonio.</i></span>
                                                    <input onChange={this.onChange('fechaMatrimonio')} name="fechaMatrimonio" type="text" placeholder="2 de enero de 2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar previsto del matrimonio.</i></span>
                                                    <input onChange={this.onChange('lugarMatrimonio')} name="lugarMatrimonio" type="text" placeholder="La Garita, Alajuela" className="form-control" />
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
                                document={<ProductoCartaCelebrarMatrimonio parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} destinatario={this.state.destinatario} fecha={this.state.fecha} cura={this.state.cura} residenciaCura={this.state.residenciaCura} cedCura={this.state.cedCura} web={this.state.web} image={this.state.image} codigo={this.state.codigo} tel={this.state.tel} lugar={this.state.lugar} lugarMatrimonio={this.state.lugarMatrimonio} nombreFeligres={this.state.nombreFeligres} esposo={this.state.esposo} esposa={this.state.esposa} cedEsposo={this.state.cedEsposo} cedEsposa={this.state.cedEsposa} fechaMatrimonio={this.state.fechaMatrimonio} lugarTrabajoDestinatario={this.state.destinatalugarTrabajoDestinatariorio}/>}
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

export default CartaCelebrarMatrimonio;