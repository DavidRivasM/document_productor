import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../styles/home.css'
import escudocuria from '../../images/escudocuria.png'; 
import GreatVives from '../../styles/fonts/GreatVibes.ttf'

const ProductoDM = (props) => {

// Register font
Font.register({ family: 'GreatVives', src: GreatVives });

  const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight:"2px"
    },
    titleText: {
      fontSize: "28px",
      margin: "auto" ,  
      color: 'gray',
      fontFamily: "GreatVives"
    }
  });

  return (
    <>
      <Document >
        <Page size="A4" style={{
          display: "flex",
          padding: "65px",
          textAlign: "justify",
          
        }}>
          <View id="Post">
          <Image
            src={escudocuria}
            alt="random image"
            style={{ width: "80px", height: "80px", position: "absolute", bottom: "625px" }}
          />
          <Image
            src={props.image}
            alt="random image"
            style={{ width: "80px", height: "80px", position: "absolute", bottom: "625px", right: "5px" }}
          />

            <Text style={ styles.titleText }>Diocesis de Alajuela Costa Rica</Text>
            <Text style={ styles.titleText }>{props.parroquia}</Text>
            <Text style={{ margin: "auto"}} >_________________________________________</Text>
            <Text style={{ margin: "auto", padding: "2px" , fontSize: "15px", lineHeight:"2px", fontWeight: "bold" }}>Delegacion matrimonial</Text>

            <Text style={{ padding: "2px", fontSize: "12px"}}>{props.codigo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>Pbro. {props.cura},</Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Por la presente es mi deseo saludarle y desearle paz y bien. El suscrito, Pbro. {props.cura}, Cura Parroco de {props.parroquia}, conforme a los canones 1108 y 1152, envio cordialmente la delegacion para que bendiga la union matrimonial de los senores:</Text>

            <Text style={{ margin: "auto", padding: "5px", fontSize: "12px", lineHeight:"2px" }}>{props.novio} y {props.novia}</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>El dia {props.fechaMatrimonio}.</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Ellos se presentaron el dia {props.fechaPresentacion} en la {props.parroquia}, cuya administracion tengo a cargo. No encontrando ningun impedimento, procedemos a enviarle el expediente matrimonial y los documentos para su respectiva inscripcion.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Deseandoles paz y bien,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ paddingTop: "2px", fontSize: "12px" }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight:"1.5px" }}>Pbro. {props.cura}</Text>
            <Text  style={{ fontSize: "12px", lineHeight:"1.5px" }}>Cura Parroco de {props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight:"1.5px" }} >Diocesis de Alajuela</Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{  fontSize: "12px", marginLeft: "auto"}} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray'}}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray'}}>Correo electronico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray'}}>Direccion: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoDM;