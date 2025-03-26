import React from "react";
import html2canvas from "html2canvas";

const ExportButton = ({ collageRef }) => {
  const handleDownload = async () => {
    try {
      if (!collageRef || !collageRef.current) {
        console.error("collageRef is undefined or null");
        return;
      }

      const canvas = await html2canvas(collageRef.current);
      console.log("Mocked Canvas Object:", canvas);

      if(!canvas || !canvas.toDataURL) {
        console.log("html2canvas did not return a valid object");
        return;
      }
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      link.download = "collage.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error capturing collage:", error);
    }
  };

  return (
    <button className="export-button" onClick={handleDownload}>
      Download Collage
    </button>
  );
};

export default ExportButton;