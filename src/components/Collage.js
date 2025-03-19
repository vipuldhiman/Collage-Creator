import React from "react";

const Collage = ({ images, layout }) => {
  return (
    <div className={`collage ${layout}`}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Uploaded ${index}`} className="collage-image" />
      ))}
    </div>
  );
};

export default Collage;