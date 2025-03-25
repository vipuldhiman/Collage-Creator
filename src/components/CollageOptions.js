import React, { useState } from "react";

const CollageOptions = ({ onLayoutChange, onCustomGridChange }) => {
  const [selectedLayout, setSelectedLayout] = useState("custom");

  const handleLayoutChange = (e) => {
    const newLayout = e.target.value;
    setSelectedLayout(newLayout);
    onLayoutChange(newLayout);
  };

  return (
    <div className="options">
      <h3>Select Layout</h3>
      <select onChange={handleLayoutChange} value={selectedLayout}>
        <option value="custom">Custom</option>
        <option value="rows">Rows</option>
        <option value="columns">Columns</option>
        <option value="masonry">Masonry</option>
      </select>

      {/* Show custom layout options only if "Custom" is selected */}
      {selectedLayout === "custom" && (
        <>
          <h3>Choose a Custom Layout</h3>
          <select onChange={(e) => onCustomGridChange(e.target.value)}>
            <option value="grid-1x1">1x1 (Full Image)</option>
            <option value="grid-2x2">2x2 Grid</option>
            <option value="grid-3x3">3x3 Grid</option>
            <option value="grid-dynamic">Dynamic Grid</option>
            <option value="diagonal">Diagonal Split</option>
            <option value="asymmetrical">Asymmetrical Layout</option>
          </select>
        </>
      )}
    </div>
  );
};

export default CollageOptions;