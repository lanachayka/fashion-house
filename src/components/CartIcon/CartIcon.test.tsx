import { fireEvent, render, screen } from "@testing-library/react";
import { CartIcon } from "./CartIcon";

test("render correct count", () => {
  render(<CartIcon count={5} />);
  expect(screen.getByText("5")).toBeInTheDocument();
});

test("shown modal window after click on cart icon", () => {
  render(<CartIcon count={0} />);
  const icon = screen.getByRole("img");
  fireEvent.click(icon);
  expect(screen.getByText("Products")).toBeInTheDocument();
});

test("hide modal window after click on close icon", () => {
  render(<CartIcon count={2} />);
  const icon = screen.getByRole("img");
  fireEvent.click(icon);
  const close = screen.getByAltText("close icon");
  fireEvent.click(close);
  expect(close).not.toBeInTheDocument();
});
