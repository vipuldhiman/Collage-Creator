import React, { useState, useRef } from "react";
import ImageUploader from "./components/ImageUploader";
import CollageOptions from "./components/CollageOptions";
import Collage from "./components/Collage";
import ExportButton from "./components/ExportButton";
import "./styles.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [layout, setLayout] = useState("grid");
  const collageRef = useRef(null);

  return (
    <div className="app">
      <h1>Collage Creator</h1>
      <CollageOptions onSelectLayout={setLayout} />
      <ImageUploader onImagesUpload={setImages} />
      <div ref={collageRef} className="collage-container">
        <Collage images={images} layout={layout} />
      </div>
      {images.length > 0 && <ExportButton collageRef={collageRef} />}
    </div>
  );
};

export default App;