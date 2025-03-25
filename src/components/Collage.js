import React from "react";
import Masonry from "react-masonry-css";

const Collage = ({ images, layout, customGrid }) => {
  if (layout === "masonry") {
    const breakpointColumnsObj = {
      default: 3,
      1100: 2,
      700: 1,
    };

    return (
      <div className="masonry-grid">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Masonry ${index}`} className="masonry-image" />
          ))}
        </Masonry>
      </div>
    );
  } else if (layout === "rows") {
    return (
      <div className="rows-layout">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Row ${index}`} />
        ))}
      </div>
    );
  } else if (layout === "columns") {
    return (
      <div className="columns-layout">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Column ${index}`} />
        ))}
      </div>
    );
  } else if (layout === "custom") {
    let gridTemplateColumns = "1fr";
    let gridTemplateRows = "1fr";

    if (customGrid === "grid-1x1") {
      gridTemplateColumns = "1fr";
    } else if (customGrid === "grid-2x2") {
      gridTemplateColumns = "repeat(2, 1fr)";
      gridTemplateRows = "repeat(2, 1fr)";
    } else if (customGrid === "grid-3x3") {
      gridTemplateColumns = "repeat(3, 1fr)";
      gridTemplateRows = "repeat(3, 1fr)";
    } else if (customGrid === "grid-dynamic") {
            gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(images.length))}, 1fr)`;
          } else if (customGrid === "diagonal") {
            return (
              <div className="custom-layout diagonal">
                {images.slice(0, 2).map((src, index) => (
                  <img key={index} src={src} alt={`Custom ${index}`} className={`diagonal-img img-${index + 1}`} />
                ))}
              </div>
            );
          } else if (customGrid === "asymmetrical") {
            return (
              <div className="custom-layout asymmetrical">
                {images.map((src, index) => (
                  <img key={index} src={src} alt={`Custom ${index}`} className={`asym-img img-${index + 1}`} />
                ))}
              </div>
            );
          }

    return (
      <div className="custom-layout" style={{ display: "grid", gridTemplateColumns, gridTemplateRows, gap: "10px" }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Custom ${index}`} className="custom-image" />
        ))}
      </div>
    );
  }

  return null;
};

export default Collage;