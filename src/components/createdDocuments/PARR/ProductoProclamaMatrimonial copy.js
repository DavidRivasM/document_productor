import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoProclamaMatrimonial = (props) => {

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
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "545px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "545px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>
            <Text style={{ margin: "auto", padding: "2px", fontSize: "15px", lineHeight: "2px", fontWeight: "bold" }}>PROCLAMA MATRIMONIAL</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>{props.codigo}-PRM-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Publicacion del: {props.fechaInicioProclama}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Al: {props.fechaFinProclama}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <View style={styles.table1}>
            </View>
            <Text>Nombre del contrayente: {props.nombreHombre}</Text>
            <Text>Nacionalidad: {props.nacionalidadHombre}</Text>
            <Text>Residente en la parroquia de: {props.parroquiaHombre}</Text>
            <View style={styles.table2}>
            </View>
            <Text>Nombre de la contrayente: {props.nombreMujer}</Text>
            <Text>Nacionalidad: {props.nacionalidadMujer}</Text>
            <Text>Residente en la parroquia de: {props.parroquiaMujer}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "3px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "3px" }}>                     </Text>


            <Text style={{ padding: "2px", fontSize: "12px" }}>
              Pretenden contraer matrimonio canónico el día {props.fechaMatrimonio}. En el templo de {props.parroquia} de la Diócesis de Alajuela.
            </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>En el código de derecho canónico establece en el canon 1069, que “todos los fieles están obligados a manifestar al párroco o al ordinario del lugar, antes de la celebración del matrimonio, los impedimentos de que tengan noticias” por lo tanto si conoce de algo que se oponga a la celebración válida y lícita de este matrimonio comunicarlo lo antes posible al párroco
            </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "3px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "3px" }}>                     </Text>


            <Text style={{ paddingTop: "2px", fontSize: "12px", margin: "auto" }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Cura Párroco de {props.parroquia}</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
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

export default ProductoProclamaMatrimonial;