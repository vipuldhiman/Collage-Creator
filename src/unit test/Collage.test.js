import React from "react";
import { render, screen } from "@testing-library/react";
import Collage from "../components/Collage";

describe("Collage Component", () => {
  test("renders collage container", () => {
    const { container } = render(<Collage images={[]} layout="custom" />);
    expect(container.firstChild).toHaveClass("custom-layout");
  });

  test("renders images when provided", () => {
    const images = ["image1.jpg", "image2.jpg"];
    render(<Collage images={images} layout="custom" />);
    const renderedImages = screen.getAllByRole("img");
    expect(renderedImages.length).toBe(2);
  });

  test("applies correct layout", () => {
    const { container } = render(<Collage images={["img.jpg"]} layout="rows" />);
    expect(container.firstChild).toHaveClass("rows-layout");
  });
});