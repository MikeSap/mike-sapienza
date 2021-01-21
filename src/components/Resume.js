import React from "react";
import { Document, Page } from "react-pdf";
import res from "./pdf/mikesap.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const Resume = (props) => {
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
  };

  return (
    <>
      <Document file={res}>
        <Page pageNumber={1} onLoadSuccess={removeTextLayerOffset} />
      </Document>
      <div className="download-pdf">
        <a target="_blank" rel="noopener noreferrer" href={res}>
          View file...
        </a>
      </div>
    </>
  );
};

export default Resume;
