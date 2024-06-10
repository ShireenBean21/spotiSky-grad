/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SideNav from "@/app/components/sidenav";
import React from "react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Sidenav", () => {
  beforeEach(() => {
    //@ts-ignore
    useRouter.mockReturnValue({ query: {} });
  });
  it("navigates to Create Playlist page when 'Create Playlist' button is clicked", () => {
    // Mock the useRouter function
    const pushMock = jest.fn();
    //@ts-ignore
    useRouter.mockReturnValue({ push: pushMock });

    const { getByText } = render(<SideNav />);
    const createPlaylistButton = screen.getByText("Create Playlist");

    fireEvent.click(createPlaylistButton);

    // Check if the push function was called with the correct route
    expect(pushMock).toHaveBeenCalledWith("/createplaylist");
  });
  it("navigates to Genres page when 'Genres' button is clicked", () => {
    // Mock the useRouter function
    const pushMock = jest.fn();
    //@ts-ignore
    useRouter.mockReturnValue({ push: pushMock });

    const { getByText } = render(<SideNav />);
    const GenresButton = screen.getByText("Genres");

    fireEvent.click(GenresButton);

    // Check if the push function was called with the correct route
    expect(pushMock).toHaveBeenCalledWith("/genres");
  });
  it("renders correct icons for buttons", () => {
    render(<SideNav />);
    const createPlaylistButton = screen.getByRole("button", {
      name: /create playlist/i,
    });
    const genresButton = screen.getByRole("button", { name: /genres/i });

    const createPlaylistIcon = createPlaylistButton.querySelector("svg");
    // eslint-disable-next-line testing-library/no-node-access
    const genresIcon = genresButton.querySelector("svg");

    expect(createPlaylistIcon).toBeInTheDocument();
    expect(genresIcon).toBeInTheDocument();
  });
});
