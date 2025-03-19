import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders collage creator title", () => {
  render(<App />);
  const title = screen.getByText(/Collage Creator/i);
  expect(title).toBeInTheDocument();
});