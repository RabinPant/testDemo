import React from "react";

import { render, screen } from "@testing-library/react";

import Counter from "./counter";

test("Initial value of counter should be 0", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId("cnt");
  expect(counterEl).toBeInTheDocument();
});
