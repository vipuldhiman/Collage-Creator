import { render, screen, fireEvent } from "@testing-library/react";
import ExportButton from "../components/ExportButton";
import html2canvas from "html2canvas";

jest.mock("html2canvas");

describe("ExportButton Component", () => {
  it("triggers export function", async () => {
    const collageRef = { current: document.createElement("div") };

    // ✅ Mock html2canvas to return a valid object with toDataURL
    html2canvas.mockResolvedValue({
      toDataURL: jest.fn(() => "mocked-data-url"), // ✅ Ensure this function exists
    });

    render(<ExportButton collageRef={collageRef} />);

    const button = screen.getByRole("button", { name: /Download Collage/i });
    fireEvent.click(button);

    // ✅ Ensure html2canvas was called correctly
    expect(html2canvas).toHaveBeenCalledWith(collageRef.current);
  });
});