import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoPermisoBautizarOtraParroquia = (props) => {

  Font.registerHyphenationCallback(word => {
    // Return entire word as unique part
    return [word];
  });

  // Register font
  Font.register({ family: 'GreatVives', src: GreatVives });
  Font.register({ family: 'OpenSans', src: OpenSans });

  // Styles register
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

            <Text style={styles.boldText}>PERMISO PARA BAUTIZAR OTRA PARROQUIA</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={styles.normalText}>Pbro. {props.destinatario}</Text>
            <Text style={styles.normalText}>Estimado presbíterio,</Text>

            <Text style={styles.normalText}>Por la presente es mi deseo saludarlo y desearle Paz y Bien en su Ministerio Sacerdotal. El Suscrito, Pbro. {props.autorizador}, Cura Párroco, Vicario parroquial o sacerdote autorizado de {props.parroquia}, autoriza a los señores {props.nombrePadre}, con número de cédula {props.cedPadre} y a {props.nombreMadre} con número de cédula {props.cedMadre} padres del niño (a); vecinos y feligreses de esta comunidad parroquial; para que bauticen en su Parroquia a su hijo/a:</Text>

            <Text style={styles.boldText}>{props.nombreNino}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>                     </Text>


            <Text style={styles.normalText}>Las razones que los mueven a bautizar en su parroquia son: {props.razon}. </Text>
            <Text style={styles.normalText}>Siempre y cuando todos los requisitos estén en orden.</Text>

            <Text style={styles.normalText}>Deseándole paz y bien,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>_______________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Pbro. {props.autorizador}</Text>
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

export default ProductoPermisoBautizarOtraParroquia;