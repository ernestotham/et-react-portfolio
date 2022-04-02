import React, { useState } from "react";
import { useCallback, useRef } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import pdfFile from "../../docs/ErnestoResume2022.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyResume() {
    const [numPages, setNumPages] = useState(3);
    const [pageNumber, setPageNumber] = useState(1);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: '<', value: '1' },
      { name: 'Download', value: '2' },
      { name: '>', value: '3' },
    ];
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
        <div className="d-flex flex-column justify-content-center mt-5 mb-5 py-3">
         <div className="d-flex justify-content-center">
         <br />
      <ButtonGroup className="mb-2 mt-5">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />

         </div>
      <div className="d-flex justify-content-center">
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        
      </div>
      <p className="d-flex  justify-content-center" style={{color:"white"}}>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
  

export default MyResume;
