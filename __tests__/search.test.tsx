import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchPage from "@/app/search/page";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("SearchPage", () => {
  //@ts-ignore
  useRouter.mockReturnValue({ query: {} });

  //@ts-ignore
  useSearchParams.mockReturnValue(new URLSearchParams(""));

  it("renders without crashing", () => {
    render(<SearchPage />);

    const searchResults = screen.getByText("searchResults");

    expect(searchResults).toBeInTheDocument();
  });
});
