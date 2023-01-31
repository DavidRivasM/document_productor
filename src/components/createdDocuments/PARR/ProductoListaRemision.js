import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoListaRemision = (props) => {



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

    // Estilos del cuadro 1
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
    tableCol: {
      width: "35%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tableCo2: {
      width: "65%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tableCell: {
      margin: 2,
      fontSize: "10px",
      fontFamily: "OpenSans",
      marginTop: "auto",
      marginBottom: "auto",
    },
    tableCell2: {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: 2,
      fontSize: "10px",
    },

    // Estilos del cuadro 2

    Col: {
      width: "5%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    Col2: {
      width: "10%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    Col3: {
      width: "35%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    Col4: {
      width: "10%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    Col5: {
      width: "10%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    Col6: {
      width: "30%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tableCell3: {
      margin: 4,
      fontSize: "10px",
      fontFamily: "OpenSans",
      lineHeight: "2px",
      marginTop: "auto",
      marginBottom: "auto",
    },

    // Estilos del cuadro 3

    tableRow: {
      margin: "auto",
      flexDirection: "row"
    },
    tableRow2: {
      margin: "auto",
      flexDirection: "row",
      backgroundColor: "gray",
      fontSize: "10px",
      fontFamily: "OpenSans",
      textAlign: "center"
    },
    columna1: {
      width: "100%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },


  });

  return (
    <>
      <Document >
        <Page size="A4" wrap={false} style={{
          display: "flex",
          padding: "65px",
        }}>

          <View id="header">
            <Image
              src={escudocuria}
              alt="random image"
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "55px" }}
            />
            <Image
              src="https://i.ibb.co/sR3thy1/archivo-Diocesano.png"
              alt="random image"
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "55px", right: "1px" }}
            />
            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>
          </View>

          <View id="body">
            <Text style={styles.boldText}>LISTA DE REMISIÓN DE DOCUMENTOS</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto", lineHeight: "2px" }}>{props.codigo}-LRD-{props.consecutivo}</Text>

            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Unidad administrativa que transfiere:</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell2}>{props.unidad}</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Realizada por:</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell2}>{props.responsable}</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Fecha de envío:</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell2}>{props.fechaEnvio}</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Número de tranferencia:</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell2}>T. {props.numeroTransferencia}</Text>
                </View>
              </View>
            </View>

            {/* Cuadro 2 sobre el contenido de la lista de remision */}
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto", lineHeight: "1px" }}> </Text>

            <View style={styles.table}>

              <View style={styles.tableRow}>
                <View style={styles.Col}>
                  <Text style={styles.tableCell}>N°</Text>
                </View>
                <View style={styles.Col2}>
                  <Text style={styles.tableCell}>N° cajas/sobres</Text>
                </View>
                <View style={styles.Col3}>
                  <Text style={styles.tableCell}>Contenido</Text>
                </View>
                <View style={styles.Col4}>
                  <Text style={styles.tableCell}>Fechas extremas</Text>
                </View>
                <View style={styles.Col5}>
                  <Text style={styles.tableCell}>Cantidad</Text>
                </View>
                <View style={styles.Col6}>
                  <Text style={styles.tableCell}>Observaciones</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.Col}>
                  <Text style={styles.tableCell3}>1</Text>
                </View>
                <View style={styles.Col2}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col3}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col4}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col5}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col6}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.Col}>
                  <Text style={styles.tableCell3}>2</Text>
                </View>
                <View style={styles.Col2}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col3}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col4}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col5}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col6}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.Col}>
                  <Text style={styles.tableCell3}>3</Text>
                </View>
                <View style={styles.Col2}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col3}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col4}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col5}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col6}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.Col}>
                  <Text style={styles.tableCell3}>4</Text>
                </View>
                <View style={styles.Col2}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col3}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col4}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col5}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col6}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.Col}>
                  <Text style={styles.tableCell3}>5</Text>
                </View>
                <View style={styles.Col2}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col3}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col4}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col5}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
                <View style={styles.Col6}>
                  <Text style={styles.tableCell3}>                                                                                                                         </Text>
                </View>
              </View>
            </View>

            {/* Cuadro 3 sobre unidad que hace transferencia */}
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto", lineHeight: "1px" }}> </Text>

            <View style={styles.table}>
              <View style={styles.tableRow2}>
                <View style={styles.columna1}>
                  <Text style={styles.tableCell}>USO EXCLUSIVO DE UNIDAD ADMINISTRATIVA QUE HACE TRANSFERENCIA</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell3}>Elaborado por:</Text>
                </View>

                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell3}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell3}>Sacerdote responsable:</Text>
                </View>

                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell3}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell3}>Firma del sacerdote:</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell3}></Text>
                </View>
              </View>
            </View>

            {/* Cuadro 4 sobre Archivo diocesano */}
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto", lineHeight: "1px" }}> </Text>

            <View style={styles.table}>
              <View style={styles.tableRow2}>
                <View style={styles.columna1}>
                  <Text style={styles.tableCell}>USO EXCLUSIVO DE ARCHIVO DIOCESANO</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell3}>Colaborador Archivo Diocesano:</Text>
                </View>

                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell3}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell3}>Fecha de recibido:</Text>
                </View>

                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell3}></Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell3}>Firma de recibido:</Text>
                </View>
                <View style={styles.tableCo2}>
                  <Text style={styles.tableCell3}> </Text>
                </View>
              </View>
            </View>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto", lineHeight: "1px" }}> </Text>
            <Text style={styles.boldText}>2 originales: Unidad Administrativa que transfiere / Archivo Diocesano</Text>






          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoListaRemision;