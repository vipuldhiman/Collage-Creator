// src/components/ImageUploader.js
import React, { useState } from "react";
import "../styles.css";

const ImageUploader = ({ onUpload }) => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
    onUpload(imageUrls);
  };

  return (
    <div className="uploader">
      {/* Styled Upload Button */}
      <label htmlFor="file-upload" className="upload-button">
        📷 Choose Images
      </label>
      <input id="file-upload" type="file" multiple accept="image/*" onChange={handleFileChange} />
      
      {/* Image Preview Section */}
      <div className="image-preview">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;