import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CollageOptions from "../components/CollageOptions";

describe("CollageOptions Component", () => {
  test("renders layout dropdown", () => {
    render(<CollageOptions onLayoutChange={jest.fn()} onCustomGridChange={jest.fn()} />);
    
    // Ensure the first dropdown (layout selection) is present
    const dropdowns = screen.getAllByRole("combobox");
    expect(dropdowns.length).toBeGreaterThanOrEqual(1);
  });

  test("triggers layout change", () => {
    const mockChange = jest.fn();
    render(<CollageOptions onLayoutChange={mockChange} onCustomGridChange={jest.fn()} />);
    
    // Select the first dropdown (layout selection)
    const layoutDropdown = screen.getAllByRole("combobox")[0];
    fireEvent.change(layoutDropdown, { target: { value: "masonry" } });

    expect(mockChange).toHaveBeenCalledWith("masonry");
  });

  test("shows custom grid options only for custom layout", () => {
    render(<CollageOptions onLayoutChange={jest.fn()} onCustomGridChange={jest.fn()} />);
    
    // Select "Custom" layout
    const layoutDropdown = screen.getAllByRole("combobox")[0];
    fireEvent.change(layoutDropdown, { target: { value: "custom" } });

    // Ensure the second dropdown (custom grid options) is now visible
    expect(screen.getByText("Choose a Custom Layout")).toBeInTheDocument();
  });
});