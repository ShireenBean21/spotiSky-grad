import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../app/components/Header";
import React from "react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  it("renders without crashing", () => {
    //@ts-ignore
    useRouter.mockReturnValue({ query: {} });
    render(<Header showSearchBar={false} />);

    // Check for the presence of the "Sign up" link
    const signUpLink = screen.getByText("Sign up");
    expect(signUpLink).toBeInTheDocument();

    // Check for the presence of the "Log in" link
    const logInLink = screen.getByText("Log in");
    expect(logInLink).toBeInTheDocument();
  });

  it("renders the search bar when showSearchBar is true", () => {
    //@ts-ignore
    useRouter.mockReturnValue({ query: {} });
    render(<Header showSearchBar={true} />);
    // Check for the presence of the search bar
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });

  it("does not render the search bar when showSearchBar is false", () => {
    render(<Header showSearchBar={false} />);

    // Check for the absence of the search bar
    const searchBar = screen.queryByRole("textbox");
    expect(searchBar).not.toBeInTheDocument();
  });
});
