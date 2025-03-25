import React, { useState, useRef } from "react";
import "./styles.css";
import ImageUploader from "./components/ImageUploader";
import CollageOptions from "./components/CollageOptions";
import Collage from "./components/Collage";
import ExportButton from "./components/ExportButton";

function App() {
  const [images, setImages] = useState([]);
  const [layout, setLayout] = useState("custom"); // Default to Custom
  const [customGrid, setCustomGrid] = useState("grid-2x2"); // Default custom layout
  const collageRef = useRef(null);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    setTimeout(() => setLayout(newLayout), 50); // Force re-render
  };

  const handleCustomGridChange = (newGrid) => {
    setCustomGrid(newGrid);
  };

  return (
    <div className="container">
      <h1>Collage Creator</h1>
      <ImageUploader onUpload={setImages} />
      <CollageOptions onLayoutChange={handleLayoutChange} onCustomGridChange={handleCustomGridChange} />
      <div ref={collageRef} className="collage-wrapper">
        {images.length > 0 ? (
          <Collage images={images} layout={layout} customGrid={customGrid} />
        ) : (
          <p>No images uploaded</p>
        )}
      </div>
      <ExportButton collageRef={collageRef} />
    </div>
  );
}

export default App;