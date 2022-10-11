import React from 'react'
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";

const ProclamaTestP = (props) => {
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
                                src={props.file}
                                alt="random image"
                                style={{ width: "78px", height: "78px", position: "absolute", bottom: "622px" }}
                            />
                            <Text>Test de la proclama</Text>
                        </View>
                    </Page>
                </Document>
            </>
     
    )
}

export default ProclamaTestP