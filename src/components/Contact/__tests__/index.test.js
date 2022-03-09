/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  it("renders", () => {
    render(<Contact></Contact>);
  });

  it("h1 has text content", () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId("h1")).toHaveTextContent("Contact me");
  });

  it("submit has text content", () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId("submit")).toHaveTextContent("Submit");
  });
});
