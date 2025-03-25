// src/components/ExportButton.js
import React from "react";
import html2canvas from "html2canvas";

const ExportButton = ({ collageRef }) => {
  const handleDownload = () => {
    if (collageRef.current) {
      html2canvas(collageRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg");
        link.download = "collage.jpg";
        link.click();
      });
    }
  };

  return (
    <button className="export-button" onClick={handleDownload}>
      Download Collage
    </button>
  );
};

export default ExportButton;