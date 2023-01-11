import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoCartaBuenasCostumbres = (props) => {

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
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "645px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "645px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>Sr: {props.destinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>    </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Estimado presbítero, por la presente es mi deseo saludarlo y desearle Paz y Bien en su Ministerio Sacerdotal. El Suscrito, Pbro. {props.cura}, Cura Párroco de {props.parroquia}, hace constar que el senor\señora:</Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px"  }}>   </Text>
            <Text style={styles.boldText}>{props.nombreFeligres}</Text>
            <Text style={styles.boldText}>CEDULA: {props.cedFeligres}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px"  }}>   </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Es vecina y feligrés de esta comunidad parroquial; específicamente del sector de {props.residenciaFeligres}. Hago constar que no hay motivos para dudar de sus buenas costumbres y modo de vida ante la comunidad.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Sin más, por el momento, se despide su servidor en Cristo,</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>_________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Cura Párroco de {props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto" }}>Diocesis de Alajuela</Text>

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

export default ProductoCartaBuenasCostumbres;