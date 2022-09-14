import { render, screen } from "@testing-library/react";
import { Price } from "./Price";

test("render with correct price and currency", () => {
  render(<Price price={22} cartMode={false} currency={"UAH"} />);
  expect(screen.getByText("22.00")).toBeInTheDocument();
  expect(screen.getByText("UAH")).toBeInTheDocument();
});

test("render with default currency", () => {
  render(<Price price={22} cartMode={true} />);
  expect(screen.getByText("USD")).toBeInTheDocument();
});
