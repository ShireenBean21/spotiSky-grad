import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../app/page";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock axios
jest.mock("axios");
const mockAxios = new MockAdapter(axios);

describe("Homepage", () => {
  beforeEach(() => {
    // Mock useRouter to return an empty object
    //@ts-ignore
    useRouter.mockReturnValue({});
    // Mock useSearchParams to return an empty object
    //@ts-ignore
    useSearchParams.mockReturnValue({
      entries: () => [],
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("renders banner image", () => {
    render(<Home />);
    const bannerImage = screen.getByAltText("Rihanna");
    expect(bannerImage).toBeInTheDocument();
  });

  it("renders Rihanna's Albums header", () => {
    render(<Home />);
    const header = screen.getByText(/Rihanna's Albums/i);
    expect(header).toBeInTheDocument();
  });

  it("renders Featured Playlists header", () => {
    render(<Home />);
    const header = screen.getByText(/Featured Playlists/i);
    expect(header).toBeInTheDocument();
  });
  it("renders the page even when API call fails", async () => {
    // Mock axios.get to return a failed response
    axios.get = jest.fn().mockRejectedValue(new Error("API call failed"));

    render(<Home />);
    // Check that the page title is still rendered
    const header = screen.getByText(/Rihanna's Albums/i);
    // Verify the page doesn't crash and the title is still rendered
    expect(header).toBeInTheDocument();
  });
});
