import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const ProductoCN = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>Diocesis de Alajuela Costa Rica</h1>
        <h3>{props.parroquia}</h3>
        <hr/>
        <h5>Delegacion matrimonial</h5>
        <p>codigo: {props.codigo}</p>
        <p>{props.lugar}, {props.fecha}</p>
        <p>Pbro. {props.cura}</p>
        <p>Por la presente es mi deseo saludarle y desearle paz y bien. El suscrito, Pbro. {props.cura}, cura parroco de {props.parroquia}, conforme a los canones 1108 y 1152, envio cordialmente la delegacion para que bendiga la union matrimonial de los senores:</p>
        <h5>{props.novio} y {props.novia}</h5>
        <p>El dia {props.fechaMatrimonio}. Ellos se presentaron el dia {props.fechaPresentacion} a las {props.horaPresentacion} en el templo parroquial de {props.parroquia}, parroquia que pastoreo y no encontrando ningun impedimento, procedemos a enviar el expediente matrimonial y los documentos para su respectiva inscripcion.</p>
        <br/>
        <p>Sin mas, que el senor de las mies derrame copiosas bendiciones sobre usted y sus dignas labores pastorales, se despide,</p>
        <br/>
        <p>Pbro. {props.cura}</p>
        <p>Cura Parroco de {props.parroquia}</p>
        <p>Diocesis de Alajuela</p>
        <br/>
        <br/>
      </div>
      <Pdf targetRef={ref} filename={props.codigo}>
        {({ toPdf }) => <button onClick={toPdf}>Capturar como PDF</button>}
      </Pdf>
    </>
  );
}

export default ProductoCN;