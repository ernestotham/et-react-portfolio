import React, { useState } from "react";
import { useCallback, useRef } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import pdfFile from "../../docs/ErnestoResume2022.pdf";
import { GoDesktopDownload } from "react-icons/go";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyResume() {
  const [numPages, setNumPages] = useState(3);
  var [pageNumber, setPageNumber] = useState(1);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
  ];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onPressDonwload = () => { window.location.assign(pdfFile, '_blank') }

  const handleClick = (event) => {
    if (event === '1') {
      setPageNumber(1)
    }

    else if (event === '3') {
      setPageNumber(3)
    }

    else if (event === '2') {
      setPageNumber(2)
    };

  };

  return (
    <div className="d-flex flex-column justify-content-center mt-5 mb-5 py-3">
      <div className="d-flex justify-content-center py-3">
        <br />
        <div className="d-flex justify-content-center" >
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
                onChange={(e) => {
                  setRadioValue(e.currentTarget.value)
                  handleClick(e.currentTarget.value)


                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <span>" "</span>
        <span>" "</span>
        <span>" "</span>
        <div className="d-flex justify-content-center">
          <Button variant="secondary" className="mb-2 mt-5"
            onPress={onPressDonwload}
            title="D"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            value="Download"
            onClick={onPressDonwload}>Download


        </Button>
        </div>

        <br />

      </div>
      <div className="d-flex justify-content-center">
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>

      </div>
      <p className="d-flex  justify-content-center" style={{ color: "white" }}>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}


export default MyResume;
