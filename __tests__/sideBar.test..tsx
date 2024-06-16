import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "@/app/components/sidebar";
import React from "react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Sidebar", () => {
  const mockPush = jest.fn();
  const mockOnSearchClick = jest.fn();

  beforeEach(() => {
    mockPush.mockClear();
    mockOnSearchClick.mockClear();
    //@ts-ignore
    useRouter.mockReturnValue({ push: mockPush, query: {} });
  });

  it("renders the sidebar correctly", () => {
    render(<Sidebar onSearchClick={mockOnSearchClick} />);

    // Check for the presence of Home and Search links
    const homeElement = screen.getByText("Home");
    const searchElement = screen.getByText("Search");

    expect(homeElement).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
  });

  it("calls onSearchClick when the search button is clicked", () => {
    render(<Sidebar onSearchClick={mockOnSearchClick} />);

    const searchElement = screen.getByText("Search");
    fireEvent.click(searchElement);

    expect(mockOnSearchClick).toHaveBeenCalledTimes(1);
  });

  it("navigates to the Home page when 'Home' link is clicked", () => {
    render(<Sidebar onSearchClick={mockOnSearchClick} />);
    const homeLink = screen.getByText("Home");

    fireEvent.click(homeLink);

    // eslint-disable-next-line testing-library/no-node-access
    expect(homeLink.closest("a")).toHaveAttribute("href", "/");
  });
});
