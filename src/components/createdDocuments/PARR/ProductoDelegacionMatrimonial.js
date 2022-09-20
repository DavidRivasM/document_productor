import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png'; 
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'

const ProductoDelegacionMatrimonial = (props) => {

// Register font
Font.register({ family: 'GreatVives', src: GreatVives });

  const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight:"2px"
    },
    titleText: {
      fontSize: "25px",
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
            style={{ width: "78px", height: "78px", position: "absolute", bottom: "622px" }}
          />
          <Image
            src={props.image}
            alt="random image"
            style={{ width: "78px", height: "78px", position: "absolute", bottom: "622px", right: "1px" }}
          />

            <Text style={ styles.titleText }>Diócesis de Alajuela Costa Rica</Text>
            <Text style={ styles.titleText }>{props.parroquia}</Text>
            <Text style={{ margin: "auto"}} >_________________________________________</Text>
            <Text style={{ margin: "auto", padding: "2px" , fontSize: "15px", lineHeight:"2px", fontWeight: "bold" }}>Delegación matrimonial</Text>

            <Text style={{ padding: "2px", fontSize: "12px"}}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>Pbro. {props.cura},</Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Por la presente es mi deseo saludarle y desearle paz y bien. El suscrito, Pbro. {props.cura}, Cura Párroco de {props.parroquia}, conforme a los canones 1108 y 1152, envío cordialmente la delegación para que bendiga la unión matrimonial de los señores:</Text>

            <Text style={{ margin: "auto", padding: "5px", fontSize: "12px", lineHeight:"2px" }}>{props.novio} y {props.novia}</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>El dia {props.fechaMatrimonio}.</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Ellos se presentaron el día {props.fechaPresentacion} en la {props.parroquia}, cuya administración tengo a cargo. No encontrando ningún impedimento, procedemos a enviarle el expediente matrimonial y los documentos para su respectiva inscripción.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Deseandoles paz y bien,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ paddingTop: "2px", fontSize: "12px" }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight:"1.5px" }}>Pbro. {props.cura}</Text>
            <Text  style={{ fontSize: "12px", lineHeight:"1.5px" }}>Cura Párroco de {props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight:"1.5px" }} >Diócesis de Alajuela</Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{  fontSize: "12px", marginLeft: "auto",  color: 'gray'}} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray'}}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray'}}>Correo electrónico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray'}}>Dirección: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoDelegacionMatrimonial;