import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import GenresPage from "@/app/genres/page";
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

describe("GenrePage", () => {
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

  it("renders genres", async () => {
    render(<GenresPage />);

    // Use waitFor to wait for the asynchronous rendering of search results
    //@ts-ignore
    const searchResult = await screen.findByText("Jazz");

    expect(searchResult).toBeInTheDocument();
  });
  it("renders 'Hip Hop' tracks", async () => {
    // Mock axios.get to return a successful response
    //@ts-ignore
    axios.get.mockResolvedValue({
      data: {
        tracks: [
          {
            id: "1",
            name: "Track 1",
            album: { images: [{ url: "/track1.jpg" }] },
          },
          {
            id: "2",
            name: "Track 2",
            album: { images: [{ url: "/track2.jpg" }] },
          },
        ],
      },
    });

    render(<GenresPage />);

    const hipHopTitle = await screen.findByText("Hip Hop");
    const tracks = await screen.findAllByText("Track 1");

    expect(hipHopTitle).toBeInTheDocument();
    expect(tracks.length).toBeGreaterThan(0);
  });

  it("renders the page even when API call fails", async () => {
    // Mock axios.get to return a failed response
    axios.get = jest.fn().mockRejectedValue(new Error("API call failed"));

    render(<GenresPage />);

    // Check that the page title is still rendered
    const pageTitle = await screen.findAllByText("Genres");

    // Verify the page doesn't crash and the title is still rendered
    expect(pageTitle.length).toBeGreaterThan(0);
  });
});
