import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'
import OpenSansItalic from '../../../styles/fonts/OpenSans-Italic.ttf'


const ProductoDeclaracionJuradaConfirmacion = (props) => {

  // Register font
  Font.register({ family: 'GreatVives', src: GreatVives });
  Font.register({ family: 'OpenSans', src: OpenSans });
  Font.register({ family: 'OpenSansItalic', src: OpenSansItalic });


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
    italicText: {
      fontSize: "12px",
      marginLeft: "25px",
      fontFamily: "OpenSansItalic",
      lineHeight: "2px" 
    },
    boldText: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "2px"
    },
    boldText2: {
      fontSize: "12px",
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
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "680px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "70px", height: "70px", position: "absolute", bottom: "680px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>
            <Text style={styles.boldText}>Declaracion jurada</Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>
            <Text style={styles.boldText}>Para Verificar Constancia De Sacramento De La Confirmación</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>

            <Text style={styles.boldText2}>Art 1:</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>En este día, {props.fecha}, se presenta ante mí, Pbro. {props.cura}, Cura Párroco de {props.parroquia}, el solicitante: {props.persona}, cédula: {props.cedPersona}, quien asegura haber recibido el Sacramento de la Confirmación en el Templo de {props.lugarConfirmacion}, en el año {props.añoConfirmacion}, y no habiendo encontrado partida alguna de la misma, se procedió –bajo juramento- a levantar la siguiente Declaración:</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}> </Text>

            <Text style={styles.italicText}>“Yo {props.persona}, cedula: {props.cedPersona}, {props.edad}, {props.estadoCivil}, vecino de {props.residencia}, hijo o hija de {props.padrino} y {props.madrina}, Juro, por Dios y mi conciencia ser fiel a la verdad en cuanto manifiesto haber recibido el sacramento de la confirmación el {props.fechaConfirmacion}, {props.lugarConfirmacion}, por Mons. {props.obispoConfirmacion}, según el Rito de la Santa Iglesia Católica, aportando como prueba {props.pruebaConfirmacion}”.</Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}> </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Leída la Declaración anterior, la declarante la encontró correcta y el suscrito procede a incluirla en los libros de Confirmación de la Parroquia de {props.parroquia}, {props.lugar}, de donde soy Cura Párroco y me comprometo a enviar a la Parroquia de Bautismo la notificación de la misma.</Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>
            <Text style={styles.boldText2}>Art 2:</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>La presente Declaración Jurada tiene valor de constancia para los fines propios de los que se requiera el presente documento en trámites eclesiásticos dentro y fuera de la diócesis de Alajuela.</Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Sirve como testigo de la declaración y firma del acta, la señora {props.testigo}, cédula {props.cedTestigo}, en calidad de {props.calidadTestigo} quien también firma bajo estas líneas.
            </Text>


            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "5px" }}>                     </Text>
            <Text style={{ paddingTop: "2px", fontSize: "12px", margin: "auto" }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto"  }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto"  }}>Cura Párroco de {props.parroquia}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "4px" }}>                     </Text>
            <Text style={{ paddingTop: "2px", fontSize: "12px", margin: "auto"  }} >_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto"  }}>{props.testigo}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px", margin: "auto"  }}>Ced: {props.cedTestigo}</Text>


            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "5px" }}> </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}> </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "5px" }}> </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "5px" }}> </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "3px" }}> </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "12px" }}> </Text>

            <Text style={{ fontSize: "12px", marginLeft: "auto", color: 'gray' }} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Correo electrónico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Web: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoDeclaracionJuradaConfirmacion;