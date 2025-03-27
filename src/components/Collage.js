import React from "react";
import Masonry from "react-masonry-css";

const LAYOUTS = {
  rows: "rows-layout",
  columns: "columns-layout",
};

const CUSTOM_GRID_STYLES = {
  "grid-1x1": { gridTemplateColumns: "1fr", gridTemplateRows: "1fr" },
  "grid-2x2": { gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 1fr)" },
  "grid-3x3": { gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)" },
};

const Collage = ({ images, layout, customGrid }) => {
  if (layout === "masonry") {
    const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

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
  }

  if (layout in LAYOUTS) {
    return (
      <div className={LAYOUTS[layout]}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`${layout} ${index}`} />
        ))}
      </div>
    );
  }

  if (layout === "custom") {
    if (customGrid === "diagonal") {
      return (
        <div className="custom-layout diagonal">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Diagonal ${index}`} className={`diagonal-img img-${index + 1}`} />
          ))}
        </div>
      );
    }

    if (customGrid === "asymmetrical") {
      return (
        <div className="custom-layout asymmetrical">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Custom ${index}`} className={`asym-img img-${index + 1}`} />
          ))}
        </div>
      );
    }

    const gridStyle =
      customGrid === "grid-dynamic"
        ? { gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(images.length))}, 1fr)` }
        : CUSTOM_GRID_STYLES[customGrid] || { gridTemplateColumns: "1fr", gridTemplateRows: "1fr" };

    return (
      <div className="custom-layout" style={{ display: "grid", ...gridStyle, gap: "10px" }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Custom ${index}`} className="custom-image" />
        ))}
      </div>
    );
  }

  return null;
};

export default Collage;