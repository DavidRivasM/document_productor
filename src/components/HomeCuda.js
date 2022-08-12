import React, { useState } from 'react';
import '../styles/home.css';
import DelegacionMatrimonial from './DelegacionMatrimonial';


const HomeCuda = (props) => {
    const [documento, setDocumento] = useState("");

    const shoot = () => {
        alert("Great Shot!");
    }
    console.log(props.usuario)

    return (

        <div>
            <h3>Seleccione el documento de Secretaria de Curia que quiere crear</h3>

            {
                (() => {
                    if (props.usuario === 'CUDA') {
                        return (
                            <>

                                <div className="row">
                                   <h1>Documentos de Secretaria de Curia en proceso de elaboracion</h1>
                                </div>
                            </>

                        )
                    } else if ('b' === 'b') {
                        return (
                            <p>Hello</p>
                        )
                    } else {
                        return (
                            <p>Bye</p>
                        )
                    }
                })()
            }




        </div>




    )
}

export default HomeCuda;