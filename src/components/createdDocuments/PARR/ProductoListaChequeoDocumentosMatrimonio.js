import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoListaChequeoDocumentosMatrimonio = (props) => {

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
    boldText: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "2px"
    },
    boldText2: {
      fontSize: "10px",
      margin: "auto",
      fontFamily: "OpenSans",
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

    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row"
    },
    tableRow2: {
      margin: "auto",
      flexDirection: "row",
      backgroundColor: 'rgb(205, 92, 92)'
    },
    tableCol: {
      width: "4%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },

    tableCo2: {
      width: "80%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },

    tableCo3: {
      width: "8%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },

    tableCell: {
      margin: 2,
      fontSize: "12px"
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
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "655px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "655px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>

            <Text style={styles.boldText}>LISTA DE CHEQUEO DE DOCUMENTOS</Text>
            <Text style={styles.boldText}>Documentos enviados a la Parroquia</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>        </Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-LAS</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>        </Text>


            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px", margin: "auto" }}>En celebración del sacramento del matrimonio de:</Text>
            <Text style={styles.boldText}>{props.nombreNovio} y {props.nombreNovia}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px", margin: "auto" }}>Con fecha de celebración de la boda el día: {props.fechaMatrimonio}. </Text>

            <Text style={{ fontSize: "12px", lineHeight: "2px" }}>Con una “x” se indican los documentos enviados a la parroquia {props.parroquiaRemitente}, el día {props.fechaDia}.</Text>
            <Text style={{ fontSize: "12px", lineHeight: "2px" }}></Text>

            <View style={styles.table}>
              <View style={styles.tableRow2}>
                <View style={styles.tableCol}>
                  <Text style={styles.boldText2}>N°</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.boldText2}>Documentos</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.boldText2}>Novio</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.boldText2}>Novia</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>1</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Constancia de sacramentos recibidos para efectos del matrimonio</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>2</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Acta matrimonial</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>3</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Declaración jurada o soltería del país de origen</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>4</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Para quién ya estuvo casado, certificación digitalizada de todos los matrimonios y divorcios</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>5</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Fotocopia del documento de identidad de los contrayentes</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>6</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Fotocopia del documento de identidad de los testigos</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>7</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Fotocopia del documento de identidad de los testigos</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>8</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Copia del certificado de catequesis matrimonial</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>9</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Expediente prematrimonial</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>10</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell}>Acta matrimonial</Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCo3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            </View>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>        </Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}> Entregado en: {props.parroquia}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}> Por: {props.personaEntrega}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>        </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}> Recibido en: {props.lugarRecibe}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}> Por: {props.personaRecibe}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}> Firma:</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>        </Text>
            <Text style={{ padding: "2px", fontSize: "12px" }} >___________________________</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>        </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "0.5px" }}>        </Text>


            <Text style={{ fontSize: "12px", marginLeft: "auto", color: 'gray' }} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Correo electrónico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Página web: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoListaChequeoDocumentosMatrimonio;