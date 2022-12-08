import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoPortadaEnvioDocumentos = (props) => {
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
      fontSize: "15px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "4px"
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      marginTop: "20px",
      textAlign: "center",

    },
    tableRow: {
      margin: "auto",
      flexDirection: "row"
    },
    tableCol: {
      width: "60%",
      margin: "auto",
      textAlign: "center"
    },
    tableCol2: {
      width: "20%",
    },
  });

  return (
    <>

      <Document >
        <Page size="A4" style={{
          display: "flex",
          padding: "65px",
          textAlign: "center",

        }}>
          <Text style={styles.baseText}>          </Text>
          <Text style={styles.baseText}>          </Text>
          <Text style={styles.baseText}>          </Text>
          <Text style={styles.baseText}>          </Text>
          <Text style={styles.baseText}>          </Text>

          <View style={styles.table}>
          <Text style={styles.baseText}>  </Text>
            <View style={styles.tableRow}>
              <Image
                src={escudocuria}
                alt="random image"
                style={{ width: "65px", height: "65px", position: "absolute", left: "-100px", top: "-25px" }}
              />
              <Image
              src={props.image}
              alt="random image"
              style={{ width: "65px", height: "65px", position: "absolute", right: "-100px", top: "-25px" }}
            />
              <Text style={styles.baseText}>  </Text>
              <Text style={styles.boldText}>Diocesis de Alajuela - Costa Rica</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.boldText}>{props.parroquia}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={{}}>____________________________</Text>
            </View>
          
          
            <Text style={styles.baseText}>  </Text>
          
            <View style={styles.tableRow}>

              <Text style={styles.baseText}>A Tribunal Eclesiastico Provincial de Costa Rica</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.baseText}>Sede Conferencia Episcopal, San jose, CR</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.baseText}>Apartado: 1010101</Text>
            </View>

            <Text style={styles.baseText}> </Text>
            <View style={styles.tableRow}>
              <Text style={styles.boldText}>Caso: {props.nombreActor}-{props.nombreConvenida}</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={{ fontSize: "10px", color: "gray" }}>Apellidos (Actor) (Convenida)</Text>
            </View>

            <Text style={styles.baseText}>  </Text>



          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoPortadaEnvioDocumentos;