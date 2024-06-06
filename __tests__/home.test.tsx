"use client";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("contains playlist text", () => {
    render(<Home />);

    // eslint-disable-next-line testing-library/await-async-queries
    const playlist = screen.findByText("playlist");

    expect(playlist).toBeInTheDocument();
  });
});
