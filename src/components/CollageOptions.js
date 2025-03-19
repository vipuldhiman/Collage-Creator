import React from "react";

const CollageOptions = ({ onSelectLayout }) => {
  return (
    <div className="collage-options">
      <h3>Select Collage Layout</h3>
      <button onClick={() => onSelectLayout("grid")}>Grid Layout</button>
      <button onClick={() => onSelectLayout("vertical")}>Vertical Stack</button>
      <button onClick={() => onSelectLayout("horizontal")}>Horizontal Stack</button>
    </div>
  );
};

export default CollageOptions;