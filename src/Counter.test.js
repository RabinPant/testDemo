import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./counter";

test("Initial value of counter should be 0", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId("cnt");
  expect(counterEl).toBeInTheDocument();
});

test("On Click, it should increment counter by 1", () => {
  render(<Counter />);
  const btnEl = screen.getByTestId("btn");
  const counterEl = screen.getByTestId("cnt");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("1");
});
