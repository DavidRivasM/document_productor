import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoPermisoBautizarOtraParroquia = (props) => {

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
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "630px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "630px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>

            <Text style={styles.boldText}>PERMISO PARA BAUTIZAR OTRA PARROQUIA</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>Sr:</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Cura Parroco</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Pbr. {props.destinatario}</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Estimado presbítero, por la presente es mi deseo saludarlo y desearle Paz y Bien en su Ministerio Sacerdotal. El Suscrito, Pbro.{props.cura}, Cura Párroco de {props.parroquia}, autoriza a los señores {props.nombrePadre}, con número de cédula {props.cedPadre} y a {props.nombreMadre} con número de cédula {props.cedMadre} padres del niño (a); vecinos y feligreses de esta comunidad parroquial; para que bauticen en su Parroquia a su hijo/a:</Text>

            <Text style={styles.boldText}>{props.nombreNino}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>                     </Text>


            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px"}}>Las razones que los mueven a bautizar en su parroquia son: {props.razon}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px"  }}>Siempre y cuando todos los requisitos estén en orden.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Deseándole paz y bien,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>_______________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Cura Párroco de {props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Diocesis de Alajuela</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>


            <Text style={{ fontSize: "12px", marginLeft: "auto", color: 'gray' }} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Correo electrónico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Dirección: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoPermisoBautizarOtraParroquia;