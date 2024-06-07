import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import SearchPage from "@/app/search/page"; // Adjust the import path if needed
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock axios
jest.mock("axios");

describe("SearchPage", () => {
  beforeEach(() => {
    //@ts-ignore
    // Mock useSearchParams to return a specific query
    useSearchParams.mockReturnValue(new URLSearchParams("query=test"));

    // Mock useRouter to return an empty object
    //@ts-ignore
    useRouter.mockReturnValue({});

    // Mock axios.get to return a mock response
    //@ts-ignore
    axios.get.mockResolvedValue({
      data: {
        tracks: {
          items: [
            {
              id: "1",
              name: "Track 1",
              type: "track",
              images: [{ url: "/track1.jpg" }],
            },
          ],
        },
        artists: { items: [] },
        albums: { items: [] },
        playlists: { items: [] },
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders search results based on the query", async () => {
    render(<SearchPage />);

    // Use waitFor to wait for the asynchronous rendering of search results
    //@ts-ignore
    const searchResult = await waitFor(() => screen.getByText("Track 1"));

    expect(searchResult).toBeInTheDocument();
  });
});
