import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Users from "./users";

test("checking", async () => {
  render(<Users />);

  const liEl = await screen.findAllByRole("listitem");
  expect(liEl).not.toHaveLength(0);
});
