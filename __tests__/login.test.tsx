import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/app/login/page";
import { signIn } from "next-auth/react";

// Mock the signIn function from next-auth/react
jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("Login Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Spotify logo", () => {
    render(<Login />);
    const logo = screen.getByAltText("spotify logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(<Login />);
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  it("calls signIn function when login button is clicked", () => {
    render(<Login />);
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    expect(signIn).toHaveBeenCalledWith("spotify", {
      callbackUrl: "http://localhost:3000",
    });
  });
});
