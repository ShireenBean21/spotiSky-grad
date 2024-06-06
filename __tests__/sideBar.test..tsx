import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "@/app/components/sidebar";
import React from "react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Sidebar", () => {
  beforeEach(() => {
    //@ts-ignore
    useRouter.mockReturnValue({ query: {} });
  });

  it("renders the sidebar correctly", () => {
    render(
      <Sidebar
        onSearchClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    // Check for the presence of Home and Search links
    const homeElement = screen.getByText("Home");
    const searchElement = screen.getByText("Search");

    expect(homeElement).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
  });

  it("calls onSearchClick when the search button is clicked", () => {
    const mockOnSearchClick = jest.fn();

    render(<Sidebar onSearchClick={mockOnSearchClick} />);

    const searchElement = screen.getByText("Search");
    fireEvent.click(searchElement);

    expect(mockOnSearchClick).toHaveBeenCalledTimes(1);
  });
});
