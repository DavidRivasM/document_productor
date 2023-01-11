import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoConstanciaPrimeraComunion = (props) => {

  // Register font
  Font.register({ family: 'GreatVives', src: GreatVives });
  Font.register({ family: 'OpenSans', src: OpenSans });


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
      margin: "auto" , 
      fontFamily: "OpenSans",
      padding: "2px"
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
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "640px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "640px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>
            <Text style={styles.boldText}>Contancia de Primera Comunion</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-CCO-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>
            <Text style={styles.boldText}>A quien interese</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px" , lineHeight: "2px" }}>Por este medio yo, Pbro. {props.cura} ,Cura Párroco de {props.parroquia}, con cedula de identificacion {props.ced}, hago constar que el niño {props.persona}, realizó la primera comunión en esta parroquia en el año {props.añoComunion} según consta en el libro {props.libro}, folio {props.folio}, asiento {props.asiento}.</Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Agradeciendo la atención a la presente y rogando al Señor que derrame abundantes bendiciones sobre su persona y Ministerio, se despide su atento servidor:</Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px"}}>                     </Text>


            <Text style={{ paddingTop: "2px", fontSize: "12px", margin: "auto", margin: "auto" }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto", margin: "auto" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto", margin: "auto" }}>Cura Párroco de {props.parroquia}</Text>
           
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            
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

export default ProductoConstanciaPrimeraComunion;