import React, { useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProclamaTestP from '../../createdDocuments/PARR/ProclamaTestP';



const ProclamaTest = (props) => {
    const [file, setFile] = useState('')

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        
    }

    function consoleLog (e) {
        console.log(file)
    }
    return (
        <div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">

                        <input type="file" onChange={handleChange} />
                        <img src={file} alt='Avatar' />
                    </div>
                </div>
            </div>
            <button type="button" onClick={consoleLog} className="btn btn-danger mb-1">Console</button>
            <PDFDownloadLink
                document={<ProclamaTestP file={file} />}
                fileName="proclama test"
                pdfVersion="1.7"
            >
                <button type="button" className="btn btn-danger mb-1">Descargar documento</button>
            </PDFDownloadLink>
        </div>
    )
}

export default ProclamaTest