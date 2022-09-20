import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'

const ProductoDeclaracionJurada = (props) => {

// Register font
Font.register({ family: 'OpenSans', src: OpenSans });


    const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight:"2px"
    },
    titleText: {
      fontSize: "12px",
      margin: "auto" , 
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
          <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
          <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto"}}>{props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto"}}>CUDA-DECLJR-{props.consecutivo}</Text>
            <Text style={ styles.titleText }>    </Text>

            <Text style={ styles.titleText }>DECLARACION JURADA</Text>
            <Text style={ styles.titleText }>    </Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Yo, Pbro. {props.apoderado}, con domicilio en {props.domicilio}, {props.direccion}, cédula de identidad No. {props.cedula} en mi condición de {props.puesto} de las Temporalidades de la Iglesia Católica Diócesis de Alajuela con cédula jurídica 3-010-045209 declaro bajo fé de juramento personal que: 
            </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}></Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}></Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>{props.contenido}
            </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}></Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Firmo en {props.lugarFirma} a las {props.horaFirma} horas del {props.fechaFirma}.
</Text>

        
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
          

            <Text style={{  fontSize: "12px", marginLeft: "auto"}} ></Text>
            <Text style={{ fontSize: "12px"}}>Pbro. {props.apoderado}</Text>
            <Text style={{  fontSize: "12px"}}>{props.puesto}</Text>
            <Text style={{  fontSize: "12px"}}>Temporalidades Iglesia Católica Diócesis de Alajuela</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoDeclaracionJurada;