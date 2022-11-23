import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoBoletaInscripcionCatequesisBautismal = (props) => {

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
      padding: "2px",
      lineHeight: "1px"
    },
    boldText2: {
      fontSize: "12px",
      fontFamily: "OpenSans",
      padding: "2px"
    },
    boldText3: {
      fontSize: "12px",
      fontFamily: "OpenSans",
      paddingLeft: "50px"
    },
    boldText4: {
      fontSize: "12px",
      paddingLeft: "75px"
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
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "570px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "570px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>

            <Text style={styles.boldText}>Solicitud de inscripción - Catequesis Bautismal</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={styles.boldText2}>1. Generalidades</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Fecha de inscripcion: {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={styles.boldText2}>2. Datos personales</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Nombre y apellidos: {props.solicitante}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Numero de cedula: {props.cedSolicitante}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={styles.boldText2}>3. Medios de comunicacion y senalamiento</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Lugar de residencia: {props.residenciaSolicitante}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Telefono: {props.telefonoSolicitante}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Correo electronico: {props.correoSolicitante}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={styles.boldText2}>4. Sobre la catequesis</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Asistirá a la catequesis bautismal en calidad de: {props.calidadAsistencia}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Estado civil: {props.estadoCivil}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>¿Participa o ha participado en actividades de la Iglesia?: {props.participacionIglesia}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>De ser afirmativa la respuesta indique cuales: {props.descripcionParticipacionIglesia}</Text>



            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px", margin: "auto" }}>_________________________________</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px", margin: "auto" }}>Firma del catequizando</Text>

           
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoBoletaInscripcionCatequesisBautismal;