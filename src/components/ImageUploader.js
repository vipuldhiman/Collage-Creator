import React, { useState } from "react";

const ImageUploader = ({ onImagesUpload }) => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    
    const files = Array.from(event.target.files);

    const imageUrls = files.map((file) => {
      const url = URL.createObjectURL(file);
      return url;
    });

    setImages(imageUrls);

    if (onImagesUpload) {
      onImagesUpload(imageUrls);
    }
  };

  return (
    <div className="image-uploader">
      <input 
        type="file" 
        multiple 
        accept="image/*" 
        onChange={handleImageUpload} 
        data-testid="file-input"
      />
    </div>
  );
};

export default ImageUploader;