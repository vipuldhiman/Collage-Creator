import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ImageUploader from "../components/ImageUploader";

// Mock URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => "mock-url");

describe("ImageUploader Component", () => {
  test("renders upload button", () => {
    render(<ImageUploader onUpload={jest.fn()} />);
    
    // Match text while ignoring the emoji
    expect(screen.getByText(/choose images/i)).toBeInTheDocument();
  });

  test("triggers file upload event", () => {
    const mockUpload = jest.fn();
    render(<ImageUploader onUpload={mockUpload} />);

    // Select the input field
    const input = screen.getByLabelText("📷 Choose Images", { selector: "input" });

    // Simulate file upload
    fireEvent.change(input, { target: { files: [new File([""], "test.jpg", { type: "image/jpeg" })] } });

    expect(mockUpload).toHaveBeenCalled();
  });
});