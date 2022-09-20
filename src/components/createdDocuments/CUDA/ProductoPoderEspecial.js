import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'

const ProductoPoderEspecial = (props) => {

  // Register font
  Font.register({ family: 'OpenSans', src: OpenSans });


  const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight: "2px"
    },
    titleText: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans"
    }
  });

  return (
    <>
      <Document pdfVersion='1.7'>
        <Page size="A4" style={{
          display: "flex",
          padding: "65px",
          textAlign: "justify",

        }}>
          <View id="Post">
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>CUDA-SOL-{props.consecutivo}</Text>
            <Text style={styles.titleText}>    </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Señores:</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>{props.destinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}></Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Estimados senores:</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}></Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>
              El Suscrito, Pbro. {props.apoderado}, cédula {props.cedApoderado}, Apoderado Generalísimo sin límite de suma de TEMPORALIDADES DE LA IGLESIA CATÓLICA DIÓCESIS DE ALAJUELA, cédula jurídica tres - cero diez - cero cuarenta y cinco mil doscientos nueve, por este medio solicito a {props.destinatario} la {props.solicitud}.

            </Text>



            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Dado en la Curia Diocesana de Alajuela, a los {props.fechaSolicitud}. 
</Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>


            <Text style={{ fontSize: "12px", marginLeft: "auto" }} ></Text>
            <Text style={{ fontSize: "12px" }}>Pbro. {props.apoderado}</Text>
            <Text style={{ fontSize: "12px" }}>APODERADO GENERALÍSIMO</Text>
            <Text style={{ fontSize: "12px" }}>Temporalidades Iglesia Católica Diócesis de Alajuela</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoPoderEspecial;