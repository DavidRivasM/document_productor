import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoCartaNulidad = (props) => {

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
        <Page size="A4" style={{
          padding: "65px"
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

            <Text style={{ padding: "2px", fontSize: "12px" }}>Pbro. {props.vicario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Vicario Judicial de Primera Instancia</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Tribunal Eclesiástico Provincia de Costa Rica</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={styles.normalText}>Paz y Bien</Text>
            <Text style={styles.normalText}>Muy estimado Padre, por medio de la presente de manera respetuosa quisiera
              presentarle el caso del Sr. {props.solicitante}, ced: {props.cedSolicitante}, vecino de: {props.residenciaSolicitante} de la {props.parroquiaSolicitante}, quien en días pasados me visitó en la oficina de {props.lugar} con el fin de buscar asesoría
              sobre el proceso de estudio de la posible nulidad matrimonial en su relación sacramental con
              el Sr. o Sr/a. {props.conyugueSolicitante}, céd: {props.cedConyugue}, vecino/a de: {props.residenciaConyugue}.</Text>

            <Text style={styles.normalText}>Estimados, todos los detalles de su caso, considero suficiente el argumento que se ha
              presentado para establecer posibles causales de nulidad matrimonial, en las condiciones que
              evaluará usted con prudencia.</Text>

            <Text style={styles.normalText}>Por las atenciones a la presente, gracias y encomendando a Dios sus intenciones se
              despide, en Cristo Buen Pastor,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>_____________________________________</Text>
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

export default ProductoCartaNulidad;