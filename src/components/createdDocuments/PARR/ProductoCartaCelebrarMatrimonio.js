import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoCartaCelebrarMatrimonio = (props) => {

  Font.registerHyphenationCallback(word => {
    // Return entire word as unique part
    return [word];
  });

  // Register font
  Font.register({ family: 'GreatVives', src: GreatVives });
  Font.register({ family: 'OpenSans', src: OpenSans });

  // Styles register
  const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight: "2px"
    },
    titleText: {
      fontSize: "25px",
      margin: "auto",
      color: 'gray',
      fontFamily: "GreatVives"
    },
    normalText: {
      textAlign: "justify",
      padding: "2px",
      fontSize: "12px",
      lineHeight: "2px"
    },
    boldText: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "2px"
    },
    table1: {
      display: "table",
      width: "100px",
      height: '100px',
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      position: "absolute",
      right: "50px",
      bottom: "300px"
    },
    table2: {
      display: "table",
      width: "100px",
      height: '100px',
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      position: "absolute",
      left: "50px",
      bottom: "300px"
    },
    footer: {
      fontSize: "9px",
      color: 'gray'
    }
  });

  return (
    <>
      <Document >
        <Page size="A4" wrap={false} style={{
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
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>Pbro. {props.destinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>{props.lugarTrabajoDestinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Estimado presbítero,</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={styles.normalText}>Por medio de las presentes, el suscrito Pbro. {props.cura} de la Diócesis de Alajuela, céd. {props.cedCura}, residente de la {props.parroquia}, solicita respetuosamente la respectiva delegación de su parte a tenor del Cann. 1111 con el fin de presenciar el matrimonio de {props.esposo} ced. {props.cedEsposo} y {props.esposa} ced. {props.cedEsposa}, fijado para el {props.fechaMatrimonio} en la iglesia de {props.lugarMatrimonio}.</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>
            <Text style={styles.normalText}>Por las atenciones a la presente, gracias y encomendado a Dios sus intenciones se despide, en Cristo Buen Pastor,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>

            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>_______________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Cura Párroco, Vicario parroquial o sacerdote autorizado</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>{props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Diocesis de Alajuela</Text>
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

export default ProductoCartaCelebrarMatrimonio;