import React, { Component } from 'react';
import ProductoDM from './createdDocuments/ProductoDM';

class CartaNulidad extends Component {
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
        horaPresentacion: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.parroquia || !this.state.cura){
            alert('Todos los espacios son requeridos!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Crear Delegacion Matrimonial</legend>
                                                
                                                <h1>Aqui va el form de la carta de nulidad</h1>
                                                
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Generar documento</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <CartaNulidad parroquia={this.state.parroquia} codigo={this.state.codigo} lugar={this.state.lugar}  fecha={this.state.fecha} fechaMatrimonio={this.state.fechaMatrimonio} fechaPresentacion={this.state.fechaPresentacion} horaPresentacion={this.state.horaPresentacion} cura={this.state.cura} novio={this.state.novio} novia={this.state.novia}/>
                    )
                }
            </>
        );
    }
}

export default CartaNulidad;