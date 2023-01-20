import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoDelegacionMatrimonial = (props) => {

  Font.registerHyphenationCallback(word => {
    // Return entire word as unique part
    return [word];
  });

  // Register font
  Font.register({ family: 'GreatVives', src: GreatVives });
  Font.register({ family: 'OpenSans', src: OpenSans });


  const styles = StyleSheet.create({
    normalText: {
      textAlign: "justify",
      padding: "2px",
      fontSize: "12px",
      lineHeight: "2px"
    },
    titleText: {
      fontSize: "25px",
      margin: "auto",
      color: 'gray',
      fontFamily: "GreatVives"
    },
    boldText: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "2px"
    },
    footer: {
      fontSize: "9px",
      color: 'gray'
    }
  });

  return (
    <>
      <Document >
        <Page size="A4" style={{
          padding: "65px",
        }}>
          <View id="header">
            <Image
              src={escudocuria}
              alt="random image"
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "55px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "55px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>

          </View>
          <View id="body">
            <Text style={styles.boldText}>Delegación matrimonial {props.tipo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Pbro. {props.destinatario},</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>

            <Text style={styles.normalText}>Por la presente es mi deseo saludarle y desearle paz y bien. El suscrito, Pbro. {props.cura}, Cura Párroco, Vicario parroquial o sacerdote autorizado de {props.parroquia}, conforme a los Cann. 1108 y 1152, envío cordialmente la delegación para que bendiga la unión matrimonial de los señores:</Text>

            <Text style={styles.boldText}>{props.novio} y {props.novia}</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>     </Text>
            <Text style={styles.normalText}>El día {props.fechaMatrimonio}.</Text>
            <Text style={styles.normalText}>Ellos se presentaron el día {props.fechaPresentacion} en la {props.parroquia}, cuya administración tengo a cargo. No encontrando ningún impedimento, procedemos a enviarle el expediente matrimonial y los documentos para su respectiva inscripción.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Deseándoles paz y bien,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ paddingTop: "2px", fontSize: "12px", margin: "auto" }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Cura Párroco, Vicario parroquial o sacerdote autorizado</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>{props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }} >Diócesis de Alajuela</Text>
          </View>
         
          <View id="footer" style={{
            position: 'absolute',
            right: "40",
            bottom: "40px"
          }}>
            <Text style={styles.footer} fixed>Tel: {props.tel}</Text>
            <Text style={styles.footer} fixed>Correo electrónico: {props.email}</Text>
            <Text style={styles.footer} fixed>Página web: {props.web}</Text>
          </View>

        </Page>
      </Document>
    </>
  );
}

export default ProductoDelegacionMatrimonial;