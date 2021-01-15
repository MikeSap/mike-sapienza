import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import res from "./pdf/mikesap.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


const Resume = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
  }

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  return (
    <>
      <Document
        file={res}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />;
      </Document>
      <div></div>
    </>
  );
};

export default Resume;
