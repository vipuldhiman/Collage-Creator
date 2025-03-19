import React from "react";
import html2canvas from "html2canvas";

const ExportButton = ({ collageRef }) => {
    const handleExport = async () => {
        try {
            if (collageRef.current) {
                const canvas = await html2canvas(collageRef.current);
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "collage.png";
                link.click();
            }
        } catch (error) {
            console.log("Export failed:", error);
        }
    };

    return <button onClick={handleExport}>Download Collage</button>;
};

export default ExportButton;