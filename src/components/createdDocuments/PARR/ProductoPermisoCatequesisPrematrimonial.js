import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoPermisoCatequesisPrematrimonial = (props) => {

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
    boldText2: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "1px"
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

          <View>
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

            <Text style={styles.boldText}>PERMISO PARA CATEQUESIS PRE-MATRIMONIAL</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>Pbro. {props.destinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Cura Párroco</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>{props.lugarTrabajoDestinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Estimado presbítero,</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Por la presente es mi deseo saludarlo y desearle Paz y Bien en su Ministerio Sacerdotal. El Suscrito, Pbro. {props.cura}, Cura Párroco, Vicario parroquial o sacerdote autorizado de {props.parroquia}, autoriza a los señores:</Text>

            <Text style={styles.boldText2}>{props.esposo}</Text>
            <Text style={styles.boldText2}>Cédula: {props.cedEsposo}</Text>
            <Text style={styles.boldText2}>Y</Text>
            <Text style={styles.boldText2}>{props.esposa}</Text>
            <Text style={styles.boldText2}>Cédula: {props.cedEsposa}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Quienes son vecinos y feligreses de esta comunidad parroquial; para que realicen en su parroquia los cursos de preparación al Sacramento del Matrimonio, debido a las siguientes razones: {props.razon}. Siempre y cuando todos los requisitos estén en orden. Sin más, por el momento, se despide su servidor en Cristo.
            </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>

            <Text style={{ fontSize: "12px", margin: "auto" }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Cura Párroco, Vicario parroquial o sacerdote autorizado</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>{props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Diocesis de Alajuela</Text>

          </View>

          <View  style={{
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

export default ProductoPermisoCatequesisPrematrimonial;