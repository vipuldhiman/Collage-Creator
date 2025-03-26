import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import ExportButton from "../components/ExportButton";

// ✅ Fully mock html2canvas to return a fake canvas
jest.mock("html2canvas", () =>
  jest.fn(() =>
    Promise.resolve({
      toDataURL: jest.fn(() => "data:image/jpeg;base64,mockImageData"),
    })
  )
);

describe("ExportButton Component", () => {
  test("renders export button", () => {
    const mockRef = { current: document.createElement("div") };
    render(<ExportButton collageRef={mockRef} />);
    expect(screen.getByText("Download Collage")).toBeInTheDocument();
  });

  test("triggers download on click", async () => {
    const mockRef = { current: document.createElement("div") };
    render(<ExportButton collageRef={mockRef} />);

    const button = screen.getByText("Download Collage");
    fireEvent.click(button);

    // ✅ Ensure mock function is called
    await waitFor(() => expect(require("html2canvas")).toHaveBeenCalledTimes(1));

    console.log("✅ html2canvas mock calls:", require("html2canvas").mock.calls.length);

    expect(button).toBeInTheDocument();
  });
});