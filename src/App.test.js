import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders the app title", () => {
    render(<App />);
    expect(screen.getByText("Collage Creator")).toBeInTheDocument();
  });

  test("renders image upload button", () => {
    render(<App />);
    expect(screen.getByText("📷 Choose Images")).toBeInTheDocument();
  });

  test("renders download button", () => {
    render(<App />);
    expect(screen.getByText("Download Collage")).toBeInTheDocument();
  });
});