import { render, fireEvent, waitFor } from "@testing-library/react";
import ImageUploader from "../components/ImageUploader";
import React from "react";

describe("ImageUploader Component", () => {
  let mockSetImages, mockOnImagesUpload;

  beforeEach(() => {
    mockSetImages = jest.fn();
    mockOnImagesUpload = jest.fn();

    // Mock URL.createObjectURL
    global.URL.createObjectURL = jest.fn(() => "mocked-url");
  });

  it("uploads an image", async () => {
    const { getByTestId } = render(<ImageUploader onImagesUpload={mockOnImagesUpload} />);

    const fileInput = getByTestId("file-input");
    const file = new File(["dummy content"], "image.png", { type: "image/png" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(mockOnImagesUpload).toHaveBeenCalledWith(["mocked-url"]);
    });
  });
});